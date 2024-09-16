import {
    RuntimeModule,
    runtimeModule,
    state,
    runtimeMethod,
} from "@proto-kit/module";
import { inject } from "tsyringe";
import { assert, State } from "@proto-kit/protocol";
import { Balances } from "../balances";
import { Balance, TokenId, UInt64 } from "@proto-kit/library";
import { Field, Poseidon, PublicKey } from "o1js";

@runtimeModule()
export class Vault extends RuntimeModule<{}> {
    @state() public vaultId = State.from(Field);
    @state() public depositShare = State.from<TokenId>(TokenId);
    public constructor(
        @inject("Balances") private balances: Balances,
    ) {
        super();
    }

    @runtimeMethod() 
    public async setDepositShare(tokenId: TokenId) {
        await this.depositShare.set(tokenId);
    }

    @runtimeMethod()
    public async deposit(
        token: TokenId,
        amount: Balance,
        owner: PublicKey
    ) {
        const vaultId = await this.vaultId.get();
        const ownerBalance = await this.balances.getBalance(token, owner);
        assert(ownerBalance.greaterThanOrEqual(amount));
        const vaultAccount = PublicKey.fromGroup(
            Poseidon.hashToGroup([vaultId.value, token])
        );
        await this.balances.transfer(token, owner, vaultAccount, amount);
        const depositShare = await this.depositShare.get();
        await this.balances.mintToken(depositShare.value, owner, amount);
    }

    @runtimeMethod()
    public async withdraw(
        token: TokenId,
        amount: Balance,
        owner: PublicKey
    ) {
        const vaultId = await this.vaultId.get();
        const vaultAccount = PublicKey.fromGroup(
            Poseidon.hashToGroup([vaultId.value, token])
        );
        const vaultBalance = await this.balances.getBalance(token, vaultAccount);
        assert(vaultBalance.greaterThanOrEqual(amount));
        await this.balances.transfer(token, vaultAccount, owner, amount);
        const depositShare = await this.depositShare.get();
        await this.balances.burnToken(depositShare.value, owner, amount);
    }
}
