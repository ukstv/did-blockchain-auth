declare module "@smontero/eosio-local-provider" {
  export class EOSIOProvider {
    constructor(params: any) {}
    async getChainId(): Promise<string>;
  }
}
