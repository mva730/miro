/// <reference types='codeceptjs' />
type BaseHelper = import('./src/helpers/base_helper');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any }
  interface Methods extends Puppeteer, BaseHelper {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
