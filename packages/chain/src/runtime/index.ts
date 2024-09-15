import { Balance, VanillaRuntimeModules } from "@proto-kit/library";
import { ModulesConfig } from "@proto-kit/common";
import { Balances } from "./modules/balances";
import { LimitOrders } from "./modules/lottery/limit-order";
import { PoolModule } from "./modules/lottery/lottery";

export const modules = VanillaRuntimeModules.with({
  Balances,
  LimitOrders,
  PoolModule,
});

export const config: ModulesConfig<typeof modules> = {
  Balances: {
    totalSupply: Balance.from(10_000),
  },
  LimitOrders: {},
  PoolModule: {},
};

export default {
  modules,
  config,
};
