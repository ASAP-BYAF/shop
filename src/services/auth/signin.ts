// @/types/dataは後ほど定義
import { ApiContext, User } from "@/@/types/data/data";
// 先ほど定義したsrc/@/utils/api/index.tsから読み込み
import { fetcher } from "@/@/utils/api/api";

export type SigninParams = {
  /**
   * ユーザー名
   * サンプルユーザーのユーザー名は "user"
   */
  username: string;
  /**
   * パスワード
   * サンプルユーザーのパスワードは "password"
   */
  password: string;
};

/**
 * 認証API（サインイン）
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns ログインユーザー
 */
const signin = async (
  context: ApiContext,
  params: SigninParams
): Promise<User> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, "")}/auth/signin`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );
};

export default signin;
