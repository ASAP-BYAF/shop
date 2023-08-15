import type { ApiContext, User } from "@/types/data";
import { fetcher } from "@/utils/api";

export type GetUserParams = {
  id: number;
};

const getUser = async (
  context: ApiContext,
  { id }: GetUserParams
): Promise<User> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, "")}/users/${id}`,
    {
      headers: {
        Accept: "application/json",
        "Context-Type": "application/json",
      },
    }
  );
};

export default getUser;
