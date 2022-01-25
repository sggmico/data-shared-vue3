import { provideLoginInfo } from "./useLoginInfo.js";

export default function provideGlobalData(app) {
  provideLoginInfo(app);
}
