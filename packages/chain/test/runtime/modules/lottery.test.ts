import { TestingAppChain } from "@proto-kit/sdk";
import { method, PrivateKey } from "o1js";
import { ERC20 } from "../../../src/runtime/modules/erc20/erc20";
import {Pool ,PoolModule } from '../../../src/runtime/modules/lottery/lottery'
import { log } from "@proto-kit/common";
import { UInt64 } from "@proto-kit/library";

log.setLevel("ERROR");

describe("lottery", () => {
    it("should demonstrate minting token", async () => {
        const appChain = TestingAppChain.fromRuntime({
            PoolModule,
            // LimitOrder
        });

        appChain.configurePartial({
            Runtime: {
                PoolModule: {},
                Balances: {},
                // LimitOrder:{}
            },
        });

        await appChain.start();

        const alicePrivateKey = PrivateKey.random();
        const alice = alicePrivateKey.toPublicKey();

    }, 1_000_000);
})