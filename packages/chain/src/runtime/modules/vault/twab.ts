import {
    RuntimeModule,
    runtimeModule,
    state,
    runtimeMethod,
} from "@proto-kit/module";
import { inject } from "tsyringe";
import { assert, State, StateMap } from "@proto-kit/protocol";
import { Balances } from "../balances";
import { Balance, TokenId } from "@proto-kit/library";
import { Field, Poseidon, PublicKey, Struct, UInt64 } from "o1js";

export class BalanceBox extends Struct({
    balance: Balance,
    cumulative: Field,
    timestamp: Field,
}) {
    public static from(balance: Balance, cumulative: Field, timestamp: Field) {
        return new BalanceBox({
            balance,
            cumulative,
            timestamp,
        });
    }
}

@runtimeModule()
export class Twab extends RuntimeModule<{}> {
    @state() public balanceHistory = StateMap.from<PublicKey, BalanceBox[]>(PublicKey, BalanceBox[]);
    public constructor(
        @inject("Balances") private balances: Balances,
    ) {
        super();
    }

    @runtimeMethod()
    public async addEntry(
        owner: PublicKey,
        amount: Balance,
    ) {
        const balanceHist = await this.balanceHistory.get(owner);
        const balanceBoxes = balanceHist.value;
        const lastBalanceBox = balanceBoxes[balanceBoxes.length - 1];
        const lastBalance = lastBalanceBox.balance;
        const lastCumulative = lastBalanceBox.cumulative;
        const lastTimestamp = lastBalanceBox.timestamp;
        const timestampNow = Field.from(0);
        const cumulative = lastCumulative.add(lastBalance.mul(timestampNow.sub(lastTimestamp)));
        balanceBoxes.push(BalanceBox.from(amount, cumulative, timestampNow));
        await this.balanceHistory.set(owner, balanceBoxes);
    }
}
