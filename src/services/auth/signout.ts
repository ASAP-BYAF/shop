import type { ApiContext } from "@/@/types/data/data";
import { fetcher } from "@/@/utils/api/api";

/**
 * 認証API（サインアウト）
 * @param context APIコンテキスト
 * @returns サインアウトメッセージ
 */
const signout = async (context: ApiContext): Promise<{ message: string }> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, "")}/auth/signout`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
};

export default signout;
