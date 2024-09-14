import { TestingAppChain } from "@proto-kit/sdk";
import { method, PrivateKey } from "o1js";
import { ERC20 } from "../../../src/runtime/modules/erc20/erc20";
import { log } from "@proto-kit/common";
import { UInt64 } from "@proto-kit/library";

log.setLevel("ERROR");

describe("erc20", () => {
    it("should demonstrate minting token", async () => {
        const appChain = TestingAppChain.fromRuntime({
            ERC20,
        });

        appChain.configurePartial({
            Runtime: {
                ERC20: {},
                Balances: {}
            },
        });

        await appChain.start();

        const alicePrivateKey = PrivateKey.random();
        const alice = alicePrivateKey.toPublicKey();
        // console.log(alice);
        // const tokenId = TokenId.from(0);

        // appChain.setSigner(alicePrivateKey);

        // const balances = appChain.runtime.resolve("Balances");

        // const tx1 = await appChain.transaction(alice, async () => {
        //   await balances.addBalance(tokenId, alice, UInt64.from(1000));
        // });

        // await tx1.sign();
        // await tx1.send();

        // const block = await appChain.produceBlock();

        // const key = new BalancesKey({ tokenId, address: alice });
        // const balance = await appChain.query.runtime.Balances.balances.get(key);

        // expect(block?.transactions[0].status.toBoolean()).toBe(true);
        // expect(balance?.toBigInt()).toBe(1000n);
    }, 1_000_000);
});
