import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
	[P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
};

export type IIngredient = {
	id?: InputMaybe<Scalars['String']>;
	name: Scalars['String'];
};

export type IRecipe = {
	category?: InputMaybe<Scalars['String']>;
	cookTime?: InputMaybe<Scalars['Int']>;
	id?: InputMaybe<Scalars['String']>;
	imgSrc?: InputMaybe<Scalars['String']>;
	ingredients?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
	instructions?: InputMaybe<Scalars['String']>;
	measurements?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
	name: Scalars['String'];
};

export type IUser = {
	email: Scalars['String'];
	first: Scalars['String'];
	id?: InputMaybe<Scalars['String']>;
	last: Scalars['String'];
};

export type Ingredient = {
	__typename?: 'Ingredient';
	created: Scalars['String'];
	id: Scalars['String'];
	name: Scalars['String'];
	updated: Scalars['String'];
};

export type Mutation = {
	__typename?: 'Mutation';
	addIngredient: ResponseObject;
	addRecipe: ResponseObject;
	addUser: ResponseObject;
	deleteIngredient: ResponseObject;
	deleteRecipe: ResponseObject;
	deleteUser: ResponseObject;
};

export type MutationAddIngredientArgs = {
	data: IIngredient;
};

export type MutationAddRecipeArgs = {
	data: IRecipe;
};

export type MutationAddUserArgs = {
	data: IUser;
};

export type MutationDeleteIngredientArgs = {
	id: Scalars['String'];
};

export type MutationDeleteRecipeArgs = {
	id: Scalars['String'];
};

export type MutationDeleteUserArgs = {
	id: Scalars['String'];
};

export type Query = {
	__typename?: 'Query';
	ingredient?: Maybe<Ingredient>;
	listIngredients: Array<Maybe<Ingredient>>;
	listRecipes: Array<Maybe<Recipe>>;
	listUsers: Array<Maybe<User>>;
	recipe?: Maybe<Recipe>;
	user?: Maybe<User>;
};

export type QueryIngredientArgs = {
	id: Scalars['String'];
};

export type QueryListIngredientsArgs = {
	ids: Array<Scalars['String']>;
};

export type QueryListRecipesArgs = {
	ids: Array<Scalars['String']>;
};

export type QueryListUsersArgs = {
	ids: Array<Scalars['String']>;
};

export type QueryRecipeArgs = {
	id: Scalars['String'];
};

export type QueryUserArgs = {
	id: Scalars['String'];
};

export type Recipe = {
	__typename?: 'Recipe';
	category?: Maybe<Scalars['String']>;
	cookTime?: Maybe<Scalars['Int']>;
	created: Scalars['String'];
	id: Scalars['String'];
	imgSrc?: Maybe<Scalars['String']>;
	ingredients?: Maybe<Array<Maybe<Scalars['String']>>>;
	instructions?: Maybe<Scalars['String']>;
	measurements?: Maybe<Array<Maybe<Scalars['String']>>>;
	name: Scalars['String'];
	updated: Scalars['String'];
};

export type ResponseObject = {
	__typename?: 'ResponseObject';
	count: Scalars['Int'];
	data: Array<Maybe<UData>>;
	error?: Maybe<Scalars['String']>;
};

export type TId = {
	__typename?: 'TId';
	id: Scalars['String'];
};

export type UData = Ingredient | Recipe | TId | User;

