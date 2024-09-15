import { TestingAppChain } from "@proto-kit/sdk";
import { PrivateKey } from "o1js";
import { PoolModule } from '../../../src/runtime/modules/lottery/lottery'
import { log } from "@proto-kit/common";

log.setLevel("ERROR");

describe("lottery", () => {
    it("should demonstrate minting token", async () => {
        const appChain = TestingAppChain.fromRuntime({
            PoolModule
        });

        appChain.configurePartial({
            Runtime: {
                PoolModule: {},
                Balances: {},
            },
        });

        await appChain.start();

        const alicePrivateKey = PrivateKey.random();
        const alice = alicePrivateKey.toPublicKey();

    }, 1_000_000);
})