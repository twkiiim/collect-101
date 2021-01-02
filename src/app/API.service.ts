/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateUserInput = {
  id?: string | null;
  username: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateUserInput = {
  id: string;
  username?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteUserInput = {
  id?: string | null;
};

export type CreateEntryInput = {
  id?: string | null;
  userID: string;
  phrase: string;
  definition?: string | null;
  example?: string | null;
  reference?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelEntryConditionInput = {
  userID?: ModelIDInput | null;
  phrase?: ModelStringInput | null;
  definition?: ModelStringInput | null;
  example?: ModelStringInput | null;
  reference?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelEntryConditionInput | null> | null;
  or?: Array<ModelEntryConditionInput | null> | null;
  not?: ModelEntryConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateEntryInput = {
  id: string;
  userID?: string | null;
  phrase?: string | null;
  definition?: string | null;
  example?: string | null;
  reference?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteEntryInput = {
  id?: string | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  username?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelEntryFilterInput = {
  id?: ModelIDInput | null;
  userID?: ModelIDInput | null;
  phrase?: ModelStringInput | null;
  definition?: ModelStringInput | null;
  example?: ModelStringInput | null;
  reference?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelEntryFilterInput | null> | null;
  or?: Array<ModelEntryFilterInput | null> | null;
  not?: ModelEntryFilterInput | null;
};

export type SearchableEntryFilterInput = {
  id?: SearchableIDFilterInput | null;
  userID?: SearchableIDFilterInput | null;
  phrase?: SearchableStringFilterInput | null;
  definition?: SearchableStringFilterInput | null;
  example?: SearchableStringFilterInput | null;
  reference?: SearchableStringFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  and?: Array<SearchableEntryFilterInput | null> | null;
  or?: Array<SearchableEntryFilterInput | null> | null;
  not?: SearchableEntryFilterInput | null;
};

export type SearchableIDFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
  range?: Array<string | null> | null;
};

export type SearchableStringFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
  range?: Array<string | null> | null;
};

export type SearchableEntrySortInput = {
  field?: SearchableEntrySortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableEntrySortableFields {
  id = "id",
  userID = "userID",
  phrase = "phrase",
  definition = "definition",
  example = "example",
  reference = "reference",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}

export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc"
}

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  username: string;
  entries: {
    __typename: "ModelEntryConnection";
    items: Array<{
      __typename: "Entry";
      id: string;
      userID: string;
      phrase: string;
      definition: string | null;
      example: string | null;
      reference: string | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string | null;
  updatedAt: string | null;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  username: string;
  entries: {
    __typename: "ModelEntryConnection";
    items: Array<{
      __typename: "Entry";
      id: string;
      userID: string;
      phrase: string;
      definition: string | null;
      example: string | null;
      reference: string | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string | null;
  updatedAt: string | null;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  username: string;
  entries: {
    __typename: "ModelEntryConnection";
    items: Array<{
      __typename: "Entry";
      id: string;
      userID: string;
      phrase: string;
      definition: string | null;
      example: string | null;
      reference: string | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string | null;
  updatedAt: string | null;
};

export type CreateEntryMutation = {
  __typename: "Entry";
  id: string;
  userID: string;
  user: {
    __typename: "User";
    id: string;
    username: string;
    entries: {
      __typename: "ModelEntryConnection";
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
  phrase: string;
  definition: string | null;
  example: string | null;
  reference: string | null;
  createdAt: string | null;
  updatedAt: string | null;
};

export type UpdateEntryMutation = {
  __typename: "Entry";
  id: string;
  userID: string;
  user: {
    __typename: "User";
    id: string;
    username: string;
    entries: {
      __typename: "ModelEntryConnection";
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
  phrase: string;
  definition: string | null;
  example: string | null;
  reference: string | null;
  createdAt: string | null;
  updatedAt: string | null;
};

export type DeleteEntryMutation = {
  __typename: "Entry";
  id: string;
  userID: string;
  user: {
    __typename: "User";
    id: string;
    username: string;
    entries: {
      __typename: "ModelEntryConnection";
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
  phrase: string;
  definition: string | null;
  example: string | null;
  reference: string | null;
  createdAt: string | null;
  updatedAt: string | null;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  username: string;
  entries: {
    __typename: "ModelEntryConnection";
    items: Array<{
      __typename: "Entry";
      id: string;
      userID: string;
      phrase: string;
      definition: string | null;
      example: string | null;
      reference: string | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string | null;
  updatedAt: string | null;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    username: string;
    entries: {
      __typename: "ModelEntryConnection";
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetEntryQuery = {
  __typename: "Entry";
  id: string;
  userID: string;
  user: {
    __typename: "User";
    id: string;
    username: string;
    entries: {
      __typename: "ModelEntryConnection";
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
  phrase: string;
  definition: string | null;
  example: string | null;
  reference: string | null;
  createdAt: string | null;
  updatedAt: string | null;
};

export type ListEntrysQuery = {
  __typename: "ModelEntryConnection";
  items: Array<{
    __typename: "Entry";
    id: string;
    userID: string;
    user: {
      __typename: "User";
      id: string;
      username: string;
      createdAt: string | null;
      updatedAt: string | null;
    } | null;
    phrase: string;
    definition: string | null;
    example: string | null;
    reference: string | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type SearchEntrysQuery = {
  __typename: "SearchableEntryConnection";
  items: Array<{
    __typename: "Entry";
    id: string;
    userID: string;
    user: {
      __typename: "User";
      id: string;
      username: string;
      createdAt: string | null;
      updatedAt: string | null;
    } | null;
    phrase: string;
    definition: string | null;
    example: string | null;
    reference: string | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  nextToken: string | null;
  total: number | null;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  username: string;
  entries: {
    __typename: "ModelEntryConnection";
    items: Array<{
      __typename: "Entry";
      id: string;
      userID: string;
      phrase: string;
      definition: string | null;
      example: string | null;
      reference: string | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string | null;
  updatedAt: string | null;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  username: string;
  entries: {
    __typename: "ModelEntryConnection";
    items: Array<{
      __typename: "Entry";
      id: string;
      userID: string;
      phrase: string;
      definition: string | null;
      example: string | null;
      reference: string | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string | null;
  updatedAt: string | null;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  username: string;
  entries: {
    __typename: "ModelEntryConnection";
    items: Array<{
      __typename: "Entry";
      id: string;
      userID: string;
      phrase: string;
      definition: string | null;
      example: string | null;
      reference: string | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string | null;
  updatedAt: string | null;
};

export type OnCreateEntrySubscription = {
  __typename: "Entry";
  id: string;
  userID: string;
  user: {
    __typename: "User";
    id: string;
    username: string;
    entries: {
      __typename: "ModelEntryConnection";
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
  phrase: string;
  definition: string | null;
  example: string | null;
  reference: string | null;
  createdAt: string | null;
  updatedAt: string | null;
};

export type OnUpdateEntrySubscription = {
  __typename: "Entry";
  id: string;
  userID: string;
  user: {
    __typename: "User";
    id: string;
    username: string;
    entries: {
      __typename: "ModelEntryConnection";
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
  phrase: string;
  definition: string | null;
  example: string | null;
  reference: string | null;
  createdAt: string | null;
  updatedAt: string | null;
};

export type OnDeleteEntrySubscription = {
  __typename: "Entry";
  id: string;
  userID: string;
  user: {
    __typename: "User";
    id: string;
    username: string;
    entries: {
      __typename: "ModelEntryConnection";
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
  phrase: string;
  definition: string | null;
  example: string | null;
  reference: string | null;
  createdAt: string | null;
  updatedAt: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateUser(
    input: CreateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
        createUser(input: $input, condition: $condition) {
          __typename
          id
          username
          entries {
            __typename
            items {
              __typename
              id
              userID
              phrase
              definition
              example
              reference
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(
    input: UpdateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
        updateUser(input: $input, condition: $condition) {
          __typename
          id
          username
          entries {
            __typename
            items {
              __typename
              id
              userID
              phrase
              definition
              example
              reference
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(
    input: DeleteUserInput,
    condition?: ModelUserConditionInput
  ): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
        deleteUser(input: $input, condition: $condition) {
          __typename
          id
          username
          entries {
            __typename
            items {
              __typename
              id
              userID
              phrase
              definition
              example
              reference
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreateEntry(
    input: CreateEntryInput,
    condition?: ModelEntryConditionInput
  ): Promise<CreateEntryMutation> {
    const statement = `mutation CreateEntry($input: CreateEntryInput!, $condition: ModelEntryConditionInput) {
        createEntry(input: $input, condition: $condition) {
          __typename
          id
          userID
          user {
            __typename
            id
            username
            entries {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          phrase
          definition
          example
          reference
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateEntryMutation>response.data.createEntry;
  }
  async UpdateEntry(
    input: UpdateEntryInput,
    condition?: ModelEntryConditionInput
  ): Promise<UpdateEntryMutation> {
    const statement = `mutation UpdateEntry($input: UpdateEntryInput!, $condition: ModelEntryConditionInput) {
        updateEntry(input: $input, condition: $condition) {
          __typename
          id
          userID
          user {
            __typename
            id
            username
            entries {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          phrase
          definition
          example
          reference
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateEntryMutation>response.data.updateEntry;
  }
  async DeleteEntry(
    input: DeleteEntryInput,
    condition?: ModelEntryConditionInput
  ): Promise<DeleteEntryMutation> {
    const statement = `mutation DeleteEntry($input: DeleteEntryInput!, $condition: ModelEntryConditionInput) {
        deleteEntry(input: $input, condition: $condition) {
          __typename
          id
          userID
          user {
            __typename
            id
            username
            entries {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          phrase
          definition
          example
          reference
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteEntryMutation>response.data.deleteEntry;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          username
          entries {
            __typename
            items {
              __typename
              id
              userID
              phrase
              definition
              example
              reference
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            username
            entries {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  async GetEntry(id: string): Promise<GetEntryQuery> {
    const statement = `query GetEntry($id: ID!) {
        getEntry(id: $id) {
          __typename
          id
          userID
          user {
            __typename
            id
            username
            entries {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          phrase
          definition
          example
          reference
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetEntryQuery>response.data.getEntry;
  }
  async ListEntrys(
    filter?: ModelEntryFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListEntrysQuery> {
    const statement = `query ListEntrys($filter: ModelEntryFilterInput, $limit: Int, $nextToken: String) {
        listEntrys(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            userID
            user {
              __typename
              id
              username
              createdAt
              updatedAt
            }
            phrase
            definition
            example
            reference
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListEntrysQuery>response.data.listEntrys;
  }
  async SearchEntrys(
    filter?: SearchableEntryFilterInput,
    sort?: SearchableEntrySortInput,
    limit?: number,
    nextToken?: string,
    from?: number
  ): Promise<SearchEntrysQuery> {
    const statement = `query SearchEntrys($filter: SearchableEntryFilterInput, $sort: SearchableEntrySortInput, $limit: Int, $nextToken: String, $from: Int) {
        searchEntrys(filter: $filter, sort: $sort, limit: $limit, nextToken: $nextToken, from: $from) {
          __typename
          items {
            __typename
            id
            userID
            user {
              __typename
              id
              username
              createdAt
              updatedAt
            }
            phrase
            definition
            example
            reference
            createdAt
            updatedAt
          }
          nextToken
          total
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (sort) {
      gqlAPIServiceArguments.sort = sort;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (from) {
      gqlAPIServiceArguments.from = from;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SearchEntrysQuery>response.data.searchEntrys;
  }
  OnCreateUserListener: Observable<
    SubscriptionResponse<OnCreateUserSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser {
        onCreateUser {
          __typename
          id
          username
          entries {
            __typename
            items {
              __typename
              id
              userID
              phrase
              definition
              example
              reference
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateUserSubscription>>;

  OnUpdateUserListener: Observable<
    SubscriptionResponse<OnUpdateUserSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUser {
        onUpdateUser {
          __typename
          id
          username
          entries {
            __typename
            items {
              __typename
              id
              userID
              phrase
              definition
              example
              reference
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateUserSubscription>>;

  OnDeleteUserListener: Observable<
    SubscriptionResponse<OnDeleteUserSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUser {
        onDeleteUser {
          __typename
          id
          username
          entries {
            __typename
            items {
              __typename
              id
              userID
              phrase
              definition
              example
              reference
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteUserSubscription>>;

  OnCreateEntryListener: Observable<
    SubscriptionResponse<OnCreateEntrySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateEntry {
        onCreateEntry {
          __typename
          id
          userID
          user {
            __typename
            id
            username
            entries {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          phrase
          definition
          example
          reference
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateEntrySubscription>>;

  OnUpdateEntryListener: Observable<
    SubscriptionResponse<OnUpdateEntrySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateEntry {
        onUpdateEntry {
          __typename
          id
          userID
          user {
            __typename
            id
            username
            entries {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          phrase
          definition
          example
          reference
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateEntrySubscription>>;

  OnDeleteEntryListener: Observable<
    SubscriptionResponse<OnDeleteEntrySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteEntry {
        onDeleteEntry {
          __typename
          id
          userID
          user {
            __typename
            id
            username
            entries {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          phrase
          definition
          example
          reference
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteEntrySubscription>>;
}