export type User = {
	__typename?: 'User';
	created: Scalars['String'];
	email: Scalars['String'];
	first: Scalars['String'];
	id: Scalars['String'];
	last: Scalars['String'];
	updated: Scalars['String'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
	resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
	| ResolverFn<TResult, TParent, TContext, TArgs>
	| ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs
> {
	subscribe: SubscriptionSubscribeFn<
		{ [key in TKey]: TResult },
		TParent,
		TContext,
		TArgs
	>;
	resolve?: SubscriptionResolveFn<
		TResult,
		{ [key in TKey]: TResult },
		TContext,
		TArgs
	>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
	subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
	resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs
> =
	| SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
	| SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
	TResult,
	TKey extends string,
	TParent = {},
	TContext = {},
	TArgs = {}
> =
	| ((
			...args: any[]
	  ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
	| SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
	parent: TParent,
	context: TContext,
	info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
	obj: T,
	context: TContext,
	info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
	TResult = {},
	TParent = {},
	TContext = {},
	TArgs = {}
> = (
	next: NextResolverFn<TResult>,
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
	Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
	IIngredient: IIngredient;
	IRecipe: IRecipe;
	IUser: IUser;
	Ingredient: ResolverTypeWrapper<Ingredient>;
	Int: ResolverTypeWrapper<Scalars['Int']>;
	Mutation: ResolverTypeWrapper<{}>;
	Query: ResolverTypeWrapper<{}>;
	Recipe: ResolverTypeWrapper<Recipe>;
	ResponseObject: ResolverTypeWrapper<
		Omit<ResponseObject, 'data'> & {
			data: Array<Maybe<ResolversTypes['UData']>>;
		}
	>;
	String: ResolverTypeWrapper<Scalars['String']>;
	TId: ResolverTypeWrapper<TId>;
	UData:
		| ResolversTypes['Ingredient']
		| ResolversTypes['Recipe']
		| ResolversTypes['TId']
		| ResolversTypes['User'];
	User: ResolverTypeWrapper<User>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
	Boolean: Scalars['Boolean'];
	IIngredient: IIngredient;
	IRecipe: IRecipe;
	IUser: IUser;
	Ingredient: Ingredient;
	Int: Scalars['Int'];
	Mutation: {};
	Query: {};
	Recipe: Recipe;
	ResponseObject: Omit<ResponseObject, 'data'> & {
		data: Array<Maybe<ResolversParentTypes['UData']>>;
	};
	String: Scalars['String'];
	TId: TId;
	UData:
		| ResolversParentTypes['Ingredient']
		| ResolversParentTypes['Recipe']
		| ResolversParentTypes['TId']
		| ResolversParentTypes['User'];
	User: User;
}>;

export type IngredientResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Ingredient'] = ResolversParentTypes['Ingredient']
> = ResolversObject<{
	created?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	updated?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = ResolversObject<{
	addIngredient?: Resolver<
		ResolversTypes['ResponseObject'],
		ParentType,
		ContextType,
		RequireFields<MutationAddIngredientArgs, 'data'>
	>;
	addRecipe?: Resolver<
		ResolversTypes['ResponseObject'],
		ParentType,
		ContextType,
		RequireFields<MutationAddRecipeArgs, 'data'>
	>;
	addUser?: Resolver<
		ResolversTypes['ResponseObject'],
		ParentType,
		ContextType,
		RequireFields<MutationAddUserArgs, 'data'>
	>;
	deleteIngredient?: Resolver<
		ResolversTypes['ResponseObject'],
		ParentType,
		ContextType,
		RequireFields<MutationDeleteIngredientArgs, 'id'>
	>;
	deleteRecipe?: Resolver<
		ResolversTypes['ResponseObject'],
		ParentType,
		ContextType,
		RequireFields<MutationDeleteRecipeArgs, 'id'>
	>;
	deleteUser?: Resolver<
		ResolversTypes['ResponseObject'],
		ParentType,
		ContextType,
		RequireFields<MutationDeleteUserArgs, 'id'>
	>;
}>;

export type QueryResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = ResolversObject<{
	ingredient?: Resolver<
		Maybe<ResolversTypes['Ingredient']>,
		ParentType,
		ContextType,
		RequireFields<QueryIngredientArgs, 'id'>
	>;
	listIngredients?: Resolver<
		Array<Maybe<ResolversTypes['Ingredient']>>,
		ParentType,
		ContextType,
		RequireFields<QueryListIngredientsArgs, 'ids'>
	>;
	listRecipes?: Resolver<
		Array<Maybe<ResolversTypes['Recipe']>>,
		ParentType,
		ContextType,
		RequireFields<QueryListRecipesArgs, 'ids'>
	>;
	listUsers?: Resolver<
		Array<Maybe<ResolversTypes['User']>>,
		ParentType,
		ContextType,
		RequireFields<QueryListUsersArgs, 'ids'>
	>;
	recipe?: Resolver<
		Maybe<ResolversTypes['Recipe']>,
		ParentType,
		ContextType,
		RequireFields<QueryRecipeArgs, 'id'>
	>;
	user?: Resolver<
		Maybe<ResolversTypes['User']>,
		ParentType,
		ContextType,
		RequireFields<QueryUserArgs, 'id'>
	>;
}>;

export type RecipeResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['Recipe'] = ResolversParentTypes['Recipe']
> = ResolversObject<{
	category?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	cookTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
	created?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	imgSrc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	ingredients?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['String']>>>,
		ParentType,
		ContextType
	>;
	instructions?: Resolver<
		Maybe<ResolversTypes['String']>,
		ParentType,
		ContextType
	>;
	measurements?: Resolver<
		Maybe<Array<Maybe<ResolversTypes['String']>>>,
		ParentType,
		ContextType
	>;
	name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	updated?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResponseObjectResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['ResponseObject'] = ResolversParentTypes['ResponseObject']
> = ResolversObject<{
	count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
	data?: Resolver<
		Array<Maybe<ResolversTypes['UData']>>,
		ParentType,
		ContextType
	>;
	error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TIdResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['TId'] = ResolversParentTypes['TId']
> = ResolversObject<{
	id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UDataResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['UData'] = ResolversParentTypes['UData']
> = ResolversObject<{
	__resolveType: TypeResolveFn<
		'Ingredient' | 'Recipe' | 'TId' | 'User',
		ParentType,
		ContextType
	>;
}>;

export type UserResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = ResolversObject<{
	created?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	first?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	last?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	updated?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
	Ingredient?: IngredientResolvers<ContextType>;
	Mutation?: MutationResolvers<ContextType>;
	Query?: QueryResolvers<ContextType>;
	Recipe?: RecipeResolvers<ContextType>;
	ResponseObject?: ResponseObjectResolvers<ContextType>;
	TId?: TIdResolvers<ContextType>;
	UData?: UDataResolvers<ContextType>;
	User?: UserResolvers<ContextType>;
}>;
