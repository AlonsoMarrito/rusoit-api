
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model base
 * 
 */
export type base = $Result.DefaultSelection<Prisma.$basePayload>
/**
 * Model damages
 * 
 */
export type damages = $Result.DefaultSelection<Prisma.$damagesPayload>
/**
 * Model logs_services
 * 
 */
export type logs_services = $Result.DefaultSelection<Prisma.$logs_servicesPayload>
/**
 * Model preference
 * 
 */
export type preference = $Result.DefaultSelection<Prisma.$preferencePayload>
/**
 * Model services
 * 
 */
export type services = $Result.DefaultSelection<Prisma.$servicesPayload>
/**
 * Model tipe_tool_equipment
 * 
 */
export type tipe_tool_equipment = $Result.DefaultSelection<Prisma.$tipe_tool_equipmentPayload>
/**
 * Model type_to_vehicle
 * 
 */
export type type_to_vehicle = $Result.DefaultSelection<Prisma.$type_to_vehiclePayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model vehicle_logs
 * 
 */
export type vehicle_logs = $Result.DefaultSelection<Prisma.$vehicle_logsPayload>
/**
 * Model vehicles
 * 
 */
export type vehicles = $Result.DefaultSelection<Prisma.$vehiclesPayload>
/**
 * Model work_force
 * 
 */
export type work_force = $Result.DefaultSelection<Prisma.$work_forcePayload>
/**
 * Model work_shift
 * 
 */
export type work_shift = $Result.DefaultSelection<Prisma.$work_shiftPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Bases
 * const bases = await prisma.base.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Bases
   * const bases = await prisma.base.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.base`: Exposes CRUD operations for the **base** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bases
    * const bases = await prisma.base.findMany()
    * ```
    */
  get base(): Prisma.baseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.damages`: Exposes CRUD operations for the **damages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Damages
    * const damages = await prisma.damages.findMany()
    * ```
    */
  get damages(): Prisma.damagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logs_services`: Exposes CRUD operations for the **logs_services** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logs_services
    * const logs_services = await prisma.logs_services.findMany()
    * ```
    */
  get logs_services(): Prisma.logs_servicesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.preference`: Exposes CRUD operations for the **preference** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Preferences
    * const preferences = await prisma.preference.findMany()
    * ```
    */
  get preference(): Prisma.preferenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.services`: Exposes CRUD operations for the **services** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.services.findMany()
    * ```
    */
  get services(): Prisma.servicesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipe_tool_equipment`: Exposes CRUD operations for the **tipe_tool_equipment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tipe_tool_equipments
    * const tipe_tool_equipments = await prisma.tipe_tool_equipment.findMany()
    * ```
    */
  get tipe_tool_equipment(): Prisma.tipe_tool_equipmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.type_to_vehicle`: Exposes CRUD operations for the **type_to_vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Type_to_vehicles
    * const type_to_vehicles = await prisma.type_to_vehicle.findMany()
    * ```
    */
  get type_to_vehicle(): Prisma.type_to_vehicleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicle_logs`: Exposes CRUD operations for the **vehicle_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicle_logs
    * const vehicle_logs = await prisma.vehicle_logs.findMany()
    * ```
    */
  get vehicle_logs(): Prisma.vehicle_logsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicles`: Exposes CRUD operations for the **vehicles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicles.findMany()
    * ```
    */
  get vehicles(): Prisma.vehiclesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.work_force`: Exposes CRUD operations for the **work_force** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Work_forces
    * const work_forces = await prisma.work_force.findMany()
    * ```
    */
  get work_force(): Prisma.work_forceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.work_shift`: Exposes CRUD operations for the **work_shift** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Work_shifts
    * const work_shifts = await prisma.work_shift.findMany()
    * ```
    */
  get work_shift(): Prisma.work_shiftDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    base: 'base',
    damages: 'damages',
    logs_services: 'logs_services',
    preference: 'preference',
    services: 'services',
    tipe_tool_equipment: 'tipe_tool_equipment',
    type_to_vehicle: 'type_to_vehicle',
    users: 'users',
    vehicle_logs: 'vehicle_logs',
    vehicles: 'vehicles',
    work_force: 'work_force',
    work_shift: 'work_shift'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "base" | "damages" | "logs_services" | "preference" | "services" | "tipe_tool_equipment" | "type_to_vehicle" | "users" | "vehicle_logs" | "vehicles" | "work_force" | "work_shift"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      base: {
        payload: Prisma.$basePayload<ExtArgs>
        fields: Prisma.baseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.baseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$basePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.baseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$basePayload>
          }
          findFirst: {
            args: Prisma.baseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$basePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.baseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$basePayload>
          }
          findMany: {
            args: Prisma.baseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$basePayload>[]
          }
          create: {
            args: Prisma.baseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$basePayload>
          }
          createMany: {
            args: Prisma.baseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.baseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$basePayload>[]
          }
          delete: {
            args: Prisma.baseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$basePayload>
          }
          update: {
            args: Prisma.baseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$basePayload>
          }
          deleteMany: {
            args: Prisma.baseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.baseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.baseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$basePayload>[]
          }
          upsert: {
            args: Prisma.baseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$basePayload>
          }
          aggregate: {
            args: Prisma.BaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBase>
          }
          groupBy: {
            args: Prisma.baseGroupByArgs<ExtArgs>
            result: $Utils.Optional<BaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.baseCountArgs<ExtArgs>
            result: $Utils.Optional<BaseCountAggregateOutputType> | number
          }
        }
      }
      damages: {
        payload: Prisma.$damagesPayload<ExtArgs>
        fields: Prisma.damagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.damagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$damagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.damagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$damagesPayload>
          }
          findFirst: {
            args: Prisma.damagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$damagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.damagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$damagesPayload>
          }
          findMany: {
            args: Prisma.damagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$damagesPayload>[]
          }
          create: {
            args: Prisma.damagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$damagesPayload>
          }
          createMany: {
            args: Prisma.damagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.damagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$damagesPayload>[]
          }
          delete: {
            args: Prisma.damagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$damagesPayload>
          }
          update: {
            args: Prisma.damagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$damagesPayload>
          }
          deleteMany: {
            args: Prisma.damagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.damagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.damagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$damagesPayload>[]
          }
          upsert: {
            args: Prisma.damagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$damagesPayload>
          }
          aggregate: {
            args: Prisma.DamagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDamages>
          }
          groupBy: {
            args: Prisma.damagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<DamagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.damagesCountArgs<ExtArgs>
            result: $Utils.Optional<DamagesCountAggregateOutputType> | number
          }
        }
      }
      logs_services: {
        payload: Prisma.$logs_servicesPayload<ExtArgs>
        fields: Prisma.logs_servicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.logs_servicesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logs_servicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.logs_servicesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logs_servicesPayload>
          }
          findFirst: {
            args: Prisma.logs_servicesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logs_servicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.logs_servicesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logs_servicesPayload>
          }
          findMany: {
            args: Prisma.logs_servicesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logs_servicesPayload>[]
          }
          create: {
            args: Prisma.logs_servicesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logs_servicesPayload>
          }
          createMany: {
            args: Prisma.logs_servicesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.logs_servicesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logs_servicesPayload>[]
          }
          delete: {
            args: Prisma.logs_servicesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logs_servicesPayload>
          }
          update: {
            args: Prisma.logs_servicesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logs_servicesPayload>
          }
          deleteMany: {
            args: Prisma.logs_servicesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.logs_servicesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.logs_servicesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logs_servicesPayload>[]
          }
          upsert: {
            args: Prisma.logs_servicesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logs_servicesPayload>
          }
          aggregate: {
            args: Prisma.Logs_servicesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogs_services>
          }
          groupBy: {
            args: Prisma.logs_servicesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Logs_servicesGroupByOutputType>[]
          }
          count: {
            args: Prisma.logs_servicesCountArgs<ExtArgs>
            result: $Utils.Optional<Logs_servicesCountAggregateOutputType> | number
          }
        }
      }
      preference: {
        payload: Prisma.$preferencePayload<ExtArgs>
        fields: Prisma.preferenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.preferenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preferencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.preferenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preferencePayload>
          }
          findFirst: {
            args: Prisma.preferenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preferencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.preferenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preferencePayload>
          }
          findMany: {
            args: Prisma.preferenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preferencePayload>[]
          }
          create: {
            args: Prisma.preferenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preferencePayload>
          }
          createMany: {
            args: Prisma.preferenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.preferenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preferencePayload>[]
          }
          delete: {
            args: Prisma.preferenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preferencePayload>
          }
          update: {
            args: Prisma.preferenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preferencePayload>
          }
          deleteMany: {
            args: Prisma.preferenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.preferenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.preferenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preferencePayload>[]
          }
          upsert: {
            args: Prisma.preferenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preferencePayload>
          }
          aggregate: {
            args: Prisma.PreferenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePreference>
          }
          groupBy: {
            args: Prisma.preferenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<PreferenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.preferenceCountArgs<ExtArgs>
            result: $Utils.Optional<PreferenceCountAggregateOutputType> | number
          }
        }
      }
      services: {
        payload: Prisma.$servicesPayload<ExtArgs>
        fields: Prisma.servicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.servicesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.servicesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>
          }
          findFirst: {
            args: Prisma.servicesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.servicesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>
          }
          findMany: {
            args: Prisma.servicesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>[]
          }
          create: {
            args: Prisma.servicesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>
          }
          createMany: {
            args: Prisma.servicesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.servicesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>[]
          }
          delete: {
            args: Prisma.servicesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>
          }
          update: {
            args: Prisma.servicesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>
          }
          deleteMany: {
            args: Prisma.servicesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.servicesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.servicesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>[]
          }
          upsert: {
            args: Prisma.servicesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>
          }
          aggregate: {
            args: Prisma.ServicesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServices>
          }
          groupBy: {
            args: Prisma.servicesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicesGroupByOutputType>[]
          }
          count: {
            args: Prisma.servicesCountArgs<ExtArgs>
            result: $Utils.Optional<ServicesCountAggregateOutputType> | number
          }
        }
      }
      tipe_tool_equipment: {
        payload: Prisma.$tipe_tool_equipmentPayload<ExtArgs>
        fields: Prisma.tipe_tool_equipmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tipe_tool_equipmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipe_tool_equipmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tipe_tool_equipmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipe_tool_equipmentPayload>
          }
          findFirst: {
            args: Prisma.tipe_tool_equipmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipe_tool_equipmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tipe_tool_equipmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipe_tool_equipmentPayload>
          }
          findMany: {
            args: Prisma.tipe_tool_equipmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipe_tool_equipmentPayload>[]
          }
          create: {
            args: Prisma.tipe_tool_equipmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipe_tool_equipmentPayload>
          }
          createMany: {
            args: Prisma.tipe_tool_equipmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tipe_tool_equipmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipe_tool_equipmentPayload>[]
          }
          delete: {
            args: Prisma.tipe_tool_equipmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipe_tool_equipmentPayload>
          }
          update: {
            args: Prisma.tipe_tool_equipmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipe_tool_equipmentPayload>
          }
          deleteMany: {
            args: Prisma.tipe_tool_equipmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tipe_tool_equipmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tipe_tool_equipmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipe_tool_equipmentPayload>[]
          }
          upsert: {
            args: Prisma.tipe_tool_equipmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tipe_tool_equipmentPayload>
          }
          aggregate: {
            args: Prisma.Tipe_tool_equipmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipe_tool_equipment>
          }
          groupBy: {
            args: Prisma.tipe_tool_equipmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tipe_tool_equipmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.tipe_tool_equipmentCountArgs<ExtArgs>
            result: $Utils.Optional<Tipe_tool_equipmentCountAggregateOutputType> | number
          }
        }
      }
      type_to_vehicle: {
        payload: Prisma.$type_to_vehiclePayload<ExtArgs>
        fields: Prisma.type_to_vehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.type_to_vehicleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_to_vehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.type_to_vehicleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_to_vehiclePayload>
          }
          findFirst: {
            args: Prisma.type_to_vehicleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_to_vehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.type_to_vehicleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_to_vehiclePayload>
          }
          findMany: {
            args: Prisma.type_to_vehicleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_to_vehiclePayload>[]
          }
          create: {
            args: Prisma.type_to_vehicleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_to_vehiclePayload>
          }
          createMany: {
            args: Prisma.type_to_vehicleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.type_to_vehicleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_to_vehiclePayload>[]
          }
          delete: {
            args: Prisma.type_to_vehicleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_to_vehiclePayload>
          }
          update: {
            args: Prisma.type_to_vehicleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_to_vehiclePayload>
          }
          deleteMany: {
            args: Prisma.type_to_vehicleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.type_to_vehicleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.type_to_vehicleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_to_vehiclePayload>[]
          }
          upsert: {
            args: Prisma.type_to_vehicleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$type_to_vehiclePayload>
          }
          aggregate: {
            args: Prisma.Type_to_vehicleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateType_to_vehicle>
          }
          groupBy: {
            args: Prisma.type_to_vehicleGroupByArgs<ExtArgs>
            result: $Utils.Optional<Type_to_vehicleGroupByOutputType>[]
          }
          count: {
            args: Prisma.type_to_vehicleCountArgs<ExtArgs>
            result: $Utils.Optional<Type_to_vehicleCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      vehicle_logs: {
        payload: Prisma.$vehicle_logsPayload<ExtArgs>
        fields: Prisma.vehicle_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vehicle_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehicle_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vehicle_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehicle_logsPayload>
          }
          findFirst: {
            args: Prisma.vehicle_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehicle_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vehicle_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehicle_logsPayload>
          }
          findMany: {
            args: Prisma.vehicle_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehicle_logsPayload>[]
          }
          create: {
            args: Prisma.vehicle_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehicle_logsPayload>
          }
          createMany: {
            args: Prisma.vehicle_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.vehicle_logsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehicle_logsPayload>[]
          }
          delete: {
            args: Prisma.vehicle_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehicle_logsPayload>
          }
          update: {
            args: Prisma.vehicle_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehicle_logsPayload>
          }
          deleteMany: {
            args: Prisma.vehicle_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vehicle_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.vehicle_logsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehicle_logsPayload>[]
          }
          upsert: {
            args: Prisma.vehicle_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehicle_logsPayload>
          }
          aggregate: {
            args: Prisma.Vehicle_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle_logs>
          }
          groupBy: {
            args: Prisma.vehicle_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Vehicle_logsGroupByOutputType>[]
          }
          count: {
            args: Prisma.vehicle_logsCountArgs<ExtArgs>
            result: $Utils.Optional<Vehicle_logsCountAggregateOutputType> | number
          }
        }
      }
      vehicles: {
        payload: Prisma.$vehiclesPayload<ExtArgs>
        fields: Prisma.vehiclesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vehiclesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiclesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vehiclesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiclesPayload>
          }
          findFirst: {
            args: Prisma.vehiclesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiclesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vehiclesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiclesPayload>
          }
          findMany: {
            args: Prisma.vehiclesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiclesPayload>[]
          }
          create: {
            args: Prisma.vehiclesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiclesPayload>
          }
          createMany: {
            args: Prisma.vehiclesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.vehiclesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiclesPayload>[]
          }
          delete: {
            args: Prisma.vehiclesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiclesPayload>
          }
          update: {
            args: Prisma.vehiclesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiclesPayload>
          }
          deleteMany: {
            args: Prisma.vehiclesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vehiclesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.vehiclesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiclesPayload>[]
          }
          upsert: {
            args: Prisma.vehiclesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehiclesPayload>
          }
          aggregate: {
            args: Prisma.VehiclesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicles>
          }
          groupBy: {
            args: Prisma.vehiclesGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehiclesGroupByOutputType>[]
          }
          count: {
            args: Prisma.vehiclesCountArgs<ExtArgs>
            result: $Utils.Optional<VehiclesCountAggregateOutputType> | number
          }
        }
      }
      work_force: {
        payload: Prisma.$work_forcePayload<ExtArgs>
        fields: Prisma.work_forceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.work_forceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_forcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.work_forceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_forcePayload>
          }
          findFirst: {
            args: Prisma.work_forceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_forcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.work_forceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_forcePayload>
          }
          findMany: {
            args: Prisma.work_forceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_forcePayload>[]
          }
          create: {
            args: Prisma.work_forceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_forcePayload>
          }
          createMany: {
            args: Prisma.work_forceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.work_forceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_forcePayload>[]
          }
          delete: {
            args: Prisma.work_forceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_forcePayload>
          }
          update: {
            args: Prisma.work_forceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_forcePayload>
          }
          deleteMany: {
            args: Prisma.work_forceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.work_forceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.work_forceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_forcePayload>[]
          }
          upsert: {
            args: Prisma.work_forceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_forcePayload>
          }
          aggregate: {
            args: Prisma.Work_forceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWork_force>
          }
          groupBy: {
            args: Prisma.work_forceGroupByArgs<ExtArgs>
            result: $Utils.Optional<Work_forceGroupByOutputType>[]
          }
          count: {
            args: Prisma.work_forceCountArgs<ExtArgs>
            result: $Utils.Optional<Work_forceCountAggregateOutputType> | number
          }
        }
      }
      work_shift: {
        payload: Prisma.$work_shiftPayload<ExtArgs>
        fields: Prisma.work_shiftFieldRefs
        operations: {
          findUnique: {
            args: Prisma.work_shiftFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_shiftPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.work_shiftFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_shiftPayload>
          }
          findFirst: {
            args: Prisma.work_shiftFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_shiftPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.work_shiftFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_shiftPayload>
          }
          findMany: {
            args: Prisma.work_shiftFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_shiftPayload>[]
          }
          create: {
            args: Prisma.work_shiftCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_shiftPayload>
          }
          createMany: {
            args: Prisma.work_shiftCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.work_shiftCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_shiftPayload>[]
          }
          delete: {
            args: Prisma.work_shiftDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_shiftPayload>
          }
          update: {
            args: Prisma.work_shiftUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_shiftPayload>
          }
          deleteMany: {
            args: Prisma.work_shiftDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.work_shiftUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.work_shiftUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_shiftPayload>[]
          }
          upsert: {
            args: Prisma.work_shiftUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$work_shiftPayload>
          }
          aggregate: {
            args: Prisma.Work_shiftAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWork_shift>
          }
          groupBy: {
            args: Prisma.work_shiftGroupByArgs<ExtArgs>
            result: $Utils.Optional<Work_shiftGroupByOutputType>[]
          }
          count: {
            args: Prisma.work_shiftCountArgs<ExtArgs>
            result: $Utils.Optional<Work_shiftCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    base?: baseOmit
    damages?: damagesOmit
    logs_services?: logs_servicesOmit
    preference?: preferenceOmit
    services?: servicesOmit
    tipe_tool_equipment?: tipe_tool_equipmentOmit
    type_to_vehicle?: type_to_vehicleOmit
    users?: usersOmit
    vehicle_logs?: vehicle_logsOmit
    vehicles?: vehiclesOmit
    work_force?: work_forceOmit
    work_shift?: work_shiftOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BaseCountOutputType
   */

  export type BaseCountOutputType = {
    work_force: number
  }

  export type BaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work_force?: boolean | BaseCountOutputTypeCountWork_forceArgs
  }

  // Custom InputTypes
  /**
   * BaseCountOutputType without action
   */
  export type BaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseCountOutputType
     */
    select?: BaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BaseCountOutputType without action
   */
  export type BaseCountOutputTypeCountWork_forceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: work_forceWhereInput
  }


  /**
   * Count Type ServicesCountOutputType
   */

  export type ServicesCountOutputType = {
    logs_services: number
  }

  export type ServicesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs_services?: boolean | ServicesCountOutputTypeCountLogs_servicesArgs
  }

  // Custom InputTypes
  /**
   * ServicesCountOutputType without action
   */
  export type ServicesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicesCountOutputType
     */
    select?: ServicesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServicesCountOutputType without action
   */
  export type ServicesCountOutputTypeCountLogs_servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: logs_servicesWhereInput
  }


  /**
   * Count Type VehiclesCountOutputType
   */

  export type VehiclesCountOutputType = {
    damages: number
    services: number
    vehicle_logs: number
    work_force: number
  }

  export type VehiclesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    damages?: boolean | VehiclesCountOutputTypeCountDamagesArgs
    services?: boolean | VehiclesCountOutputTypeCountServicesArgs
    vehicle_logs?: boolean | VehiclesCountOutputTypeCountVehicle_logsArgs
    work_force?: boolean | VehiclesCountOutputTypeCountWork_forceArgs
  }

  // Custom InputTypes
  /**
   * VehiclesCountOutputType without action
   */
  export type VehiclesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiclesCountOutputType
     */
    select?: VehiclesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehiclesCountOutputType without action
   */
  export type VehiclesCountOutputTypeCountDamagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: damagesWhereInput
  }

  /**
   * VehiclesCountOutputType without action
   */
  export type VehiclesCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: servicesWhereInput
  }

  /**
   * VehiclesCountOutputType without action
   */
  export type VehiclesCountOutputTypeCountVehicle_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vehicle_logsWhereInput
  }

  /**
   * VehiclesCountOutputType without action
   */
  export type VehiclesCountOutputTypeCountWork_forceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: work_forceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model base
   */

  export type AggregateBase = {
    _count: BaseCountAggregateOutputType | null
    _avg: BaseAvgAggregateOutputType | null
    _sum: BaseSumAggregateOutputType | null
    _min: BaseMinAggregateOutputType | null
    _max: BaseMaxAggregateOutputType | null
  }

  export type BaseAvgAggregateOutputType = {
    id: number | null
  }

  export type BaseSumAggregateOutputType = {
    id: number | null
  }

  export type BaseMinAggregateOutputType = {
    id: number | null
    cologne: string | null
    street_and_number: string | null
    crosse: string | null
    status: string | null
    image: string | null
  }

  export type BaseMaxAggregateOutputType = {
    id: number | null
    cologne: string | null
    street_and_number: string | null
    crosse: string | null
    status: string | null
    image: string | null
  }

  export type BaseCountAggregateOutputType = {
    id: number
    cologne: number
    street_and_number: number
    crosse: number
    status: number
    image: number
    _all: number
  }


  export type BaseAvgAggregateInputType = {
    id?: true
  }

  export type BaseSumAggregateInputType = {
    id?: true
  }

  export type BaseMinAggregateInputType = {
    id?: true
    cologne?: true
    street_and_number?: true
    crosse?: true
    status?: true
    image?: true
  }

  export type BaseMaxAggregateInputType = {
    id?: true
    cologne?: true
    street_and_number?: true
    crosse?: true
    status?: true
    image?: true
  }

  export type BaseCountAggregateInputType = {
    id?: true
    cologne?: true
    street_and_number?: true
    crosse?: true
    status?: true
    image?: true
    _all?: true
  }

  export type BaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which base to aggregate.
     */
    where?: baseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bases to fetch.
     */
    orderBy?: baseOrderByWithRelationInput | baseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: baseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bases
    **/
    _count?: true | BaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BaseMaxAggregateInputType
  }

  export type GetBaseAggregateType<T extends BaseAggregateArgs> = {
        [P in keyof T & keyof AggregateBase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBase[P]>
      : GetScalarType<T[P], AggregateBase[P]>
  }




  export type baseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: baseWhereInput
    orderBy?: baseOrderByWithAggregationInput | baseOrderByWithAggregationInput[]
    by: BaseScalarFieldEnum[] | BaseScalarFieldEnum
    having?: baseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BaseCountAggregateInputType | true
    _avg?: BaseAvgAggregateInputType
    _sum?: BaseSumAggregateInputType
    _min?: BaseMinAggregateInputType
    _max?: BaseMaxAggregateInputType
  }

  export type BaseGroupByOutputType = {
    id: number
    cologne: string
    street_and_number: string
    crosse: string
    status: string
    image: string
    _count: BaseCountAggregateOutputType | null
    _avg: BaseAvgAggregateOutputType | null
    _sum: BaseSumAggregateOutputType | null
    _min: BaseMinAggregateOutputType | null
    _max: BaseMaxAggregateOutputType | null
  }

  type GetBaseGroupByPayload<T extends baseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BaseGroupByOutputType[P]>
            : GetScalarType<T[P], BaseGroupByOutputType[P]>
        }
      >
    >


  export type baseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cologne?: boolean
    street_and_number?: boolean
    crosse?: boolean
    status?: boolean
    image?: boolean
    work_force?: boolean | base$work_forceArgs<ExtArgs>
    _count?: boolean | BaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["base"]>

  export type baseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cologne?: boolean
    street_and_number?: boolean
    crosse?: boolean
    status?: boolean
    image?: boolean
  }, ExtArgs["result"]["base"]>

  export type baseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cologne?: boolean
    street_and_number?: boolean
    crosse?: boolean
    status?: boolean
    image?: boolean
  }, ExtArgs["result"]["base"]>

  export type baseSelectScalar = {
    id?: boolean
    cologne?: boolean
    street_and_number?: boolean
    crosse?: boolean
    status?: boolean
    image?: boolean
  }

  export type baseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cologne" | "street_and_number" | "crosse" | "status" | "image", ExtArgs["result"]["base"]>
  export type baseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work_force?: boolean | base$work_forceArgs<ExtArgs>
    _count?: boolean | BaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type baseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type baseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $basePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "base"
    objects: {
      work_force: Prisma.$work_forcePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cologne: string
      street_and_number: string
      crosse: string
      status: string
      image: string
    }, ExtArgs["result"]["base"]>
    composites: {}
  }

  type baseGetPayload<S extends boolean | null | undefined | baseDefaultArgs> = $Result.GetResult<Prisma.$basePayload, S>

  type baseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<baseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BaseCountAggregateInputType | true
    }

  export interface baseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['base'], meta: { name: 'base' } }
    /**
     * Find zero or one Base that matches the filter.
     * @param {baseFindUniqueArgs} args - Arguments to find a Base
     * @example
     * // Get one Base
     * const base = await prisma.base.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends baseFindUniqueArgs>(args: SelectSubset<T, baseFindUniqueArgs<ExtArgs>>): Prisma__baseClient<$Result.GetResult<Prisma.$basePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Base that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {baseFindUniqueOrThrowArgs} args - Arguments to find a Base
     * @example
     * // Get one Base
     * const base = await prisma.base.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends baseFindUniqueOrThrowArgs>(args: SelectSubset<T, baseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__baseClient<$Result.GetResult<Prisma.$basePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Base that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {baseFindFirstArgs} args - Arguments to find a Base
     * @example
     * // Get one Base
     * const base = await prisma.base.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends baseFindFirstArgs>(args?: SelectSubset<T, baseFindFirstArgs<ExtArgs>>): Prisma__baseClient<$Result.GetResult<Prisma.$basePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Base that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {baseFindFirstOrThrowArgs} args - Arguments to find a Base
     * @example
     * // Get one Base
     * const base = await prisma.base.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends baseFindFirstOrThrowArgs>(args?: SelectSubset<T, baseFindFirstOrThrowArgs<ExtArgs>>): Prisma__baseClient<$Result.GetResult<Prisma.$basePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {baseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bases
     * const bases = await prisma.base.findMany()
     * 
     * // Get first 10 Bases
     * const bases = await prisma.base.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const baseWithIdOnly = await prisma.base.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends baseFindManyArgs>(args?: SelectSubset<T, baseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$basePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Base.
     * @param {baseCreateArgs} args - Arguments to create a Base.
     * @example
     * // Create one Base
     * const Base = await prisma.base.create({
     *   data: {
     *     // ... data to create a Base
     *   }
     * })
     * 
     */
    create<T extends baseCreateArgs>(args: SelectSubset<T, baseCreateArgs<ExtArgs>>): Prisma__baseClient<$Result.GetResult<Prisma.$basePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bases.
     * @param {baseCreateManyArgs} args - Arguments to create many Bases.
     * @example
     * // Create many Bases
     * const base = await prisma.base.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends baseCreateManyArgs>(args?: SelectSubset<T, baseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bases and returns the data saved in the database.
     * @param {baseCreateManyAndReturnArgs} args - Arguments to create many Bases.
     * @example
     * // Create many Bases
     * const base = await prisma.base.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bases and only return the `id`
     * const baseWithIdOnly = await prisma.base.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends baseCreateManyAndReturnArgs>(args?: SelectSubset<T, baseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$basePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Base.
     * @param {baseDeleteArgs} args - Arguments to delete one Base.
     * @example
     * // Delete one Base
     * const Base = await prisma.base.delete({
     *   where: {
     *     // ... filter to delete one Base
     *   }
     * })
     * 
     */
    delete<T extends baseDeleteArgs>(args: SelectSubset<T, baseDeleteArgs<ExtArgs>>): Prisma__baseClient<$Result.GetResult<Prisma.$basePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Base.
     * @param {baseUpdateArgs} args - Arguments to update one Base.
     * @example
     * // Update one Base
     * const base = await prisma.base.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends baseUpdateArgs>(args: SelectSubset<T, baseUpdateArgs<ExtArgs>>): Prisma__baseClient<$Result.GetResult<Prisma.$basePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bases.
     * @param {baseDeleteManyArgs} args - Arguments to filter Bases to delete.
     * @example
     * // Delete a few Bases
     * const { count } = await prisma.base.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends baseDeleteManyArgs>(args?: SelectSubset<T, baseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {baseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bases
     * const base = await prisma.base.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends baseUpdateManyArgs>(args: SelectSubset<T, baseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bases and returns the data updated in the database.
     * @param {baseUpdateManyAndReturnArgs} args - Arguments to update many Bases.
     * @example
     * // Update many Bases
     * const base = await prisma.base.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bases and only return the `id`
     * const baseWithIdOnly = await prisma.base.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends baseUpdateManyAndReturnArgs>(args: SelectSubset<T, baseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$basePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Base.
     * @param {baseUpsertArgs} args - Arguments to update or create a Base.
     * @example
     * // Update or create a Base
     * const base = await prisma.base.upsert({
     *   create: {
     *     // ... data to create a Base
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Base we want to update
     *   }
     * })
     */
    upsert<T extends baseUpsertArgs>(args: SelectSubset<T, baseUpsertArgs<ExtArgs>>): Prisma__baseClient<$Result.GetResult<Prisma.$basePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {baseCountArgs} args - Arguments to filter Bases to count.
     * @example
     * // Count the number of Bases
     * const count = await prisma.base.count({
     *   where: {
     *     // ... the filter for the Bases we want to count
     *   }
     * })
    **/
    count<T extends baseCountArgs>(
      args?: Subset<T, baseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Base.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BaseAggregateArgs>(args: Subset<T, BaseAggregateArgs>): Prisma.PrismaPromise<GetBaseAggregateType<T>>

    /**
     * Group by Base.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {baseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends baseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: baseGroupByArgs['orderBy'] }
        : { orderBy?: baseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, baseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the base model
   */
  readonly fields: baseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for base.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__baseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    work_force<T extends base$work_forceArgs<ExtArgs> = {}>(args?: Subset<T, base$work_forceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$work_forcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the base model
   */
  interface baseFieldRefs {
    readonly id: FieldRef<"base", 'Int'>
    readonly cologne: FieldRef<"base", 'String'>
    readonly street_and_number: FieldRef<"base", 'String'>
    readonly crosse: FieldRef<"base", 'String'>
    readonly status: FieldRef<"base", 'String'>
    readonly image: FieldRef<"base", 'String'>
  }
    

  // Custom InputTypes
  /**
   * base findUnique
   */
  export type baseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the base
     */
    select?: baseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the base
     */
    omit?: baseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: baseInclude<ExtArgs> | null
    /**
     * Filter, which base to fetch.
     */
    where: baseWhereUniqueInput
  }

  /**
   * base findUniqueOrThrow
   */
  export type baseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the base
     */
    select?: baseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the base
     */
    omit?: baseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: baseInclude<ExtArgs> | null
    /**
     * Filter, which base to fetch.
     */
    where: baseWhereUniqueInput
  }

  /**
   * base findFirst
   */
  export type baseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the base
     */
    select?: baseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the base
     */
    omit?: baseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: baseInclude<ExtArgs> | null
    /**
     * Filter, which base to fetch.
     */
    where?: baseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bases to fetch.
     */
    orderBy?: baseOrderByWithRelationInput | baseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bases.
     */
    cursor?: baseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bases.
     */
    distinct?: BaseScalarFieldEnum | BaseScalarFieldEnum[]
  }

  /**
   * base findFirstOrThrow
   */
  export type baseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the base
     */
    select?: baseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the base
     */
    omit?: baseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: baseInclude<ExtArgs> | null
    /**
     * Filter, which base to fetch.
     */
    where?: baseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bases to fetch.
     */
    orderBy?: baseOrderByWithRelationInput | baseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bases.
     */
    cursor?: baseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bases.
     */
    distinct?: BaseScalarFieldEnum | BaseScalarFieldEnum[]
  }

  /**
   * base findMany
   */
  export type baseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the base
     */
    select?: baseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the base
     */
    omit?: baseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: baseInclude<ExtArgs> | null
    /**
     * Filter, which bases to fetch.
     */
    where?: baseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bases to fetch.
     */
    orderBy?: baseOrderByWithRelationInput | baseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bases.
     */
    cursor?: baseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bases.
     */
    skip?: number
    distinct?: BaseScalarFieldEnum | BaseScalarFieldEnum[]
  }

  /**
   * base create
   */
  export type baseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the base
     */
    select?: baseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the base
     */
    omit?: baseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: baseInclude<ExtArgs> | null
    /**
     * The data needed to create a base.
     */
    data: XOR<baseCreateInput, baseUncheckedCreateInput>
  }

  /**
   * base createMany
   */
  export type baseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bases.
     */
    data: baseCreateManyInput | baseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * base createManyAndReturn
   */
  export type baseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the base
     */
    select?: baseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the base
     */
    omit?: baseOmit<ExtArgs> | null
    /**
     * The data used to create many bases.
     */
    data: baseCreateManyInput | baseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * base update
   */
  export type baseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the base
     */
    select?: baseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the base
     */
    omit?: baseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: baseInclude<ExtArgs> | null
    /**
     * The data needed to update a base.
     */
    data: XOR<baseUpdateInput, baseUncheckedUpdateInput>
    /**
     * Choose, which base to update.
     */
    where: baseWhereUniqueInput
  }

  /**
   * base updateMany
   */
  export type baseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bases.
     */
    data: XOR<baseUpdateManyMutationInput, baseUncheckedUpdateManyInput>
    /**
     * Filter which bases to update
     */
    where?: baseWhereInput
    /**
     * Limit how many bases to update.
     */
    limit?: number
  }

  /**
   * base updateManyAndReturn
   */
  export type baseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the base
     */
    select?: baseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the base
     */
    omit?: baseOmit<ExtArgs> | null
    /**
     * The data used to update bases.
     */
    data: XOR<baseUpdateManyMutationInput, baseUncheckedUpdateManyInput>
    /**
     * Filter which bases to update
     */
    where?: baseWhereInput
    /**
     * Limit how many bases to update.
     */
    limit?: number
  }

  /**
   * base upsert
   */
  export type baseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the base
     */
    select?: baseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the base
     */
    omit?: baseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: baseInclude<ExtArgs> | null
    /**
     * The filter to search for the base to update in case it exists.
     */
    where: baseWhereUniqueInput
    /**
     * In case the base found by the `where` argument doesn't exist, create a new base with this data.
     */
    create: XOR<baseCreateInput, baseUncheckedCreateInput>
    /**
     * In case the base was found with the provided `where` argument, update it with this data.
     */
    update: XOR<baseUpdateInput, baseUncheckedUpdateInput>
  }

  /**
   * base delete
   */
  export type baseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the base
     */
    select?: baseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the base
     */
    omit?: baseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: baseInclude<ExtArgs> | null
    /**
     * Filter which base to delete.
     */
    where: baseWhereUniqueInput
  }

  /**
   * base deleteMany
   */
  export type baseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bases to delete
     */
    where?: baseWhereInput
    /**
     * Limit how many bases to delete.
     */
    limit?: number
  }

  /**
   * base.work_force
   */
  export type base$work_forceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_force
     */
    select?: work_forceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_force
     */
    omit?: work_forceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_forceInclude<ExtArgs> | null
    where?: work_forceWhereInput
    orderBy?: work_forceOrderByWithRelationInput | work_forceOrderByWithRelationInput[]
    cursor?: work_forceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Work_forceScalarFieldEnum | Work_forceScalarFieldEnum[]
  }

  /**
   * base without action
   */
  export type baseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the base
     */
    select?: baseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the base
     */
    omit?: baseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: baseInclude<ExtArgs> | null
  }


  /**
   * Model damages
   */

  export type AggregateDamages = {
    _count: DamagesCountAggregateOutputType | null
    _avg: DamagesAvgAggregateOutputType | null
    _sum: DamagesSumAggregateOutputType | null
    _min: DamagesMinAggregateOutputType | null
    _max: DamagesMaxAggregateOutputType | null
  }

  export type DamagesAvgAggregateOutputType = {
    id: number | null
    driver_id: number | null
    vehicle_id: number | null
  }

  export type DamagesSumAggregateOutputType = {
    id: number | null
    driver_id: number | null
    vehicle_id: number | null
  }

  export type DamagesMinAggregateOutputType = {
    id: number | null
    driver_id: number | null
    vehicle_id: number | null
    damage_event: string | null
    where_is_damage: string | null
    photo_damage: string | null
    damage_description: string | null
    type_to_damage: string | null
  }

  export type DamagesMaxAggregateOutputType = {
    id: number | null
    driver_id: number | null
    vehicle_id: number | null
    damage_event: string | null
    where_is_damage: string | null
    photo_damage: string | null
    damage_description: string | null
    type_to_damage: string | null
  }

  export type DamagesCountAggregateOutputType = {
    id: number
    driver_id: number
    vehicle_id: number
    damage_event: number
    where_is_damage: number
    photo_damage: number
    damage_description: number
    type_to_damage: number
    _all: number
  }


  export type DamagesAvgAggregateInputType = {
    id?: true
    driver_id?: true
    vehicle_id?: true
  }

  export type DamagesSumAggregateInputType = {
    id?: true
    driver_id?: true
    vehicle_id?: true
  }

  export type DamagesMinAggregateInputType = {
    id?: true
    driver_id?: true
    vehicle_id?: true
    damage_event?: true
    where_is_damage?: true
    photo_damage?: true
    damage_description?: true
    type_to_damage?: true
  }

  export type DamagesMaxAggregateInputType = {
    id?: true
    driver_id?: true
    vehicle_id?: true
    damage_event?: true
    where_is_damage?: true
    photo_damage?: true
    damage_description?: true
    type_to_damage?: true
  }

  export type DamagesCountAggregateInputType = {
    id?: true
    driver_id?: true
    vehicle_id?: true
    damage_event?: true
    where_is_damage?: true
    photo_damage?: true
    damage_description?: true
    type_to_damage?: true
    _all?: true
  }

  export type DamagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which damages to aggregate.
     */
    where?: damagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of damages to fetch.
     */
    orderBy?: damagesOrderByWithRelationInput | damagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: damagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` damages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` damages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned damages
    **/
    _count?: true | DamagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DamagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DamagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DamagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DamagesMaxAggregateInputType
  }

  export type GetDamagesAggregateType<T extends DamagesAggregateArgs> = {
        [P in keyof T & keyof AggregateDamages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDamages[P]>
      : GetScalarType<T[P], AggregateDamages[P]>
  }




  export type damagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: damagesWhereInput
    orderBy?: damagesOrderByWithAggregationInput | damagesOrderByWithAggregationInput[]
    by: DamagesScalarFieldEnum[] | DamagesScalarFieldEnum
    having?: damagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DamagesCountAggregateInputType | true
    _avg?: DamagesAvgAggregateInputType
    _sum?: DamagesSumAggregateInputType
    _min?: DamagesMinAggregateInputType
    _max?: DamagesMaxAggregateInputType
  }

  export type DamagesGroupByOutputType = {
    id: number
    driver_id: number
    vehicle_id: number
    damage_event: string
    where_is_damage: string
    photo_damage: string | null
    damage_description: string
    type_to_damage: string
    _count: DamagesCountAggregateOutputType | null
    _avg: DamagesAvgAggregateOutputType | null
    _sum: DamagesSumAggregateOutputType | null
    _min: DamagesMinAggregateOutputType | null
    _max: DamagesMaxAggregateOutputType | null
  }

  type GetDamagesGroupByPayload<T extends damagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DamagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DamagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DamagesGroupByOutputType[P]>
            : GetScalarType<T[P], DamagesGroupByOutputType[P]>
        }
      >
    >


  export type damagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driver_id?: boolean
    vehicle_id?: boolean
    damage_event?: boolean
    where_is_damage?: boolean
    photo_damage?: boolean
    damage_description?: boolean
    type_to_damage?: boolean
    vehicles?: boolean | vehiclesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["damages"]>

  export type damagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driver_id?: boolean
    vehicle_id?: boolean
    damage_event?: boolean
    where_is_damage?: boolean
    photo_damage?: boolean
    damage_description?: boolean
    type_to_damage?: boolean
    vehicles?: boolean | vehiclesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["damages"]>

  export type damagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driver_id?: boolean
    vehicle_id?: boolean
    damage_event?: boolean
    where_is_damage?: boolean
    photo_damage?: boolean
    damage_description?: boolean
    type_to_damage?: boolean
    vehicles?: boolean | vehiclesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["damages"]>

  export type damagesSelectScalar = {
    id?: boolean
    driver_id?: boolean
    vehicle_id?: boolean
    damage_event?: boolean
    where_is_damage?: boolean
    photo_damage?: boolean
    damage_description?: boolean
    type_to_damage?: boolean
  }

  export type damagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "driver_id" | "vehicle_id" | "damage_event" | "where_is_damage" | "photo_damage" | "damage_description" | "type_to_damage", ExtArgs["result"]["damages"]>
  export type damagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | vehiclesDefaultArgs<ExtArgs>
  }
  export type damagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | vehiclesDefaultArgs<ExtArgs>
  }
  export type damagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | vehiclesDefaultArgs<ExtArgs>
  }

  export type $damagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "damages"
    objects: {
      vehicles: Prisma.$vehiclesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      driver_id: number
      vehicle_id: number
      damage_event: string
      where_is_damage: string
      photo_damage: string | null
      damage_description: string
      type_to_damage: string
    }, ExtArgs["result"]["damages"]>
    composites: {}
  }

  type damagesGetPayload<S extends boolean | null | undefined | damagesDefaultArgs> = $Result.GetResult<Prisma.$damagesPayload, S>

  type damagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<damagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DamagesCountAggregateInputType | true
    }

  export interface damagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['damages'], meta: { name: 'damages' } }
    /**
     * Find zero or one Damages that matches the filter.
     * @param {damagesFindUniqueArgs} args - Arguments to find a Damages
     * @example
     * // Get one Damages
     * const damages = await prisma.damages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends damagesFindUniqueArgs>(args: SelectSubset<T, damagesFindUniqueArgs<ExtArgs>>): Prisma__damagesClient<$Result.GetResult<Prisma.$damagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Damages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {damagesFindUniqueOrThrowArgs} args - Arguments to find a Damages
     * @example
     * // Get one Damages
     * const damages = await prisma.damages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends damagesFindUniqueOrThrowArgs>(args: SelectSubset<T, damagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__damagesClient<$Result.GetResult<Prisma.$damagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Damages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {damagesFindFirstArgs} args - Arguments to find a Damages
     * @example
     * // Get one Damages
     * const damages = await prisma.damages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends damagesFindFirstArgs>(args?: SelectSubset<T, damagesFindFirstArgs<ExtArgs>>): Prisma__damagesClient<$Result.GetResult<Prisma.$damagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Damages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {damagesFindFirstOrThrowArgs} args - Arguments to find a Damages
     * @example
     * // Get one Damages
     * const damages = await prisma.damages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends damagesFindFirstOrThrowArgs>(args?: SelectSubset<T, damagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__damagesClient<$Result.GetResult<Prisma.$damagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Damages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {damagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Damages
     * const damages = await prisma.damages.findMany()
     * 
     * // Get first 10 Damages
     * const damages = await prisma.damages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const damagesWithIdOnly = await prisma.damages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends damagesFindManyArgs>(args?: SelectSubset<T, damagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$damagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Damages.
     * @param {damagesCreateArgs} args - Arguments to create a Damages.
     * @example
     * // Create one Damages
     * const Damages = await prisma.damages.create({
     *   data: {
     *     // ... data to create a Damages
     *   }
     * })
     * 
     */
    create<T extends damagesCreateArgs>(args: SelectSubset<T, damagesCreateArgs<ExtArgs>>): Prisma__damagesClient<$Result.GetResult<Prisma.$damagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Damages.
     * @param {damagesCreateManyArgs} args - Arguments to create many Damages.
     * @example
     * // Create many Damages
     * const damages = await prisma.damages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends damagesCreateManyArgs>(args?: SelectSubset<T, damagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Damages and returns the data saved in the database.
     * @param {damagesCreateManyAndReturnArgs} args - Arguments to create many Damages.
     * @example
     * // Create many Damages
     * const damages = await prisma.damages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Damages and only return the `id`
     * const damagesWithIdOnly = await prisma.damages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends damagesCreateManyAndReturnArgs>(args?: SelectSubset<T, damagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$damagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Damages.
     * @param {damagesDeleteArgs} args - Arguments to delete one Damages.
     * @example
     * // Delete one Damages
     * const Damages = await prisma.damages.delete({
     *   where: {
     *     // ... filter to delete one Damages
     *   }
     * })
     * 
     */
    delete<T extends damagesDeleteArgs>(args: SelectSubset<T, damagesDeleteArgs<ExtArgs>>): Prisma__damagesClient<$Result.GetResult<Prisma.$damagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Damages.
     * @param {damagesUpdateArgs} args - Arguments to update one Damages.
     * @example
     * // Update one Damages
     * const damages = await prisma.damages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends damagesUpdateArgs>(args: SelectSubset<T, damagesUpdateArgs<ExtArgs>>): Prisma__damagesClient<$Result.GetResult<Prisma.$damagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Damages.
     * @param {damagesDeleteManyArgs} args - Arguments to filter Damages to delete.
     * @example
     * // Delete a few Damages
     * const { count } = await prisma.damages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends damagesDeleteManyArgs>(args?: SelectSubset<T, damagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Damages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {damagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Damages
     * const damages = await prisma.damages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends damagesUpdateManyArgs>(args: SelectSubset<T, damagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Damages and returns the data updated in the database.
     * @param {damagesUpdateManyAndReturnArgs} args - Arguments to update many Damages.
     * @example
     * // Update many Damages
     * const damages = await prisma.damages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Damages and only return the `id`
     * const damagesWithIdOnly = await prisma.damages.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends damagesUpdateManyAndReturnArgs>(args: SelectSubset<T, damagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$damagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Damages.
     * @param {damagesUpsertArgs} args - Arguments to update or create a Damages.
     * @example
     * // Update or create a Damages
     * const damages = await prisma.damages.upsert({
     *   create: {
     *     // ... data to create a Damages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Damages we want to update
     *   }
     * })
     */
    upsert<T extends damagesUpsertArgs>(args: SelectSubset<T, damagesUpsertArgs<ExtArgs>>): Prisma__damagesClient<$Result.GetResult<Prisma.$damagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Damages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {damagesCountArgs} args - Arguments to filter Damages to count.
     * @example
     * // Count the number of Damages
     * const count = await prisma.damages.count({
     *   where: {
     *     // ... the filter for the Damages we want to count
     *   }
     * })
    **/
    count<T extends damagesCountArgs>(
      args?: Subset<T, damagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DamagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Damages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DamagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DamagesAggregateArgs>(args: Subset<T, DamagesAggregateArgs>): Prisma.PrismaPromise<GetDamagesAggregateType<T>>

    /**
     * Group by Damages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {damagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends damagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: damagesGroupByArgs['orderBy'] }
        : { orderBy?: damagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, damagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDamagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the damages model
   */
  readonly fields: damagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for damages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__damagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicles<T extends vehiclesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, vehiclesDefaultArgs<ExtArgs>>): Prisma__vehiclesClient<$Result.GetResult<Prisma.$vehiclesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the damages model
   */
  interface damagesFieldRefs {
    readonly id: FieldRef<"damages", 'Int'>
    readonly driver_id: FieldRef<"damages", 'Int'>
    readonly vehicle_id: FieldRef<"damages", 'Int'>
    readonly damage_event: FieldRef<"damages", 'String'>
    readonly where_is_damage: FieldRef<"damages", 'String'>
    readonly photo_damage: FieldRef<"damages", 'String'>
    readonly damage_description: FieldRef<"damages", 'String'>
    readonly type_to_damage: FieldRef<"damages", 'String'>
  }
    

  // Custom InputTypes
  /**
   * damages findUnique
   */
  export type damagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the damages
     */
    select?: damagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the damages
     */
    omit?: damagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: damagesInclude<ExtArgs> | null
    /**
     * Filter, which damages to fetch.
     */
    where: damagesWhereUniqueInput
  }

  /**
   * damages findUniqueOrThrow
   */
  export type damagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the damages
     */
    select?: damagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the damages
     */
    omit?: damagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: damagesInclude<ExtArgs> | null
    /**
     * Filter, which damages to fetch.
     */
    where: damagesWhereUniqueInput
  }

  /**
   * damages findFirst
   */
  export type damagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the damages
     */
    select?: damagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the damages
     */
    omit?: damagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: damagesInclude<ExtArgs> | null
    /**
     * Filter, which damages to fetch.
     */
    where?: damagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of damages to fetch.
     */
    orderBy?: damagesOrderByWithRelationInput | damagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for damages.
     */
    cursor?: damagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` damages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` damages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of damages.
     */
    distinct?: DamagesScalarFieldEnum | DamagesScalarFieldEnum[]
  }

  /**
   * damages findFirstOrThrow
   */
  export type damagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the damages
     */
    select?: damagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the damages
     */
    omit?: damagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: damagesInclude<ExtArgs> | null
    /**
     * Filter, which damages to fetch.
     */
    where?: damagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of damages to fetch.
     */
    orderBy?: damagesOrderByWithRelationInput | damagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for damages.
     */
    cursor?: damagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` damages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` damages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of damages.
     */
    distinct?: DamagesScalarFieldEnum | DamagesScalarFieldEnum[]
  }

  /**
   * damages findMany
   */
  export type damagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the damages
     */
    select?: damagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the damages
     */
    omit?: damagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: damagesInclude<ExtArgs> | null
    /**
     * Filter, which damages to fetch.
     */
    where?: damagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of damages to fetch.
     */
    orderBy?: damagesOrderByWithRelationInput | damagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing damages.
     */
    cursor?: damagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` damages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` damages.
     */
    skip?: number
    distinct?: DamagesScalarFieldEnum | DamagesScalarFieldEnum[]
  }

  /**
   * damages create
   */
  export type damagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the damages
     */
    select?: damagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the damages
     */
    omit?: damagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: damagesInclude<ExtArgs> | null
    /**
     * The data needed to create a damages.
     */
    data: XOR<damagesCreateInput, damagesUncheckedCreateInput>
  }

  /**
   * damages createMany
   */
  export type damagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many damages.
     */
    data: damagesCreateManyInput | damagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * damages createManyAndReturn
   */
  export type damagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the damages
     */
    select?: damagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the damages
     */
    omit?: damagesOmit<ExtArgs> | null
    /**
     * The data used to create many damages.
     */
    data: damagesCreateManyInput | damagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: damagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * damages update
   */
  export type damagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the damages
     */
    select?: damagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the damages
     */
    omit?: damagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: damagesInclude<ExtArgs> | null
    /**
     * The data needed to update a damages.
     */
    data: XOR<damagesUpdateInput, damagesUncheckedUpdateInput>
    /**
     * Choose, which damages to update.
     */
    where: damagesWhereUniqueInput
  }

  /**
   * damages updateMany
   */
  export type damagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update damages.
     */
    data: XOR<damagesUpdateManyMutationInput, damagesUncheckedUpdateManyInput>
    /**
     * Filter which damages to update
     */
    where?: damagesWhereInput
    /**
     * Limit how many damages to update.
     */
    limit?: number
  }

  /**
   * damages updateManyAndReturn
   */
  export type damagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the damages
     */
    select?: damagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the damages
     */
    omit?: damagesOmit<ExtArgs> | null
    /**
     * The data used to update damages.
     */
    data: XOR<damagesUpdateManyMutationInput, damagesUncheckedUpdateManyInput>
    /**
     * Filter which damages to update
     */
    where?: damagesWhereInput
    /**
     * Limit how many damages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: damagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * damages upsert
   */
  export type damagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the damages
     */
    select?: damagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the damages
     */
    omit?: damagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: damagesInclude<ExtArgs> | null
    /**
     * The filter to search for the damages to update in case it exists.
     */
    where: damagesWhereUniqueInput
    /**
     * In case the damages found by the `where` argument doesn't exist, create a new damages with this data.
     */
    create: XOR<damagesCreateInput, damagesUncheckedCreateInput>
    /**
     * In case the damages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<damagesUpdateInput, damagesUncheckedUpdateInput>
  }

  /**
   * damages delete
   */
  export type damagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the damages
     */
    select?: damagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the damages
     */
    omit?: damagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: damagesInclude<ExtArgs> | null
    /**
     * Filter which damages to delete.
     */
    where: damagesWhereUniqueInput
  }

  /**
   * damages deleteMany
   */
  export type damagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which damages to delete
     */
    where?: damagesWhereInput
    /**
     * Limit how many damages to delete.
     */
    limit?: number
  }

  /**
   * damages without action
   */
  export type damagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the damages
     */
    select?: damagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the damages
     */
    omit?: damagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: damagesInclude<ExtArgs> | null
  }


  /**
   * Model logs_services
   */

  export type AggregateLogs_services = {
    _count: Logs_servicesCountAggregateOutputType | null
    _avg: Logs_servicesAvgAggregateOutputType | null
    _sum: Logs_servicesSumAggregateOutputType | null
    _min: Logs_servicesMinAggregateOutputType | null
    _max: Logs_servicesMaxAggregateOutputType | null
  }

  export type Logs_servicesAvgAggregateOutputType = {
    id: number | null
    id_user: number | null
    id_service: number | null
  }

  export type Logs_servicesSumAggregateOutputType = {
    id: number | null
    id_user: number | null
    id_service: number | null
  }

  export type Logs_servicesMinAggregateOutputType = {
    id: number | null
    id_user: number | null
    id_service: number | null
    old_data: string | null
    new_data: string | null
    date_change: string | null
  }

  export type Logs_servicesMaxAggregateOutputType = {
    id: number | null
    id_user: number | null
    id_service: number | null
    old_data: string | null
    new_data: string | null
    date_change: string | null
  }

  export type Logs_servicesCountAggregateOutputType = {
    id: number
    id_user: number
    id_service: number
    old_data: number
    new_data: number
    date_change: number
    _all: number
  }


  export type Logs_servicesAvgAggregateInputType = {
    id?: true
    id_user?: true
    id_service?: true
  }

  export type Logs_servicesSumAggregateInputType = {
    id?: true
    id_user?: true
    id_service?: true
  }

  export type Logs_servicesMinAggregateInputType = {
    id?: true
    id_user?: true
    id_service?: true
    old_data?: true
    new_data?: true
    date_change?: true
  }

  export type Logs_servicesMaxAggregateInputType = {
    id?: true
    id_user?: true
    id_service?: true
    old_data?: true
    new_data?: true
    date_change?: true
  }

  export type Logs_servicesCountAggregateInputType = {
    id?: true
    id_user?: true
    id_service?: true
    old_data?: true
    new_data?: true
    date_change?: true
    _all?: true
  }

  export type Logs_servicesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logs_services to aggregate.
     */
    where?: logs_servicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs_services to fetch.
     */
    orderBy?: logs_servicesOrderByWithRelationInput | logs_servicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: logs_servicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs_services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs_services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned logs_services
    **/
    _count?: true | Logs_servicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Logs_servicesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Logs_servicesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Logs_servicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Logs_servicesMaxAggregateInputType
  }

  export type GetLogs_servicesAggregateType<T extends Logs_servicesAggregateArgs> = {
        [P in keyof T & keyof AggregateLogs_services]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogs_services[P]>
      : GetScalarType<T[P], AggregateLogs_services[P]>
  }




  export type logs_servicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: logs_servicesWhereInput
    orderBy?: logs_servicesOrderByWithAggregationInput | logs_servicesOrderByWithAggregationInput[]
    by: Logs_servicesScalarFieldEnum[] | Logs_servicesScalarFieldEnum
    having?: logs_servicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Logs_servicesCountAggregateInputType | true
    _avg?: Logs_servicesAvgAggregateInputType
    _sum?: Logs_servicesSumAggregateInputType
    _min?: Logs_servicesMinAggregateInputType
    _max?: Logs_servicesMaxAggregateInputType
  }

  export type Logs_servicesGroupByOutputType = {
    id: number
    id_user: number
    id_service: number
    old_data: string | null
    new_data: string
    date_change: string
    _count: Logs_servicesCountAggregateOutputType | null
    _avg: Logs_servicesAvgAggregateOutputType | null
    _sum: Logs_servicesSumAggregateOutputType | null
    _min: Logs_servicesMinAggregateOutputType | null
    _max: Logs_servicesMaxAggregateOutputType | null
  }

  type GetLogs_servicesGroupByPayload<T extends logs_servicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Logs_servicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Logs_servicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Logs_servicesGroupByOutputType[P]>
            : GetScalarType<T[P], Logs_servicesGroupByOutputType[P]>
        }
      >
    >


  export type logs_servicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_user?: boolean
    id_service?: boolean
    old_data?: boolean
    new_data?: boolean
    date_change?: boolean
    services?: boolean | servicesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logs_services"]>

  export type logs_servicesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_user?: boolean
    id_service?: boolean
    old_data?: boolean
    new_data?: boolean
    date_change?: boolean
    services?: boolean | servicesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logs_services"]>

  export type logs_servicesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_user?: boolean
    id_service?: boolean
    old_data?: boolean
    new_data?: boolean
    date_change?: boolean
    services?: boolean | servicesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logs_services"]>

  export type logs_servicesSelectScalar = {
    id?: boolean
    id_user?: boolean
    id_service?: boolean
    old_data?: boolean
    new_data?: boolean
    date_change?: boolean
  }

  export type logs_servicesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_user" | "id_service" | "old_data" | "new_data" | "date_change", ExtArgs["result"]["logs_services"]>
  export type logs_servicesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | servicesDefaultArgs<ExtArgs>
  }
  export type logs_servicesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | servicesDefaultArgs<ExtArgs>
  }
  export type logs_servicesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | servicesDefaultArgs<ExtArgs>
  }

  export type $logs_servicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "logs_services"
    objects: {
      services: Prisma.$servicesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_user: number
      id_service: number
      old_data: string | null
      new_data: string
      date_change: string
    }, ExtArgs["result"]["logs_services"]>
    composites: {}
  }

  type logs_servicesGetPayload<S extends boolean | null | undefined | logs_servicesDefaultArgs> = $Result.GetResult<Prisma.$logs_servicesPayload, S>

  type logs_servicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<logs_servicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Logs_servicesCountAggregateInputType | true
    }

  export interface logs_servicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['logs_services'], meta: { name: 'logs_services' } }
    /**
     * Find zero or one Logs_services that matches the filter.
     * @param {logs_servicesFindUniqueArgs} args - Arguments to find a Logs_services
     * @example
     * // Get one Logs_services
     * const logs_services = await prisma.logs_services.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends logs_servicesFindUniqueArgs>(args: SelectSubset<T, logs_servicesFindUniqueArgs<ExtArgs>>): Prisma__logs_servicesClient<$Result.GetResult<Prisma.$logs_servicesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Logs_services that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {logs_servicesFindUniqueOrThrowArgs} args - Arguments to find a Logs_services
     * @example
     * // Get one Logs_services
     * const logs_services = await prisma.logs_services.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends logs_servicesFindUniqueOrThrowArgs>(args: SelectSubset<T, logs_servicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__logs_servicesClient<$Result.GetResult<Prisma.$logs_servicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logs_services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logs_servicesFindFirstArgs} args - Arguments to find a Logs_services
     * @example
     * // Get one Logs_services
     * const logs_services = await prisma.logs_services.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends logs_servicesFindFirstArgs>(args?: SelectSubset<T, logs_servicesFindFirstArgs<ExtArgs>>): Prisma__logs_servicesClient<$Result.GetResult<Prisma.$logs_servicesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logs_services that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logs_servicesFindFirstOrThrowArgs} args - Arguments to find a Logs_services
     * @example
     * // Get one Logs_services
     * const logs_services = await prisma.logs_services.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends logs_servicesFindFirstOrThrowArgs>(args?: SelectSubset<T, logs_servicesFindFirstOrThrowArgs<ExtArgs>>): Prisma__logs_servicesClient<$Result.GetResult<Prisma.$logs_servicesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logs_services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logs_servicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logs_services
     * const logs_services = await prisma.logs_services.findMany()
     * 
     * // Get first 10 Logs_services
     * const logs_services = await prisma.logs_services.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logs_servicesWithIdOnly = await prisma.logs_services.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends logs_servicesFindManyArgs>(args?: SelectSubset<T, logs_servicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logs_servicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Logs_services.
     * @param {logs_servicesCreateArgs} args - Arguments to create a Logs_services.
     * @example
     * // Create one Logs_services
     * const Logs_services = await prisma.logs_services.create({
     *   data: {
     *     // ... data to create a Logs_services
     *   }
     * })
     * 
     */
    create<T extends logs_servicesCreateArgs>(args: SelectSubset<T, logs_servicesCreateArgs<ExtArgs>>): Prisma__logs_servicesClient<$Result.GetResult<Prisma.$logs_servicesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logs_services.
     * @param {logs_servicesCreateManyArgs} args - Arguments to create many Logs_services.
     * @example
     * // Create many Logs_services
     * const logs_services = await prisma.logs_services.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends logs_servicesCreateManyArgs>(args?: SelectSubset<T, logs_servicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Logs_services and returns the data saved in the database.
     * @param {logs_servicesCreateManyAndReturnArgs} args - Arguments to create many Logs_services.
     * @example
     * // Create many Logs_services
     * const logs_services = await prisma.logs_services.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Logs_services and only return the `id`
     * const logs_servicesWithIdOnly = await prisma.logs_services.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends logs_servicesCreateManyAndReturnArgs>(args?: SelectSubset<T, logs_servicesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logs_servicesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Logs_services.
     * @param {logs_servicesDeleteArgs} args - Arguments to delete one Logs_services.
     * @example
     * // Delete one Logs_services
     * const Logs_services = await prisma.logs_services.delete({
     *   where: {
     *     // ... filter to delete one Logs_services
     *   }
     * })
     * 
     */
    delete<T extends logs_servicesDeleteArgs>(args: SelectSubset<T, logs_servicesDeleteArgs<ExtArgs>>): Prisma__logs_servicesClient<$Result.GetResult<Prisma.$logs_servicesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Logs_services.
     * @param {logs_servicesUpdateArgs} args - Arguments to update one Logs_services.
     * @example
     * // Update one Logs_services
     * const logs_services = await prisma.logs_services.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends logs_servicesUpdateArgs>(args: SelectSubset<T, logs_servicesUpdateArgs<ExtArgs>>): Prisma__logs_servicesClient<$Result.GetResult<Prisma.$logs_servicesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logs_services.
     * @param {logs_servicesDeleteManyArgs} args - Arguments to filter Logs_services to delete.
     * @example
     * // Delete a few Logs_services
     * const { count } = await prisma.logs_services.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends logs_servicesDeleteManyArgs>(args?: SelectSubset<T, logs_servicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs_services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logs_servicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logs_services
     * const logs_services = await prisma.logs_services.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends logs_servicesUpdateManyArgs>(args: SelectSubset<T, logs_servicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs_services and returns the data updated in the database.
     * @param {logs_servicesUpdateManyAndReturnArgs} args - Arguments to update many Logs_services.
     * @example
     * // Update many Logs_services
     * const logs_services = await prisma.logs_services.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Logs_services and only return the `id`
     * const logs_servicesWithIdOnly = await prisma.logs_services.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends logs_servicesUpdateManyAndReturnArgs>(args: SelectSubset<T, logs_servicesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logs_servicesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Logs_services.
     * @param {logs_servicesUpsertArgs} args - Arguments to update or create a Logs_services.
     * @example
     * // Update or create a Logs_services
     * const logs_services = await prisma.logs_services.upsert({
     *   create: {
     *     // ... data to create a Logs_services
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Logs_services we want to update
     *   }
     * })
     */
    upsert<T extends logs_servicesUpsertArgs>(args: SelectSubset<T, logs_servicesUpsertArgs<ExtArgs>>): Prisma__logs_servicesClient<$Result.GetResult<Prisma.$logs_servicesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Logs_services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logs_servicesCountArgs} args - Arguments to filter Logs_services to count.
     * @example
     * // Count the number of Logs_services
     * const count = await prisma.logs_services.count({
     *   where: {
     *     // ... the filter for the Logs_services we want to count
     *   }
     * })
    **/
    count<T extends logs_servicesCountArgs>(
      args?: Subset<T, logs_servicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Logs_servicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Logs_services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Logs_servicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Logs_servicesAggregateArgs>(args: Subset<T, Logs_servicesAggregateArgs>): Prisma.PrismaPromise<GetLogs_servicesAggregateType<T>>

    /**
     * Group by Logs_services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logs_servicesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends logs_servicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: logs_servicesGroupByArgs['orderBy'] }
        : { orderBy?: logs_servicesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, logs_servicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogs_servicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the logs_services model
   */
  readonly fields: logs_servicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for logs_services.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__logs_servicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    services<T extends servicesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, servicesDefaultArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the logs_services model
   */
  interface logs_servicesFieldRefs {
    readonly id: FieldRef<"logs_services", 'Int'>
    readonly id_user: FieldRef<"logs_services", 'Int'>
    readonly id_service: FieldRef<"logs_services", 'Int'>
    readonly old_data: FieldRef<"logs_services", 'String'>
    readonly new_data: FieldRef<"logs_services", 'String'>
    readonly date_change: FieldRef<"logs_services", 'String'>
  }
    

  // Custom InputTypes
  /**
   * logs_services findUnique
   */
  export type logs_servicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs_services
     */
    select?: logs_servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs_services
     */
    omit?: logs_servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logs_servicesInclude<ExtArgs> | null
    /**
     * Filter, which logs_services to fetch.
     */
    where: logs_servicesWhereUniqueInput
  }

  /**
   * logs_services findUniqueOrThrow
   */
  export type logs_servicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs_services
     */
    select?: logs_servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs_services
     */
    omit?: logs_servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logs_servicesInclude<ExtArgs> | null
    /**
     * Filter, which logs_services to fetch.
     */
    where: logs_servicesWhereUniqueInput
  }

  /**
   * logs_services findFirst
   */
  export type logs_servicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs_services
     */
    select?: logs_servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs_services
     */
    omit?: logs_servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logs_servicesInclude<ExtArgs> | null
    /**
     * Filter, which logs_services to fetch.
     */
    where?: logs_servicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs_services to fetch.
     */
    orderBy?: logs_servicesOrderByWithRelationInput | logs_servicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logs_services.
     */
    cursor?: logs_servicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs_services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs_services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logs_services.
     */
    distinct?: Logs_servicesScalarFieldEnum | Logs_servicesScalarFieldEnum[]
  }

  /**
   * logs_services findFirstOrThrow
   */
  export type logs_servicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs_services
     */
    select?: logs_servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs_services
     */
    omit?: logs_servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logs_servicesInclude<ExtArgs> | null
    /**
     * Filter, which logs_services to fetch.
     */
    where?: logs_servicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs_services to fetch.
     */
    orderBy?: logs_servicesOrderByWithRelationInput | logs_servicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logs_services.
     */
    cursor?: logs_servicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs_services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs_services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logs_services.
     */
    distinct?: Logs_servicesScalarFieldEnum | Logs_servicesScalarFieldEnum[]
  }

  /**
   * logs_services findMany
   */
  export type logs_servicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs_services
     */
    select?: logs_servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs_services
     */
    omit?: logs_servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logs_servicesInclude<ExtArgs> | null
    /**
     * Filter, which logs_services to fetch.
     */
    where?: logs_servicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs_services to fetch.
     */
    orderBy?: logs_servicesOrderByWithRelationInput | logs_servicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing logs_services.
     */
    cursor?: logs_servicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs_services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs_services.
     */
    skip?: number
    distinct?: Logs_servicesScalarFieldEnum | Logs_servicesScalarFieldEnum[]
  }

  /**
   * logs_services create
   */
  export type logs_servicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs_services
     */
    select?: logs_servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs_services
     */
    omit?: logs_servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logs_servicesInclude<ExtArgs> | null
    /**
     * The data needed to create a logs_services.
     */
    data: XOR<logs_servicesCreateInput, logs_servicesUncheckedCreateInput>
  }

  /**
   * logs_services createMany
   */
  export type logs_servicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many logs_services.
     */
    data: logs_servicesCreateManyInput | logs_servicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * logs_services createManyAndReturn
   */
  export type logs_servicesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs_services
     */
    select?: logs_servicesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the logs_services
     */
    omit?: logs_servicesOmit<ExtArgs> | null
    /**
     * The data used to create many logs_services.
     */
    data: logs_servicesCreateManyInput | logs_servicesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logs_servicesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * logs_services update
   */
  export type logs_servicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs_services
     */
    select?: logs_servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs_services
     */
    omit?: logs_servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logs_servicesInclude<ExtArgs> | null
    /**
     * The data needed to update a logs_services.
     */
    data: XOR<logs_servicesUpdateInput, logs_servicesUncheckedUpdateInput>
    /**
     * Choose, which logs_services to update.
     */
    where: logs_servicesWhereUniqueInput
  }

  /**
   * logs_services updateMany
   */
  export type logs_servicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update logs_services.
     */
    data: XOR<logs_servicesUpdateManyMutationInput, logs_servicesUncheckedUpdateManyInput>
    /**
     * Filter which logs_services to update
     */
    where?: logs_servicesWhereInput
    /**
     * Limit how many logs_services to update.
     */
    limit?: number
  }

  /**
   * logs_services updateManyAndReturn
   */
  export type logs_servicesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs_services
     */
    select?: logs_servicesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the logs_services
     */
    omit?: logs_servicesOmit<ExtArgs> | null
    /**
     * The data used to update logs_services.
     */
    data: XOR<logs_servicesUpdateManyMutationInput, logs_servicesUncheckedUpdateManyInput>
    /**
     * Filter which logs_services to update
     */
    where?: logs_servicesWhereInput
    /**
     * Limit how many logs_services to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logs_servicesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * logs_services upsert
   */
  export type logs_servicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs_services
     */
    select?: logs_servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs_services
     */
    omit?: logs_servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logs_servicesInclude<ExtArgs> | null
    /**
     * The filter to search for the logs_services to update in case it exists.
     */
    where: logs_servicesWhereUniqueInput
    /**
     * In case the logs_services found by the `where` argument doesn't exist, create a new logs_services with this data.
     */
    create: XOR<logs_servicesCreateInput, logs_servicesUncheckedCreateInput>
    /**
     * In case the logs_services was found with the provided `where` argument, update it with this data.
     */
    update: XOR<logs_servicesUpdateInput, logs_servicesUncheckedUpdateInput>
  }

  /**
   * logs_services delete
   */
  export type logs_servicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs_services
     */
    select?: logs_servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs_services
     */
    omit?: logs_servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logs_servicesInclude<ExtArgs> | null
    /**
     * Filter which logs_services to delete.
     */
    where: logs_servicesWhereUniqueInput
  }

  /**
   * logs_services deleteMany
   */
  export type logs_servicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logs_services to delete
     */
    where?: logs_servicesWhereInput
    /**
     * Limit how many logs_services to delete.
     */
    limit?: number
  }

  /**
   * logs_services without action
   */
  export type logs_servicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs_services
     */
    select?: logs_servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs_services
     */
    omit?: logs_servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logs_servicesInclude<ExtArgs> | null
  }


  /**
   * Model preference
   */

  export type AggregatePreference = {
    _count: PreferenceCountAggregateOutputType | null
    _avg: PreferenceAvgAggregateOutputType | null
    _sum: PreferenceSumAggregateOutputType | null
    _min: PreferenceMinAggregateOutputType | null
    _max: PreferenceMaxAggregateOutputType | null
  }

  export type PreferenceAvgAggregateOutputType = {
    id: number | null
    id_user: number | null
    style_colorimetry_app: number | null
  }

  export type PreferenceSumAggregateOutputType = {
    id: number | null
    id_user: number | null
    style_colorimetry_app: number | null
  }

  export type PreferenceMinAggregateOutputType = {
    id: number | null
    id_user: number | null
    name_s: string | null
    last_name_s: string | null
    style_colorimetry_app: number | null
    sex_visibility: string | null
  }

  export type PreferenceMaxAggregateOutputType = {
    id: number | null
    id_user: number | null
    name_s: string | null
    last_name_s: string | null
    style_colorimetry_app: number | null
    sex_visibility: string | null
  }

  export type PreferenceCountAggregateOutputType = {
    id: number
    id_user: number
    name_s: number
    last_name_s: number
    style_colorimetry_app: number
    sex_visibility: number
    _all: number
  }


  export type PreferenceAvgAggregateInputType = {
    id?: true
    id_user?: true
    style_colorimetry_app?: true
  }

  export type PreferenceSumAggregateInputType = {
    id?: true
    id_user?: true
    style_colorimetry_app?: true
  }

  export type PreferenceMinAggregateInputType = {
    id?: true
    id_user?: true
    name_s?: true
    last_name_s?: true
    style_colorimetry_app?: true
    sex_visibility?: true
  }

  export type PreferenceMaxAggregateInputType = {
    id?: true
    id_user?: true
    name_s?: true
    last_name_s?: true
    style_colorimetry_app?: true
    sex_visibility?: true
  }

  export type PreferenceCountAggregateInputType = {
    id?: true
    id_user?: true
    name_s?: true
    last_name_s?: true
    style_colorimetry_app?: true
    sex_visibility?: true
    _all?: true
  }

  export type PreferenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which preference to aggregate.
     */
    where?: preferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of preferences to fetch.
     */
    orderBy?: preferenceOrderByWithRelationInput | preferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: preferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` preferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` preferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned preferences
    **/
    _count?: true | PreferenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PreferenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PreferenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PreferenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PreferenceMaxAggregateInputType
  }

  export type GetPreferenceAggregateType<T extends PreferenceAggregateArgs> = {
        [P in keyof T & keyof AggregatePreference]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePreference[P]>
      : GetScalarType<T[P], AggregatePreference[P]>
  }




  export type preferenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: preferenceWhereInput
    orderBy?: preferenceOrderByWithAggregationInput | preferenceOrderByWithAggregationInput[]
    by: PreferenceScalarFieldEnum[] | PreferenceScalarFieldEnum
    having?: preferenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PreferenceCountAggregateInputType | true
    _avg?: PreferenceAvgAggregateInputType
    _sum?: PreferenceSumAggregateInputType
    _min?: PreferenceMinAggregateInputType
    _max?: PreferenceMaxAggregateInputType
  }

  export type PreferenceGroupByOutputType = {
    id: number
    id_user: number | null
    name_s: string | null
    last_name_s: string | null
    style_colorimetry_app: number | null
    sex_visibility: string | null
    _count: PreferenceCountAggregateOutputType | null
    _avg: PreferenceAvgAggregateOutputType | null
    _sum: PreferenceSumAggregateOutputType | null
    _min: PreferenceMinAggregateOutputType | null
    _max: PreferenceMaxAggregateOutputType | null
  }

  type GetPreferenceGroupByPayload<T extends preferenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PreferenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PreferenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PreferenceGroupByOutputType[P]>
            : GetScalarType<T[P], PreferenceGroupByOutputType[P]>
        }
      >
    >


  export type preferenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_user?: boolean
    name_s?: boolean
    last_name_s?: boolean
    style_colorimetry_app?: boolean
    sex_visibility?: boolean
  }, ExtArgs["result"]["preference"]>

  export type preferenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_user?: boolean
    name_s?: boolean
    last_name_s?: boolean
    style_colorimetry_app?: boolean
    sex_visibility?: boolean
  }, ExtArgs["result"]["preference"]>

  export type preferenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_user?: boolean
    name_s?: boolean
    last_name_s?: boolean
    style_colorimetry_app?: boolean
    sex_visibility?: boolean
  }, ExtArgs["result"]["preference"]>

  export type preferenceSelectScalar = {
    id?: boolean
    id_user?: boolean
    name_s?: boolean
    last_name_s?: boolean
    style_colorimetry_app?: boolean
    sex_visibility?: boolean
  }

  export type preferenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_user" | "name_s" | "last_name_s" | "style_colorimetry_app" | "sex_visibility", ExtArgs["result"]["preference"]>

  export type $preferencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "preference"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_user: number | null
      name_s: string | null
      last_name_s: string | null
      style_colorimetry_app: number | null
      sex_visibility: string | null
    }, ExtArgs["result"]["preference"]>
    composites: {}
  }

  type preferenceGetPayload<S extends boolean | null | undefined | preferenceDefaultArgs> = $Result.GetResult<Prisma.$preferencePayload, S>

  type preferenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<preferenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PreferenceCountAggregateInputType | true
    }

  export interface preferenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['preference'], meta: { name: 'preference' } }
    /**
     * Find zero or one Preference that matches the filter.
     * @param {preferenceFindUniqueArgs} args - Arguments to find a Preference
     * @example
     * // Get one Preference
     * const preference = await prisma.preference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends preferenceFindUniqueArgs>(args: SelectSubset<T, preferenceFindUniqueArgs<ExtArgs>>): Prisma__preferenceClient<$Result.GetResult<Prisma.$preferencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Preference that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {preferenceFindUniqueOrThrowArgs} args - Arguments to find a Preference
     * @example
     * // Get one Preference
     * const preference = await prisma.preference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends preferenceFindUniqueOrThrowArgs>(args: SelectSubset<T, preferenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__preferenceClient<$Result.GetResult<Prisma.$preferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Preference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preferenceFindFirstArgs} args - Arguments to find a Preference
     * @example
     * // Get one Preference
     * const preference = await prisma.preference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends preferenceFindFirstArgs>(args?: SelectSubset<T, preferenceFindFirstArgs<ExtArgs>>): Prisma__preferenceClient<$Result.GetResult<Prisma.$preferencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Preference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preferenceFindFirstOrThrowArgs} args - Arguments to find a Preference
     * @example
     * // Get one Preference
     * const preference = await prisma.preference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends preferenceFindFirstOrThrowArgs>(args?: SelectSubset<T, preferenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__preferenceClient<$Result.GetResult<Prisma.$preferencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Preferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preferenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Preferences
     * const preferences = await prisma.preference.findMany()
     * 
     * // Get first 10 Preferences
     * const preferences = await prisma.preference.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const preferenceWithIdOnly = await prisma.preference.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends preferenceFindManyArgs>(args?: SelectSubset<T, preferenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$preferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Preference.
     * @param {preferenceCreateArgs} args - Arguments to create a Preference.
     * @example
     * // Create one Preference
     * const Preference = await prisma.preference.create({
     *   data: {
     *     // ... data to create a Preference
     *   }
     * })
     * 
     */
    create<T extends preferenceCreateArgs>(args: SelectSubset<T, preferenceCreateArgs<ExtArgs>>): Prisma__preferenceClient<$Result.GetResult<Prisma.$preferencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Preferences.
     * @param {preferenceCreateManyArgs} args - Arguments to create many Preferences.
     * @example
     * // Create many Preferences
     * const preference = await prisma.preference.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends preferenceCreateManyArgs>(args?: SelectSubset<T, preferenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Preferences and returns the data saved in the database.
     * @param {preferenceCreateManyAndReturnArgs} args - Arguments to create many Preferences.
     * @example
     * // Create many Preferences
     * const preference = await prisma.preference.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Preferences and only return the `id`
     * const preferenceWithIdOnly = await prisma.preference.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends preferenceCreateManyAndReturnArgs>(args?: SelectSubset<T, preferenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$preferencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Preference.
     * @param {preferenceDeleteArgs} args - Arguments to delete one Preference.
     * @example
     * // Delete one Preference
     * const Preference = await prisma.preference.delete({
     *   where: {
     *     // ... filter to delete one Preference
     *   }
     * })
     * 
     */
    delete<T extends preferenceDeleteArgs>(args: SelectSubset<T, preferenceDeleteArgs<ExtArgs>>): Prisma__preferenceClient<$Result.GetResult<Prisma.$preferencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Preference.
     * @param {preferenceUpdateArgs} args - Arguments to update one Preference.
     * @example
     * // Update one Preference
     * const preference = await prisma.preference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends preferenceUpdateArgs>(args: SelectSubset<T, preferenceUpdateArgs<ExtArgs>>): Prisma__preferenceClient<$Result.GetResult<Prisma.$preferencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Preferences.
     * @param {preferenceDeleteManyArgs} args - Arguments to filter Preferences to delete.
     * @example
     * // Delete a few Preferences
     * const { count } = await prisma.preference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends preferenceDeleteManyArgs>(args?: SelectSubset<T, preferenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Preferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Preferences
     * const preference = await prisma.preference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends preferenceUpdateManyArgs>(args: SelectSubset<T, preferenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Preferences and returns the data updated in the database.
     * @param {preferenceUpdateManyAndReturnArgs} args - Arguments to update many Preferences.
     * @example
     * // Update many Preferences
     * const preference = await prisma.preference.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Preferences and only return the `id`
     * const preferenceWithIdOnly = await prisma.preference.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends preferenceUpdateManyAndReturnArgs>(args: SelectSubset<T, preferenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$preferencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Preference.
     * @param {preferenceUpsertArgs} args - Arguments to update or create a Preference.
     * @example
     * // Update or create a Preference
     * const preference = await prisma.preference.upsert({
     *   create: {
     *     // ... data to create a Preference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Preference we want to update
     *   }
     * })
     */
    upsert<T extends preferenceUpsertArgs>(args: SelectSubset<T, preferenceUpsertArgs<ExtArgs>>): Prisma__preferenceClient<$Result.GetResult<Prisma.$preferencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Preferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preferenceCountArgs} args - Arguments to filter Preferences to count.
     * @example
     * // Count the number of Preferences
     * const count = await prisma.preference.count({
     *   where: {
     *     // ... the filter for the Preferences we want to count
     *   }
     * })
    **/
    count<T extends preferenceCountArgs>(
      args?: Subset<T, preferenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PreferenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Preference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PreferenceAggregateArgs>(args: Subset<T, PreferenceAggregateArgs>): Prisma.PrismaPromise<GetPreferenceAggregateType<T>>

    /**
     * Group by Preference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preferenceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends preferenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: preferenceGroupByArgs['orderBy'] }
        : { orderBy?: preferenceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, preferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPreferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the preference model
   */
  readonly fields: preferenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for preference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__preferenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the preference model
   */
  interface preferenceFieldRefs {
    readonly id: FieldRef<"preference", 'Int'>
    readonly id_user: FieldRef<"preference", 'Int'>
    readonly name_s: FieldRef<"preference", 'String'>
    readonly last_name_s: FieldRef<"preference", 'String'>
    readonly style_colorimetry_app: FieldRef<"preference", 'Int'>
    readonly sex_visibility: FieldRef<"preference", 'String'>
  }
    

  // Custom InputTypes
  /**
   * preference findUnique
   */
  export type preferenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preference
     */
    select?: preferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preference
     */
    omit?: preferenceOmit<ExtArgs> | null
    /**
     * Filter, which preference to fetch.
     */
    where: preferenceWhereUniqueInput
  }

  /**
   * preference findUniqueOrThrow
   */
  export type preferenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preference
     */
    select?: preferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preference
     */
    omit?: preferenceOmit<ExtArgs> | null
    /**
     * Filter, which preference to fetch.
     */
    where: preferenceWhereUniqueInput
  }

  /**
   * preference findFirst
   */
  export type preferenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preference
     */
    select?: preferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preference
     */
    omit?: preferenceOmit<ExtArgs> | null
    /**
     * Filter, which preference to fetch.
     */
    where?: preferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of preferences to fetch.
     */
    orderBy?: preferenceOrderByWithRelationInput | preferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for preferences.
     */
    cursor?: preferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` preferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` preferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of preferences.
     */
    distinct?: PreferenceScalarFieldEnum | PreferenceScalarFieldEnum[]
  }

  /**
   * preference findFirstOrThrow
   */
  export type preferenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preference
     */
    select?: preferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preference
     */
    omit?: preferenceOmit<ExtArgs> | null
    /**
     * Filter, which preference to fetch.
     */
    where?: preferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of preferences to fetch.
     */
    orderBy?: preferenceOrderByWithRelationInput | preferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for preferences.
     */
    cursor?: preferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` preferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` preferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of preferences.
     */
    distinct?: PreferenceScalarFieldEnum | PreferenceScalarFieldEnum[]
  }

  /**
   * preference findMany
   */
  export type preferenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preference
     */
    select?: preferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preference
     */
    omit?: preferenceOmit<ExtArgs> | null
    /**
     * Filter, which preferences to fetch.
     */
    where?: preferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of preferences to fetch.
     */
    orderBy?: preferenceOrderByWithRelationInput | preferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing preferences.
     */
    cursor?: preferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` preferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` preferences.
     */
    skip?: number
    distinct?: PreferenceScalarFieldEnum | PreferenceScalarFieldEnum[]
  }

  /**
   * preference create
   */
  export type preferenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preference
     */
    select?: preferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preference
     */
    omit?: preferenceOmit<ExtArgs> | null
    /**
     * The data needed to create a preference.
     */
    data?: XOR<preferenceCreateInput, preferenceUncheckedCreateInput>
  }

  /**
   * preference createMany
   */
  export type preferenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many preferences.
     */
    data: preferenceCreateManyInput | preferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * preference createManyAndReturn
   */
  export type preferenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preference
     */
    select?: preferenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the preference
     */
    omit?: preferenceOmit<ExtArgs> | null
    /**
     * The data used to create many preferences.
     */
    data: preferenceCreateManyInput | preferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * preference update
   */
  export type preferenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preference
     */
    select?: preferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preference
     */
    omit?: preferenceOmit<ExtArgs> | null
    /**
     * The data needed to update a preference.
     */
    data: XOR<preferenceUpdateInput, preferenceUncheckedUpdateInput>
    /**
     * Choose, which preference to update.
     */
    where: preferenceWhereUniqueInput
  }

  /**
   * preference updateMany
   */
  export type preferenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update preferences.
     */
    data: XOR<preferenceUpdateManyMutationInput, preferenceUncheckedUpdateManyInput>
    /**
     * Filter which preferences to update
     */
    where?: preferenceWhereInput
    /**
     * Limit how many preferences to update.
     */
    limit?: number
  }

  /**
   * preference updateManyAndReturn
   */
  export type preferenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preference
     */
    select?: preferenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the preference
     */
    omit?: preferenceOmit<ExtArgs> | null
    /**
     * The data used to update preferences.
     */
    data: XOR<preferenceUpdateManyMutationInput, preferenceUncheckedUpdateManyInput>
    /**
     * Filter which preferences to update
     */
    where?: preferenceWhereInput
    /**
     * Limit how many preferences to update.
     */
    limit?: number
  }

  /**
   * preference upsert
   */
  export type preferenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preference
     */
    select?: preferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preference
     */
    omit?: preferenceOmit<ExtArgs> | null
    /**
     * The filter to search for the preference to update in case it exists.
     */
    where: preferenceWhereUniqueInput
    /**
     * In case the preference found by the `where` argument doesn't exist, create a new preference with this data.
     */
    create: XOR<preferenceCreateInput, preferenceUncheckedCreateInput>
    /**
     * In case the preference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<preferenceUpdateInput, preferenceUncheckedUpdateInput>
  }

  /**
   * preference delete
   */
  export type preferenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preference
     */
    select?: preferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preference
     */
    omit?: preferenceOmit<ExtArgs> | null
    /**
     * Filter which preference to delete.
     */
    where: preferenceWhereUniqueInput
  }

  /**
   * preference deleteMany
   */
  export type preferenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which preferences to delete
     */
    where?: preferenceWhereInput
    /**
     * Limit how many preferences to delete.
     */
    limit?: number
  }

  /**
   * preference without action
   */
  export type preferenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preference
     */
    select?: preferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preference
     */
    omit?: preferenceOmit<ExtArgs> | null
  }


  /**
   * Model services
   */

  export type AggregateServices = {
    _count: ServicesCountAggregateOutputType | null
    _avg: ServicesAvgAggregateOutputType | null
    _sum: ServicesSumAggregateOutputType | null
    _min: ServicesMinAggregateOutputType | null
    _max: ServicesMaxAggregateOutputType | null
  }

  export type ServicesAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    vehicle_id: number | null
    kilometers: number | null
    driver: number | null
    close_kilometers: number | null
    kilometers_traveled: number | null
  }

  export type ServicesSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    vehicle_id: number | null
    kilometers: number | null
    driver: number | null
    close_kilometers: number | null
    kilometers_traveled: number | null
  }

  export type ServicesMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    vehicle_id: number | null
    kilometers: number | null
    driver: number | null
    first_firefighter: string | null
    second_firefighter: string | null
    third_firefighter: string | null
    type_service: string | null
    folio: string | null
    cologne: string | null
    stret: string | null
    crossing: string | null
    reporter: string | null
    phone_reporter: string | null
    close_type: string | null
    general_and_conclusion: string | null
    close_kilometers: number | null
    kilometers_traveled: number | null
    status: string | null
  }

  export type ServicesMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    vehicle_id: number | null
    kilometers: number | null
    driver: number | null
    first_firefighter: string | null
    second_firefighter: string | null
    third_firefighter: string | null
    type_service: string | null
    folio: string | null
    cologne: string | null
    stret: string | null
    crossing: string | null
    reporter: string | null
    phone_reporter: string | null
    close_type: string | null
    general_and_conclusion: string | null
    close_kilometers: number | null
    kilometers_traveled: number | null
    status: string | null
  }

  export type ServicesCountAggregateOutputType = {
    id: number
    user_id: number
    vehicle_id: number
    kilometers: number
    driver: number
    first_firefighter: number
    second_firefighter: number
    third_firefighter: number
    type_service: number
    folio: number
    cologne: number
    stret: number
    crossing: number
    reporter: number
    phone_reporter: number
    close_type: number
    general_and_conclusion: number
    close_kilometers: number
    kilometers_traveled: number
    status: number
    _all: number
  }


  export type ServicesAvgAggregateInputType = {
    id?: true
    user_id?: true
    vehicle_id?: true
    kilometers?: true
    driver?: true
    close_kilometers?: true
    kilometers_traveled?: true
  }

  export type ServicesSumAggregateInputType = {
    id?: true
    user_id?: true
    vehicle_id?: true
    kilometers?: true
    driver?: true
    close_kilometers?: true
    kilometers_traveled?: true
  }

  export type ServicesMinAggregateInputType = {
    id?: true
    user_id?: true
    vehicle_id?: true
    kilometers?: true
    driver?: true
    first_firefighter?: true
    second_firefighter?: true
    third_firefighter?: true
    type_service?: true
    folio?: true
    cologne?: true
    stret?: true
    crossing?: true
    reporter?: true
    phone_reporter?: true
    close_type?: true
    general_and_conclusion?: true
    close_kilometers?: true
    kilometers_traveled?: true
    status?: true
  }

  export type ServicesMaxAggregateInputType = {
    id?: true
    user_id?: true
    vehicle_id?: true
    kilometers?: true
    driver?: true
    first_firefighter?: true
    second_firefighter?: true
    third_firefighter?: true
    type_service?: true
    folio?: true
    cologne?: true
    stret?: true
    crossing?: true
    reporter?: true
    phone_reporter?: true
    close_type?: true
    general_and_conclusion?: true
    close_kilometers?: true
    kilometers_traveled?: true
    status?: true
  }

  export type ServicesCountAggregateInputType = {
    id?: true
    user_id?: true
    vehicle_id?: true
    kilometers?: true
    driver?: true
    first_firefighter?: true
    second_firefighter?: true
    third_firefighter?: true
    type_service?: true
    folio?: true
    cologne?: true
    stret?: true
    crossing?: true
    reporter?: true
    phone_reporter?: true
    close_type?: true
    general_and_conclusion?: true
    close_kilometers?: true
    kilometers_traveled?: true
    status?: true
    _all?: true
  }

  export type ServicesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which services to aggregate.
     */
    where?: servicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of services to fetch.
     */
    orderBy?: servicesOrderByWithRelationInput | servicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: servicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned services
    **/
    _count?: true | ServicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicesMaxAggregateInputType
  }

  export type GetServicesAggregateType<T extends ServicesAggregateArgs> = {
        [P in keyof T & keyof AggregateServices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServices[P]>
      : GetScalarType<T[P], AggregateServices[P]>
  }




  export type servicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: servicesWhereInput
    orderBy?: servicesOrderByWithAggregationInput | servicesOrderByWithAggregationInput[]
    by: ServicesScalarFieldEnum[] | ServicesScalarFieldEnum
    having?: servicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicesCountAggregateInputType | true
    _avg?: ServicesAvgAggregateInputType
    _sum?: ServicesSumAggregateInputType
    _min?: ServicesMinAggregateInputType
    _max?: ServicesMaxAggregateInputType
  }

  export type ServicesGroupByOutputType = {
    id: number
    user_id: number
    vehicle_id: number
    kilometers: number
    driver: number
    first_firefighter: string
    second_firefighter: string | null
    third_firefighter: string | null
    type_service: string
    folio: string | null
    cologne: string
    stret: string
    crossing: string
    reporter: string
    phone_reporter: string
    close_type: string
    general_and_conclusion: string
    close_kilometers: number
    kilometers_traveled: number | null
    status: string
    _count: ServicesCountAggregateOutputType | null
    _avg: ServicesAvgAggregateOutputType | null
    _sum: ServicesSumAggregateOutputType | null
    _min: ServicesMinAggregateOutputType | null
    _max: ServicesMaxAggregateOutputType | null
  }

  type GetServicesGroupByPayload<T extends servicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicesGroupByOutputType[P]>
            : GetScalarType<T[P], ServicesGroupByOutputType[P]>
        }
      >
    >


  export type servicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    vehicle_id?: boolean
    kilometers?: boolean
    driver?: boolean
    first_firefighter?: boolean
    second_firefighter?: boolean
    third_firefighter?: boolean
    type_service?: boolean
    folio?: boolean
    cologne?: boolean
    stret?: boolean
    crossing?: boolean
    reporter?: boolean
    phone_reporter?: boolean
    close_type?: boolean
    general_and_conclusion?: boolean
    close_kilometers?: boolean
    kilometers_traveled?: boolean
    status?: boolean
    logs_services?: boolean | services$logs_servicesArgs<ExtArgs>
    vehicles?: boolean | vehiclesDefaultArgs<ExtArgs>
    _count?: boolean | ServicesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["services"]>

  export type servicesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    vehicle_id?: boolean
    kilometers?: boolean
    driver?: boolean
    first_firefighter?: boolean
    second_firefighter?: boolean
    third_firefighter?: boolean
    type_service?: boolean
    folio?: boolean
    cologne?: boolean
    stret?: boolean
    crossing?: boolean
    reporter?: boolean
    phone_reporter?: boolean
    close_type?: boolean
    general_and_conclusion?: boolean
    close_kilometers?: boolean
    kilometers_traveled?: boolean
    status?: boolean
    vehicles?: boolean | vehiclesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["services"]>

  export type servicesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    vehicle_id?: boolean
    kilometers?: boolean
    driver?: boolean
    first_firefighter?: boolean
    second_firefighter?: boolean
    third_firefighter?: boolean
    type_service?: boolean
    folio?: boolean
    cologne?: boolean
    stret?: boolean
    crossing?: boolean
    reporter?: boolean
    phone_reporter?: boolean
    close_type?: boolean
    general_and_conclusion?: boolean
    close_kilometers?: boolean
    kilometers_traveled?: boolean
    status?: boolean
    vehicles?: boolean | vehiclesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["services"]>

  export type servicesSelectScalar = {
    id?: boolean
    user_id?: boolean
    vehicle_id?: boolean
    kilometers?: boolean
    driver?: boolean
    first_firefighter?: boolean
    second_firefighter?: boolean
    third_firefighter?: boolean
    type_service?: boolean
    folio?: boolean
    cologne?: boolean
    stret?: boolean
    crossing?: boolean
    reporter?: boolean
    phone_reporter?: boolean
    close_type?: boolean
    general_and_conclusion?: boolean
    close_kilometers?: boolean
    kilometers_traveled?: boolean
    status?: boolean
  }

  export type servicesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "vehicle_id" | "kilometers" | "driver" | "first_firefighter" | "second_firefighter" | "third_firefighter" | "type_service" | "folio" | "cologne" | "stret" | "crossing" | "reporter" | "phone_reporter" | "close_type" | "general_and_conclusion" | "close_kilometers" | "kilometers_traveled" | "status", ExtArgs["result"]["services"]>
  export type servicesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs_services?: boolean | services$logs_servicesArgs<ExtArgs>
    vehicles?: boolean | vehiclesDefaultArgs<ExtArgs>
    _count?: boolean | ServicesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type servicesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | vehiclesDefaultArgs<ExtArgs>
  }
  export type servicesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | vehiclesDefaultArgs<ExtArgs>
  }

  export type $servicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "services"
    objects: {
      logs_services: Prisma.$logs_servicesPayload<ExtArgs>[]
      vehicles: Prisma.$vehiclesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      vehicle_id: number
      kilometers: number
      driver: number
      first_firefighter: string
      second_firefighter: string | null
      third_firefighter: string | null
      type_service: string
      folio: string | null
      cologne: string
      stret: string
      crossing: string
      reporter: string
      phone_reporter: string
      close_type: string
      general_and_conclusion: string
      close_kilometers: number
      kilometers_traveled: number | null
      status: string
    }, ExtArgs["result"]["services"]>
    composites: {}
  }

  type servicesGetPayload<S extends boolean | null | undefined | servicesDefaultArgs> = $Result.GetResult<Prisma.$servicesPayload, S>

  type servicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<servicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicesCountAggregateInputType | true
    }

  export interface servicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['services'], meta: { name: 'services' } }
    /**
     * Find zero or one Services that matches the filter.
     * @param {servicesFindUniqueArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends servicesFindUniqueArgs>(args: SelectSubset<T, servicesFindUniqueArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Services that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {servicesFindUniqueOrThrowArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends servicesFindUniqueOrThrowArgs>(args: SelectSubset<T, servicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesFindFirstArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends servicesFindFirstArgs>(args?: SelectSubset<T, servicesFindFirstArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Services that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesFindFirstOrThrowArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends servicesFindFirstOrThrowArgs>(args?: SelectSubset<T, servicesFindFirstOrThrowArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.services.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.services.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servicesWithIdOnly = await prisma.services.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends servicesFindManyArgs>(args?: SelectSubset<T, servicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Services.
     * @param {servicesCreateArgs} args - Arguments to create a Services.
     * @example
     * // Create one Services
     * const Services = await prisma.services.create({
     *   data: {
     *     // ... data to create a Services
     *   }
     * })
     * 
     */
    create<T extends servicesCreateArgs>(args: SelectSubset<T, servicesCreateArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {servicesCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const services = await prisma.services.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends servicesCreateManyArgs>(args?: SelectSubset<T, servicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {servicesCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const services = await prisma.services.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const servicesWithIdOnly = await prisma.services.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends servicesCreateManyAndReturnArgs>(args?: SelectSubset<T, servicesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Services.
     * @param {servicesDeleteArgs} args - Arguments to delete one Services.
     * @example
     * // Delete one Services
     * const Services = await prisma.services.delete({
     *   where: {
     *     // ... filter to delete one Services
     *   }
     * })
     * 
     */
    delete<T extends servicesDeleteArgs>(args: SelectSubset<T, servicesDeleteArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Services.
     * @param {servicesUpdateArgs} args - Arguments to update one Services.
     * @example
     * // Update one Services
     * const services = await prisma.services.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends servicesUpdateArgs>(args: SelectSubset<T, servicesUpdateArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {servicesDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.services.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends servicesDeleteManyArgs>(args?: SelectSubset<T, servicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const services = await prisma.services.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends servicesUpdateManyArgs>(args: SelectSubset<T, servicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {servicesUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const services = await prisma.services.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const servicesWithIdOnly = await prisma.services.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends servicesUpdateManyAndReturnArgs>(args: SelectSubset<T, servicesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Services.
     * @param {servicesUpsertArgs} args - Arguments to update or create a Services.
     * @example
     * // Update or create a Services
     * const services = await prisma.services.upsert({
     *   create: {
     *     // ... data to create a Services
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Services we want to update
     *   }
     * })
     */
    upsert<T extends servicesUpsertArgs>(args: SelectSubset<T, servicesUpsertArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.services.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends servicesCountArgs>(
      args?: Subset<T, servicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServicesAggregateArgs>(args: Subset<T, ServicesAggregateArgs>): Prisma.PrismaPromise<GetServicesAggregateType<T>>

    /**
     * Group by Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends servicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: servicesGroupByArgs['orderBy'] }
        : { orderBy?: servicesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, servicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the services model
   */
  readonly fields: servicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for services.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__servicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    logs_services<T extends services$logs_servicesArgs<ExtArgs> = {}>(args?: Subset<T, services$logs_servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logs_servicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vehicles<T extends vehiclesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, vehiclesDefaultArgs<ExtArgs>>): Prisma__vehiclesClient<$Result.GetResult<Prisma.$vehiclesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the services model
   */
  interface servicesFieldRefs {
    readonly id: FieldRef<"services", 'Int'>
    readonly user_id: FieldRef<"services", 'Int'>
    readonly vehicle_id: FieldRef<"services", 'Int'>
    readonly kilometers: FieldRef<"services", 'Int'>
    readonly driver: FieldRef<"services", 'Int'>
    readonly first_firefighter: FieldRef<"services", 'String'>
    readonly second_firefighter: FieldRef<"services", 'String'>
    readonly third_firefighter: FieldRef<"services", 'String'>
    readonly type_service: FieldRef<"services", 'String'>
    readonly folio: FieldRef<"services", 'String'>
    readonly cologne: FieldRef<"services", 'String'>
    readonly stret: FieldRef<"services", 'String'>
    readonly crossing: FieldRef<"services", 'String'>
    readonly reporter: FieldRef<"services", 'String'>
    readonly phone_reporter: FieldRef<"services", 'String'>
    readonly close_type: FieldRef<"services", 'String'>
    readonly general_and_conclusion: FieldRef<"services", 'String'>
    readonly close_kilometers: FieldRef<"services", 'Int'>
    readonly kilometers_traveled: FieldRef<"services", 'Int'>
    readonly status: FieldRef<"services", 'String'>
  }
    

  // Custom InputTypes
  /**
   * services findUnique
   */
  export type servicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicesInclude<ExtArgs> | null
    /**
     * Filter, which services to fetch.
     */
    where: servicesWhereUniqueInput
  }

  /**
   * services findUniqueOrThrow
   */
  export type servicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicesInclude<ExtArgs> | null
    /**
     * Filter, which services to fetch.
     */
    where: servicesWhereUniqueInput
  }

  /**
   * services findFirst
   */
  export type servicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicesInclude<ExtArgs> | null
    /**
     * Filter, which services to fetch.
     */
    where?: servicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of services to fetch.
     */
    orderBy?: servicesOrderByWithRelationInput | servicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for services.
     */
    cursor?: servicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of services.
     */
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }

  /**
   * services findFirstOrThrow
   */
  export type servicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicesInclude<ExtArgs> | null
    /**
     * Filter, which services to fetch.
     */
    where?: servicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of services to fetch.
     */
    orderBy?: servicesOrderByWithRelationInput | servicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for services.
     */
    cursor?: servicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of services.
     */
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }

  /**
   * services findMany
   */
  export type servicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicesInclude<ExtArgs> | null
    /**
     * Filter, which services to fetch.
     */
    where?: servicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of services to fetch.
     */
    orderBy?: servicesOrderByWithRelationInput | servicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing services.
     */
    cursor?: servicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` services.
     */
    skip?: number
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }

  /**
   * services create
   */
  export type servicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicesInclude<ExtArgs> | null
    /**
     * The data needed to create a services.
     */
    data: XOR<servicesCreateInput, servicesUncheckedCreateInput>
  }

  /**
   * services createMany
   */
  export type servicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many services.
     */
    data: servicesCreateManyInput | servicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * services createManyAndReturn
   */
  export type servicesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * The data used to create many services.
     */
    data: servicesCreateManyInput | servicesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * services update
   */
  export type servicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicesInclude<ExtArgs> | null
    /**
     * The data needed to update a services.
     */
    data: XOR<servicesUpdateInput, servicesUncheckedUpdateInput>
    /**
     * Choose, which services to update.
     */
    where: servicesWhereUniqueInput
  }

  /**
   * services updateMany
   */
  export type servicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update services.
     */
    data: XOR<servicesUpdateManyMutationInput, servicesUncheckedUpdateManyInput>
    /**
     * Filter which services to update
     */
    where?: servicesWhereInput
    /**
     * Limit how many services to update.
     */
    limit?: number
  }

  /**
   * services updateManyAndReturn
   */
  export type servicesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * The data used to update services.
     */
    data: XOR<servicesUpdateManyMutationInput, servicesUncheckedUpdateManyInput>
    /**
     * Filter which services to update
     */
    where?: servicesWhereInput
    /**
     * Limit how many services to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * services upsert
   */
  export type servicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicesInclude<ExtArgs> | null
    /**
     * The filter to search for the services to update in case it exists.
     */
    where: servicesWhereUniqueInput
    /**
     * In case the services found by the `where` argument doesn't exist, create a new services with this data.
     */
    create: XOR<servicesCreateInput, servicesUncheckedCreateInput>
    /**
     * In case the services was found with the provided `where` argument, update it with this data.
     */
    update: XOR<servicesUpdateInput, servicesUncheckedUpdateInput>
  }

  /**
   * services delete
   */
  export type servicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicesInclude<ExtArgs> | null
    /**
     * Filter which services to delete.
     */
    where: servicesWhereUniqueInput
  }

  /**
   * services deleteMany
   */
  export type servicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which services to delete
     */
    where?: servicesWhereInput
    /**
     * Limit how many services to delete.
     */
    limit?: number
  }

  /**
   * services.logs_services
   */
  export type services$logs_servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs_services
     */
    select?: logs_servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs_services
     */
    omit?: logs_servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logs_servicesInclude<ExtArgs> | null
    where?: logs_servicesWhereInput
    orderBy?: logs_servicesOrderByWithRelationInput | logs_servicesOrderByWithRelationInput[]
    cursor?: logs_servicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Logs_servicesScalarFieldEnum | Logs_servicesScalarFieldEnum[]
  }

  /**
   * services without action
   */
  export type servicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicesInclude<ExtArgs> | null
  }


  /**
   * Model tipe_tool_equipment
   */

  export type AggregateTipe_tool_equipment = {
    _count: Tipe_tool_equipmentCountAggregateOutputType | null
    _avg: Tipe_tool_equipmentAvgAggregateOutputType | null
    _sum: Tipe_tool_equipmentSumAggregateOutputType | null
    _min: Tipe_tool_equipmentMinAggregateOutputType | null
    _max: Tipe_tool_equipmentMaxAggregateOutputType | null
  }

  export type Tipe_tool_equipmentAvgAggregateOutputType = {
    id: number | null
    on_inventory: number | null
  }

  export type Tipe_tool_equipmentSumAggregateOutputType = {
    id: number | null
    on_inventory: number | null
  }

  export type Tipe_tool_equipmentMinAggregateOutputType = {
    id: number | null
    cover_image: string | null
    name: string | null
    type: string | null
    on_inventory: number | null
  }

  export type Tipe_tool_equipmentMaxAggregateOutputType = {
    id: number | null
    cover_image: string | null
    name: string | null
    type: string | null
    on_inventory: number | null
  }

  export type Tipe_tool_equipmentCountAggregateOutputType = {
    id: number
    cover_image: number
    name: number
    type: number
    on_inventory: number
    _all: number
  }


  export type Tipe_tool_equipmentAvgAggregateInputType = {
    id?: true
    on_inventory?: true
  }

  export type Tipe_tool_equipmentSumAggregateInputType = {
    id?: true
    on_inventory?: true
  }

  export type Tipe_tool_equipmentMinAggregateInputType = {
    id?: true
    cover_image?: true
    name?: true
    type?: true
    on_inventory?: true
  }

  export type Tipe_tool_equipmentMaxAggregateInputType = {
    id?: true
    cover_image?: true
    name?: true
    type?: true
    on_inventory?: true
  }

  export type Tipe_tool_equipmentCountAggregateInputType = {
    id?: true
    cover_image?: true
    name?: true
    type?: true
    on_inventory?: true
    _all?: true
  }

  export type Tipe_tool_equipmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipe_tool_equipment to aggregate.
     */
    where?: tipe_tool_equipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipe_tool_equipments to fetch.
     */
    orderBy?: tipe_tool_equipmentOrderByWithRelationInput | tipe_tool_equipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tipe_tool_equipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipe_tool_equipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipe_tool_equipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tipe_tool_equipments
    **/
    _count?: true | Tipe_tool_equipmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tipe_tool_equipmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tipe_tool_equipmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tipe_tool_equipmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tipe_tool_equipmentMaxAggregateInputType
  }

  export type GetTipe_tool_equipmentAggregateType<T extends Tipe_tool_equipmentAggregateArgs> = {
        [P in keyof T & keyof AggregateTipe_tool_equipment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipe_tool_equipment[P]>
      : GetScalarType<T[P], AggregateTipe_tool_equipment[P]>
  }




  export type tipe_tool_equipmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tipe_tool_equipmentWhereInput
    orderBy?: tipe_tool_equipmentOrderByWithAggregationInput | tipe_tool_equipmentOrderByWithAggregationInput[]
    by: Tipe_tool_equipmentScalarFieldEnum[] | Tipe_tool_equipmentScalarFieldEnum
    having?: tipe_tool_equipmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tipe_tool_equipmentCountAggregateInputType | true
    _avg?: Tipe_tool_equipmentAvgAggregateInputType
    _sum?: Tipe_tool_equipmentSumAggregateInputType
    _min?: Tipe_tool_equipmentMinAggregateInputType
    _max?: Tipe_tool_equipmentMaxAggregateInputType
  }

  export type Tipe_tool_equipmentGroupByOutputType = {
    id: number
    cover_image: string | null
    name: string | null
    type: string | null
    on_inventory: number | null
    _count: Tipe_tool_equipmentCountAggregateOutputType | null
    _avg: Tipe_tool_equipmentAvgAggregateOutputType | null
    _sum: Tipe_tool_equipmentSumAggregateOutputType | null
    _min: Tipe_tool_equipmentMinAggregateOutputType | null
    _max: Tipe_tool_equipmentMaxAggregateOutputType | null
  }

  type GetTipe_tool_equipmentGroupByPayload<T extends tipe_tool_equipmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tipe_tool_equipmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tipe_tool_equipmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tipe_tool_equipmentGroupByOutputType[P]>
            : GetScalarType<T[P], Tipe_tool_equipmentGroupByOutputType[P]>
        }
      >
    >


  export type tipe_tool_equipmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cover_image?: boolean
    name?: boolean
    type?: boolean
    on_inventory?: boolean
  }, ExtArgs["result"]["tipe_tool_equipment"]>

  export type tipe_tool_equipmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cover_image?: boolean
    name?: boolean
    type?: boolean
    on_inventory?: boolean
  }, ExtArgs["result"]["tipe_tool_equipment"]>

  export type tipe_tool_equipmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cover_image?: boolean
    name?: boolean
    type?: boolean
    on_inventory?: boolean
  }, ExtArgs["result"]["tipe_tool_equipment"]>

  export type tipe_tool_equipmentSelectScalar = {
    id?: boolean
    cover_image?: boolean
    name?: boolean
    type?: boolean
    on_inventory?: boolean
  }

  export type tipe_tool_equipmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cover_image" | "name" | "type" | "on_inventory", ExtArgs["result"]["tipe_tool_equipment"]>

  export type $tipe_tool_equipmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tipe_tool_equipment"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cover_image: string | null
      name: string | null
      type: string | null
      on_inventory: number | null
    }, ExtArgs["result"]["tipe_tool_equipment"]>
    composites: {}
  }

  type tipe_tool_equipmentGetPayload<S extends boolean | null | undefined | tipe_tool_equipmentDefaultArgs> = $Result.GetResult<Prisma.$tipe_tool_equipmentPayload, S>

  type tipe_tool_equipmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tipe_tool_equipmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tipe_tool_equipmentCountAggregateInputType | true
    }

  export interface tipe_tool_equipmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tipe_tool_equipment'], meta: { name: 'tipe_tool_equipment' } }
    /**
     * Find zero or one Tipe_tool_equipment that matches the filter.
     * @param {tipe_tool_equipmentFindUniqueArgs} args - Arguments to find a Tipe_tool_equipment
     * @example
     * // Get one Tipe_tool_equipment
     * const tipe_tool_equipment = await prisma.tipe_tool_equipment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tipe_tool_equipmentFindUniqueArgs>(args: SelectSubset<T, tipe_tool_equipmentFindUniqueArgs<ExtArgs>>): Prisma__tipe_tool_equipmentClient<$Result.GetResult<Prisma.$tipe_tool_equipmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tipe_tool_equipment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tipe_tool_equipmentFindUniqueOrThrowArgs} args - Arguments to find a Tipe_tool_equipment
     * @example
     * // Get one Tipe_tool_equipment
     * const tipe_tool_equipment = await prisma.tipe_tool_equipment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tipe_tool_equipmentFindUniqueOrThrowArgs>(args: SelectSubset<T, tipe_tool_equipmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tipe_tool_equipmentClient<$Result.GetResult<Prisma.$tipe_tool_equipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipe_tool_equipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipe_tool_equipmentFindFirstArgs} args - Arguments to find a Tipe_tool_equipment
     * @example
     * // Get one Tipe_tool_equipment
     * const tipe_tool_equipment = await prisma.tipe_tool_equipment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tipe_tool_equipmentFindFirstArgs>(args?: SelectSubset<T, tipe_tool_equipmentFindFirstArgs<ExtArgs>>): Prisma__tipe_tool_equipmentClient<$Result.GetResult<Prisma.$tipe_tool_equipmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tipe_tool_equipment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipe_tool_equipmentFindFirstOrThrowArgs} args - Arguments to find a Tipe_tool_equipment
     * @example
     * // Get one Tipe_tool_equipment
     * const tipe_tool_equipment = await prisma.tipe_tool_equipment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tipe_tool_equipmentFindFirstOrThrowArgs>(args?: SelectSubset<T, tipe_tool_equipmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__tipe_tool_equipmentClient<$Result.GetResult<Prisma.$tipe_tool_equipmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tipe_tool_equipments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipe_tool_equipmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tipe_tool_equipments
     * const tipe_tool_equipments = await prisma.tipe_tool_equipment.findMany()
     * 
     * // Get first 10 Tipe_tool_equipments
     * const tipe_tool_equipments = await prisma.tipe_tool_equipment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipe_tool_equipmentWithIdOnly = await prisma.tipe_tool_equipment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tipe_tool_equipmentFindManyArgs>(args?: SelectSubset<T, tipe_tool_equipmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipe_tool_equipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tipe_tool_equipment.
     * @param {tipe_tool_equipmentCreateArgs} args - Arguments to create a Tipe_tool_equipment.
     * @example
     * // Create one Tipe_tool_equipment
     * const Tipe_tool_equipment = await prisma.tipe_tool_equipment.create({
     *   data: {
     *     // ... data to create a Tipe_tool_equipment
     *   }
     * })
     * 
     */
    create<T extends tipe_tool_equipmentCreateArgs>(args: SelectSubset<T, tipe_tool_equipmentCreateArgs<ExtArgs>>): Prisma__tipe_tool_equipmentClient<$Result.GetResult<Prisma.$tipe_tool_equipmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tipe_tool_equipments.
     * @param {tipe_tool_equipmentCreateManyArgs} args - Arguments to create many Tipe_tool_equipments.
     * @example
     * // Create many Tipe_tool_equipments
     * const tipe_tool_equipment = await prisma.tipe_tool_equipment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tipe_tool_equipmentCreateManyArgs>(args?: SelectSubset<T, tipe_tool_equipmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tipe_tool_equipments and returns the data saved in the database.
     * @param {tipe_tool_equipmentCreateManyAndReturnArgs} args - Arguments to create many Tipe_tool_equipments.
     * @example
     * // Create many Tipe_tool_equipments
     * const tipe_tool_equipment = await prisma.tipe_tool_equipment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tipe_tool_equipments and only return the `id`
     * const tipe_tool_equipmentWithIdOnly = await prisma.tipe_tool_equipment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tipe_tool_equipmentCreateManyAndReturnArgs>(args?: SelectSubset<T, tipe_tool_equipmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipe_tool_equipmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tipe_tool_equipment.
     * @param {tipe_tool_equipmentDeleteArgs} args - Arguments to delete one Tipe_tool_equipment.
     * @example
     * // Delete one Tipe_tool_equipment
     * const Tipe_tool_equipment = await prisma.tipe_tool_equipment.delete({
     *   where: {
     *     // ... filter to delete one Tipe_tool_equipment
     *   }
     * })
     * 
     */
    delete<T extends tipe_tool_equipmentDeleteArgs>(args: SelectSubset<T, tipe_tool_equipmentDeleteArgs<ExtArgs>>): Prisma__tipe_tool_equipmentClient<$Result.GetResult<Prisma.$tipe_tool_equipmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tipe_tool_equipment.
     * @param {tipe_tool_equipmentUpdateArgs} args - Arguments to update one Tipe_tool_equipment.
     * @example
     * // Update one Tipe_tool_equipment
     * const tipe_tool_equipment = await prisma.tipe_tool_equipment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tipe_tool_equipmentUpdateArgs>(args: SelectSubset<T, tipe_tool_equipmentUpdateArgs<ExtArgs>>): Prisma__tipe_tool_equipmentClient<$Result.GetResult<Prisma.$tipe_tool_equipmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tipe_tool_equipments.
     * @param {tipe_tool_equipmentDeleteManyArgs} args - Arguments to filter Tipe_tool_equipments to delete.
     * @example
     * // Delete a few Tipe_tool_equipments
     * const { count } = await prisma.tipe_tool_equipment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tipe_tool_equipmentDeleteManyArgs>(args?: SelectSubset<T, tipe_tool_equipmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipe_tool_equipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipe_tool_equipmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tipe_tool_equipments
     * const tipe_tool_equipment = await prisma.tipe_tool_equipment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tipe_tool_equipmentUpdateManyArgs>(args: SelectSubset<T, tipe_tool_equipmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tipe_tool_equipments and returns the data updated in the database.
     * @param {tipe_tool_equipmentUpdateManyAndReturnArgs} args - Arguments to update many Tipe_tool_equipments.
     * @example
     * // Update many Tipe_tool_equipments
     * const tipe_tool_equipment = await prisma.tipe_tool_equipment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tipe_tool_equipments and only return the `id`
     * const tipe_tool_equipmentWithIdOnly = await prisma.tipe_tool_equipment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tipe_tool_equipmentUpdateManyAndReturnArgs>(args: SelectSubset<T, tipe_tool_equipmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tipe_tool_equipmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tipe_tool_equipment.
     * @param {tipe_tool_equipmentUpsertArgs} args - Arguments to update or create a Tipe_tool_equipment.
     * @example
     * // Update or create a Tipe_tool_equipment
     * const tipe_tool_equipment = await prisma.tipe_tool_equipment.upsert({
     *   create: {
     *     // ... data to create a Tipe_tool_equipment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tipe_tool_equipment we want to update
     *   }
     * })
     */
    upsert<T extends tipe_tool_equipmentUpsertArgs>(args: SelectSubset<T, tipe_tool_equipmentUpsertArgs<ExtArgs>>): Prisma__tipe_tool_equipmentClient<$Result.GetResult<Prisma.$tipe_tool_equipmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tipe_tool_equipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipe_tool_equipmentCountArgs} args - Arguments to filter Tipe_tool_equipments to count.
     * @example
     * // Count the number of Tipe_tool_equipments
     * const count = await prisma.tipe_tool_equipment.count({
     *   where: {
     *     // ... the filter for the Tipe_tool_equipments we want to count
     *   }
     * })
    **/
    count<T extends tipe_tool_equipmentCountArgs>(
      args?: Subset<T, tipe_tool_equipmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tipe_tool_equipmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tipe_tool_equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tipe_tool_equipmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tipe_tool_equipmentAggregateArgs>(args: Subset<T, Tipe_tool_equipmentAggregateArgs>): Prisma.PrismaPromise<GetTipe_tool_equipmentAggregateType<T>>

    /**
     * Group by Tipe_tool_equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tipe_tool_equipmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tipe_tool_equipmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tipe_tool_equipmentGroupByArgs['orderBy'] }
        : { orderBy?: tipe_tool_equipmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tipe_tool_equipmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipe_tool_equipmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tipe_tool_equipment model
   */
  readonly fields: tipe_tool_equipmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tipe_tool_equipment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tipe_tool_equipmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tipe_tool_equipment model
   */
  interface tipe_tool_equipmentFieldRefs {
    readonly id: FieldRef<"tipe_tool_equipment", 'Int'>
    readonly cover_image: FieldRef<"tipe_tool_equipment", 'String'>
    readonly name: FieldRef<"tipe_tool_equipment", 'String'>
    readonly type: FieldRef<"tipe_tool_equipment", 'String'>
    readonly on_inventory: FieldRef<"tipe_tool_equipment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tipe_tool_equipment findUnique
   */
  export type tipe_tool_equipmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipe_tool_equipment
     */
    select?: tipe_tool_equipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipe_tool_equipment
     */
    omit?: tipe_tool_equipmentOmit<ExtArgs> | null
    /**
     * Filter, which tipe_tool_equipment to fetch.
     */
    where: tipe_tool_equipmentWhereUniqueInput
  }

  /**
   * tipe_tool_equipment findUniqueOrThrow
   */
  export type tipe_tool_equipmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipe_tool_equipment
     */
    select?: tipe_tool_equipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipe_tool_equipment
     */
    omit?: tipe_tool_equipmentOmit<ExtArgs> | null
    /**
     * Filter, which tipe_tool_equipment to fetch.
     */
    where: tipe_tool_equipmentWhereUniqueInput
  }

  /**
   * tipe_tool_equipment findFirst
   */
  export type tipe_tool_equipmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipe_tool_equipment
     */
    select?: tipe_tool_equipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipe_tool_equipment
     */
    omit?: tipe_tool_equipmentOmit<ExtArgs> | null
    /**
     * Filter, which tipe_tool_equipment to fetch.
     */
    where?: tipe_tool_equipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipe_tool_equipments to fetch.
     */
    orderBy?: tipe_tool_equipmentOrderByWithRelationInput | tipe_tool_equipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipe_tool_equipments.
     */
    cursor?: tipe_tool_equipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipe_tool_equipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipe_tool_equipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipe_tool_equipments.
     */
    distinct?: Tipe_tool_equipmentScalarFieldEnum | Tipe_tool_equipmentScalarFieldEnum[]
  }

  /**
   * tipe_tool_equipment findFirstOrThrow
   */
  export type tipe_tool_equipmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipe_tool_equipment
     */
    select?: tipe_tool_equipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipe_tool_equipment
     */
    omit?: tipe_tool_equipmentOmit<ExtArgs> | null
    /**
     * Filter, which tipe_tool_equipment to fetch.
     */
    where?: tipe_tool_equipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipe_tool_equipments to fetch.
     */
    orderBy?: tipe_tool_equipmentOrderByWithRelationInput | tipe_tool_equipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tipe_tool_equipments.
     */
    cursor?: tipe_tool_equipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipe_tool_equipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipe_tool_equipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tipe_tool_equipments.
     */
    distinct?: Tipe_tool_equipmentScalarFieldEnum | Tipe_tool_equipmentScalarFieldEnum[]
  }

  /**
   * tipe_tool_equipment findMany
   */
  export type tipe_tool_equipmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipe_tool_equipment
     */
    select?: tipe_tool_equipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipe_tool_equipment
     */
    omit?: tipe_tool_equipmentOmit<ExtArgs> | null
    /**
     * Filter, which tipe_tool_equipments to fetch.
     */
    where?: tipe_tool_equipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tipe_tool_equipments to fetch.
     */
    orderBy?: tipe_tool_equipmentOrderByWithRelationInput | tipe_tool_equipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tipe_tool_equipments.
     */
    cursor?: tipe_tool_equipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tipe_tool_equipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tipe_tool_equipments.
     */
    skip?: number
    distinct?: Tipe_tool_equipmentScalarFieldEnum | Tipe_tool_equipmentScalarFieldEnum[]
  }

  /**
   * tipe_tool_equipment create
   */
  export type tipe_tool_equipmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipe_tool_equipment
     */
    select?: tipe_tool_equipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipe_tool_equipment
     */
    omit?: tipe_tool_equipmentOmit<ExtArgs> | null
    /**
     * The data needed to create a tipe_tool_equipment.
     */
    data?: XOR<tipe_tool_equipmentCreateInput, tipe_tool_equipmentUncheckedCreateInput>
  }

  /**
   * tipe_tool_equipment createMany
   */
  export type tipe_tool_equipmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tipe_tool_equipments.
     */
    data: tipe_tool_equipmentCreateManyInput | tipe_tool_equipmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tipe_tool_equipment createManyAndReturn
   */
  export type tipe_tool_equipmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipe_tool_equipment
     */
    select?: tipe_tool_equipmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tipe_tool_equipment
     */
    omit?: tipe_tool_equipmentOmit<ExtArgs> | null
    /**
     * The data used to create many tipe_tool_equipments.
     */
    data: tipe_tool_equipmentCreateManyInput | tipe_tool_equipmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tipe_tool_equipment update
   */
  export type tipe_tool_equipmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipe_tool_equipment
     */
    select?: tipe_tool_equipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipe_tool_equipment
     */
    omit?: tipe_tool_equipmentOmit<ExtArgs> | null
    /**
     * The data needed to update a tipe_tool_equipment.
     */
    data: XOR<tipe_tool_equipmentUpdateInput, tipe_tool_equipmentUncheckedUpdateInput>
    /**
     * Choose, which tipe_tool_equipment to update.
     */
    where: tipe_tool_equipmentWhereUniqueInput
  }

  /**
   * tipe_tool_equipment updateMany
   */
  export type tipe_tool_equipmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tipe_tool_equipments.
     */
    data: XOR<tipe_tool_equipmentUpdateManyMutationInput, tipe_tool_equipmentUncheckedUpdateManyInput>
    /**
     * Filter which tipe_tool_equipments to update
     */
    where?: tipe_tool_equipmentWhereInput
    /**
     * Limit how many tipe_tool_equipments to update.
     */
    limit?: number
  }

  /**
   * tipe_tool_equipment updateManyAndReturn
   */
  export type tipe_tool_equipmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipe_tool_equipment
     */
    select?: tipe_tool_equipmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tipe_tool_equipment
     */
    omit?: tipe_tool_equipmentOmit<ExtArgs> | null
    /**
     * The data used to update tipe_tool_equipments.
     */
    data: XOR<tipe_tool_equipmentUpdateManyMutationInput, tipe_tool_equipmentUncheckedUpdateManyInput>
    /**
     * Filter which tipe_tool_equipments to update
     */
    where?: tipe_tool_equipmentWhereInput
    /**
     * Limit how many tipe_tool_equipments to update.
     */
    limit?: number
  }

  /**
   * tipe_tool_equipment upsert
   */
  export type tipe_tool_equipmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipe_tool_equipment
     */
    select?: tipe_tool_equipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipe_tool_equipment
     */
    omit?: tipe_tool_equipmentOmit<ExtArgs> | null
    /**
     * The filter to search for the tipe_tool_equipment to update in case it exists.
     */
    where: tipe_tool_equipmentWhereUniqueInput
    /**
     * In case the tipe_tool_equipment found by the `where` argument doesn't exist, create a new tipe_tool_equipment with this data.
     */
    create: XOR<tipe_tool_equipmentCreateInput, tipe_tool_equipmentUncheckedCreateInput>
    /**
     * In case the tipe_tool_equipment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tipe_tool_equipmentUpdateInput, tipe_tool_equipmentUncheckedUpdateInput>
  }

  /**
   * tipe_tool_equipment delete
   */
  export type tipe_tool_equipmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipe_tool_equipment
     */
    select?: tipe_tool_equipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipe_tool_equipment
     */
    omit?: tipe_tool_equipmentOmit<ExtArgs> | null
    /**
     * Filter which tipe_tool_equipment to delete.
     */
    where: tipe_tool_equipmentWhereUniqueInput
  }

  /**
   * tipe_tool_equipment deleteMany
   */
  export type tipe_tool_equipmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tipe_tool_equipments to delete
     */
    where?: tipe_tool_equipmentWhereInput
    /**
     * Limit how many tipe_tool_equipments to delete.
     */
    limit?: number
  }

  /**
   * tipe_tool_equipment without action
   */
  export type tipe_tool_equipmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tipe_tool_equipment
     */
    select?: tipe_tool_equipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tipe_tool_equipment
     */
    omit?: tipe_tool_equipmentOmit<ExtArgs> | null
  }


  /**
   * Model type_to_vehicle
   */

  export type AggregateType_to_vehicle = {
    _count: Type_to_vehicleCountAggregateOutputType | null
    _avg: Type_to_vehicleAvgAggregateOutputType | null
    _sum: Type_to_vehicleSumAggregateOutputType | null
    _min: Type_to_vehicleMinAggregateOutputType | null
    _max: Type_to_vehicleMaxAggregateOutputType | null
  }

  export type Type_to_vehicleAvgAggregateOutputType = {
    id: number | null
    operative: number | null
    in_operative: number | null
  }

  export type Type_to_vehicleSumAggregateOutputType = {
    id: number | null
    operative: number | null
    in_operative: number | null
  }

  export type Type_to_vehicleMinAggregateOutputType = {
    id: number | null
    type: string | null
    image: string | null
    operative: number | null
    in_operative: number | null
  }

  export type Type_to_vehicleMaxAggregateOutputType = {
    id: number | null
    type: string | null
    image: string | null
    operative: number | null
    in_operative: number | null
  }

  export type Type_to_vehicleCountAggregateOutputType = {
    id: number
    type: number
    image: number
    operative: number
    in_operative: number
    _all: number
  }


  export type Type_to_vehicleAvgAggregateInputType = {
    id?: true
    operative?: true
    in_operative?: true
  }

  export type Type_to_vehicleSumAggregateInputType = {
    id?: true
    operative?: true
    in_operative?: true
  }

  export type Type_to_vehicleMinAggregateInputType = {
    id?: true
    type?: true
    image?: true
    operative?: true
    in_operative?: true
  }

  export type Type_to_vehicleMaxAggregateInputType = {
    id?: true
    type?: true
    image?: true
    operative?: true
    in_operative?: true
  }

  export type Type_to_vehicleCountAggregateInputType = {
    id?: true
    type?: true
    image?: true
    operative?: true
    in_operative?: true
    _all?: true
  }

  export type Type_to_vehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which type_to_vehicle to aggregate.
     */
    where?: type_to_vehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of type_to_vehicles to fetch.
     */
    orderBy?: type_to_vehicleOrderByWithRelationInput | type_to_vehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: type_to_vehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` type_to_vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` type_to_vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned type_to_vehicles
    **/
    _count?: true | Type_to_vehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Type_to_vehicleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Type_to_vehicleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Type_to_vehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Type_to_vehicleMaxAggregateInputType
  }

  export type GetType_to_vehicleAggregateType<T extends Type_to_vehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateType_to_vehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateType_to_vehicle[P]>
      : GetScalarType<T[P], AggregateType_to_vehicle[P]>
  }




  export type type_to_vehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: type_to_vehicleWhereInput
    orderBy?: type_to_vehicleOrderByWithAggregationInput | type_to_vehicleOrderByWithAggregationInput[]
    by: Type_to_vehicleScalarFieldEnum[] | Type_to_vehicleScalarFieldEnum
    having?: type_to_vehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Type_to_vehicleCountAggregateInputType | true
    _avg?: Type_to_vehicleAvgAggregateInputType
    _sum?: Type_to_vehicleSumAggregateInputType
    _min?: Type_to_vehicleMinAggregateInputType
    _max?: Type_to_vehicleMaxAggregateInputType
  }

  export type Type_to_vehicleGroupByOutputType = {
    id: number
    type: string | null
    image: string | null
    operative: number | null
    in_operative: number | null
    _count: Type_to_vehicleCountAggregateOutputType | null
    _avg: Type_to_vehicleAvgAggregateOutputType | null
    _sum: Type_to_vehicleSumAggregateOutputType | null
    _min: Type_to_vehicleMinAggregateOutputType | null
    _max: Type_to_vehicleMaxAggregateOutputType | null
  }

  type GetType_to_vehicleGroupByPayload<T extends type_to_vehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Type_to_vehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Type_to_vehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Type_to_vehicleGroupByOutputType[P]>
            : GetScalarType<T[P], Type_to_vehicleGroupByOutputType[P]>
        }
      >
    >


  export type type_to_vehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    image?: boolean
    operative?: boolean
    in_operative?: boolean
  }, ExtArgs["result"]["type_to_vehicle"]>

  export type type_to_vehicleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    image?: boolean
    operative?: boolean
    in_operative?: boolean
  }, ExtArgs["result"]["type_to_vehicle"]>

  export type type_to_vehicleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    image?: boolean
    operative?: boolean
    in_operative?: boolean
  }, ExtArgs["result"]["type_to_vehicle"]>

  export type type_to_vehicleSelectScalar = {
    id?: boolean
    type?: boolean
    image?: boolean
    operative?: boolean
    in_operative?: boolean
  }

  export type type_to_vehicleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "image" | "operative" | "in_operative", ExtArgs["result"]["type_to_vehicle"]>

  export type $type_to_vehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "type_to_vehicle"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string | null
      image: string | null
      operative: number | null
      in_operative: number | null
    }, ExtArgs["result"]["type_to_vehicle"]>
    composites: {}
  }

  type type_to_vehicleGetPayload<S extends boolean | null | undefined | type_to_vehicleDefaultArgs> = $Result.GetResult<Prisma.$type_to_vehiclePayload, S>

  type type_to_vehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<type_to_vehicleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Type_to_vehicleCountAggregateInputType | true
    }

  export interface type_to_vehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['type_to_vehicle'], meta: { name: 'type_to_vehicle' } }
    /**
     * Find zero or one Type_to_vehicle that matches the filter.
     * @param {type_to_vehicleFindUniqueArgs} args - Arguments to find a Type_to_vehicle
     * @example
     * // Get one Type_to_vehicle
     * const type_to_vehicle = await prisma.type_to_vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends type_to_vehicleFindUniqueArgs>(args: SelectSubset<T, type_to_vehicleFindUniqueArgs<ExtArgs>>): Prisma__type_to_vehicleClient<$Result.GetResult<Prisma.$type_to_vehiclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Type_to_vehicle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {type_to_vehicleFindUniqueOrThrowArgs} args - Arguments to find a Type_to_vehicle
     * @example
     * // Get one Type_to_vehicle
     * const type_to_vehicle = await prisma.type_to_vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends type_to_vehicleFindUniqueOrThrowArgs>(args: SelectSubset<T, type_to_vehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__type_to_vehicleClient<$Result.GetResult<Prisma.$type_to_vehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Type_to_vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {type_to_vehicleFindFirstArgs} args - Arguments to find a Type_to_vehicle
     * @example
     * // Get one Type_to_vehicle
     * const type_to_vehicle = await prisma.type_to_vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends type_to_vehicleFindFirstArgs>(args?: SelectSubset<T, type_to_vehicleFindFirstArgs<ExtArgs>>): Prisma__type_to_vehicleClient<$Result.GetResult<Prisma.$type_to_vehiclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Type_to_vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {type_to_vehicleFindFirstOrThrowArgs} args - Arguments to find a Type_to_vehicle
     * @example
     * // Get one Type_to_vehicle
     * const type_to_vehicle = await prisma.type_to_vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends type_to_vehicleFindFirstOrThrowArgs>(args?: SelectSubset<T, type_to_vehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma__type_to_vehicleClient<$Result.GetResult<Prisma.$type_to_vehiclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Type_to_vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {type_to_vehicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Type_to_vehicles
     * const type_to_vehicles = await prisma.type_to_vehicle.findMany()
     * 
     * // Get first 10 Type_to_vehicles
     * const type_to_vehicles = await prisma.type_to_vehicle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const type_to_vehicleWithIdOnly = await prisma.type_to_vehicle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends type_to_vehicleFindManyArgs>(args?: SelectSubset<T, type_to_vehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$type_to_vehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Type_to_vehicle.
     * @param {type_to_vehicleCreateArgs} args - Arguments to create a Type_to_vehicle.
     * @example
     * // Create one Type_to_vehicle
     * const Type_to_vehicle = await prisma.type_to_vehicle.create({
     *   data: {
     *     // ... data to create a Type_to_vehicle
     *   }
     * })
     * 
     */
    create<T extends type_to_vehicleCreateArgs>(args: SelectSubset<T, type_to_vehicleCreateArgs<ExtArgs>>): Prisma__type_to_vehicleClient<$Result.GetResult<Prisma.$type_to_vehiclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Type_to_vehicles.
     * @param {type_to_vehicleCreateManyArgs} args - Arguments to create many Type_to_vehicles.
     * @example
     * // Create many Type_to_vehicles
     * const type_to_vehicle = await prisma.type_to_vehicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends type_to_vehicleCreateManyArgs>(args?: SelectSubset<T, type_to_vehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Type_to_vehicles and returns the data saved in the database.
     * @param {type_to_vehicleCreateManyAndReturnArgs} args - Arguments to create many Type_to_vehicles.
     * @example
     * // Create many Type_to_vehicles
     * const type_to_vehicle = await prisma.type_to_vehicle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Type_to_vehicles and only return the `id`
     * const type_to_vehicleWithIdOnly = await prisma.type_to_vehicle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends type_to_vehicleCreateManyAndReturnArgs>(args?: SelectSubset<T, type_to_vehicleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$type_to_vehiclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Type_to_vehicle.
     * @param {type_to_vehicleDeleteArgs} args - Arguments to delete one Type_to_vehicle.
     * @example
     * // Delete one Type_to_vehicle
     * const Type_to_vehicle = await prisma.type_to_vehicle.delete({
     *   where: {
     *     // ... filter to delete one Type_to_vehicle
     *   }
     * })
     * 
     */
    delete<T extends type_to_vehicleDeleteArgs>(args: SelectSubset<T, type_to_vehicleDeleteArgs<ExtArgs>>): Prisma__type_to_vehicleClient<$Result.GetResult<Prisma.$type_to_vehiclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Type_to_vehicle.
     * @param {type_to_vehicleUpdateArgs} args - Arguments to update one Type_to_vehicle.
     * @example
     * // Update one Type_to_vehicle
     * const type_to_vehicle = await prisma.type_to_vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends type_to_vehicleUpdateArgs>(args: SelectSubset<T, type_to_vehicleUpdateArgs<ExtArgs>>): Prisma__type_to_vehicleClient<$Result.GetResult<Prisma.$type_to_vehiclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Type_to_vehicles.
     * @param {type_to_vehicleDeleteManyArgs} args - Arguments to filter Type_to_vehicles to delete.
     * @example
     * // Delete a few Type_to_vehicles
     * const { count } = await prisma.type_to_vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends type_to_vehicleDeleteManyArgs>(args?: SelectSubset<T, type_to_vehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Type_to_vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {type_to_vehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Type_to_vehicles
     * const type_to_vehicle = await prisma.type_to_vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends type_to_vehicleUpdateManyArgs>(args: SelectSubset<T, type_to_vehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Type_to_vehicles and returns the data updated in the database.
     * @param {type_to_vehicleUpdateManyAndReturnArgs} args - Arguments to update many Type_to_vehicles.
     * @example
     * // Update many Type_to_vehicles
     * const type_to_vehicle = await prisma.type_to_vehicle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Type_to_vehicles and only return the `id`
     * const type_to_vehicleWithIdOnly = await prisma.type_to_vehicle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends type_to_vehicleUpdateManyAndReturnArgs>(args: SelectSubset<T, type_to_vehicleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$type_to_vehiclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Type_to_vehicle.
     * @param {type_to_vehicleUpsertArgs} args - Arguments to update or create a Type_to_vehicle.
     * @example
     * // Update or create a Type_to_vehicle
     * const type_to_vehicle = await prisma.type_to_vehicle.upsert({
     *   create: {
     *     // ... data to create a Type_to_vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Type_to_vehicle we want to update
     *   }
     * })
     */
    upsert<T extends type_to_vehicleUpsertArgs>(args: SelectSubset<T, type_to_vehicleUpsertArgs<ExtArgs>>): Prisma__type_to_vehicleClient<$Result.GetResult<Prisma.$type_to_vehiclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Type_to_vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {type_to_vehicleCountArgs} args - Arguments to filter Type_to_vehicles to count.
     * @example
     * // Count the number of Type_to_vehicles
     * const count = await prisma.type_to_vehicle.count({
     *   where: {
     *     // ... the filter for the Type_to_vehicles we want to count
     *   }
     * })
    **/
    count<T extends type_to_vehicleCountArgs>(
      args?: Subset<T, type_to_vehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Type_to_vehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Type_to_vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Type_to_vehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Type_to_vehicleAggregateArgs>(args: Subset<T, Type_to_vehicleAggregateArgs>): Prisma.PrismaPromise<GetType_to_vehicleAggregateType<T>>

    /**
     * Group by Type_to_vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {type_to_vehicleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends type_to_vehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: type_to_vehicleGroupByArgs['orderBy'] }
        : { orderBy?: type_to_vehicleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, type_to_vehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetType_to_vehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the type_to_vehicle model
   */
  readonly fields: type_to_vehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for type_to_vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__type_to_vehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the type_to_vehicle model
   */
  interface type_to_vehicleFieldRefs {
    readonly id: FieldRef<"type_to_vehicle", 'Int'>
    readonly type: FieldRef<"type_to_vehicle", 'String'>
    readonly image: FieldRef<"type_to_vehicle", 'String'>
    readonly operative: FieldRef<"type_to_vehicle", 'Int'>
    readonly in_operative: FieldRef<"type_to_vehicle", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * type_to_vehicle findUnique
   */
  export type type_to_vehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_to_vehicle
     */
    select?: type_to_vehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_to_vehicle
     */
    omit?: type_to_vehicleOmit<ExtArgs> | null
    /**
     * Filter, which type_to_vehicle to fetch.
     */
    where: type_to_vehicleWhereUniqueInput
  }

  /**
   * type_to_vehicle findUniqueOrThrow
   */
  export type type_to_vehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_to_vehicle
     */
    select?: type_to_vehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_to_vehicle
     */
    omit?: type_to_vehicleOmit<ExtArgs> | null
    /**
     * Filter, which type_to_vehicle to fetch.
     */
    where: type_to_vehicleWhereUniqueInput
  }

  /**
   * type_to_vehicle findFirst
   */
  export type type_to_vehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_to_vehicle
     */
    select?: type_to_vehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_to_vehicle
     */
    omit?: type_to_vehicleOmit<ExtArgs> | null
    /**
     * Filter, which type_to_vehicle to fetch.
     */
    where?: type_to_vehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of type_to_vehicles to fetch.
     */
    orderBy?: type_to_vehicleOrderByWithRelationInput | type_to_vehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for type_to_vehicles.
     */
    cursor?: type_to_vehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` type_to_vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` type_to_vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of type_to_vehicles.
     */
    distinct?: Type_to_vehicleScalarFieldEnum | Type_to_vehicleScalarFieldEnum[]
  }

  /**
   * type_to_vehicle findFirstOrThrow
   */
  export type type_to_vehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_to_vehicle
     */
    select?: type_to_vehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_to_vehicle
     */
    omit?: type_to_vehicleOmit<ExtArgs> | null
    /**
     * Filter, which type_to_vehicle to fetch.
     */
    where?: type_to_vehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of type_to_vehicles to fetch.
     */
    orderBy?: type_to_vehicleOrderByWithRelationInput | type_to_vehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for type_to_vehicles.
     */
    cursor?: type_to_vehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` type_to_vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` type_to_vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of type_to_vehicles.
     */
    distinct?: Type_to_vehicleScalarFieldEnum | Type_to_vehicleScalarFieldEnum[]
  }

  /**
   * type_to_vehicle findMany
   */
  export type type_to_vehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_to_vehicle
     */
    select?: type_to_vehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_to_vehicle
     */
    omit?: type_to_vehicleOmit<ExtArgs> | null
    /**
     * Filter, which type_to_vehicles to fetch.
     */
    where?: type_to_vehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of type_to_vehicles to fetch.
     */
    orderBy?: type_to_vehicleOrderByWithRelationInput | type_to_vehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing type_to_vehicles.
     */
    cursor?: type_to_vehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` type_to_vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` type_to_vehicles.
     */
    skip?: number
    distinct?: Type_to_vehicleScalarFieldEnum | Type_to_vehicleScalarFieldEnum[]
  }

  /**
   * type_to_vehicle create
   */
  export type type_to_vehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_to_vehicle
     */
    select?: type_to_vehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_to_vehicle
     */
    omit?: type_to_vehicleOmit<ExtArgs> | null
    /**
     * The data needed to create a type_to_vehicle.
     */
    data?: XOR<type_to_vehicleCreateInput, type_to_vehicleUncheckedCreateInput>
  }

  /**
   * type_to_vehicle createMany
   */
  export type type_to_vehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many type_to_vehicles.
     */
    data: type_to_vehicleCreateManyInput | type_to_vehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * type_to_vehicle createManyAndReturn
   */
  export type type_to_vehicleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_to_vehicle
     */
    select?: type_to_vehicleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the type_to_vehicle
     */
    omit?: type_to_vehicleOmit<ExtArgs> | null
    /**
     * The data used to create many type_to_vehicles.
     */
    data: type_to_vehicleCreateManyInput | type_to_vehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * type_to_vehicle update
   */
  export type type_to_vehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_to_vehicle
     */
    select?: type_to_vehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_to_vehicle
     */
    omit?: type_to_vehicleOmit<ExtArgs> | null
    /**
     * The data needed to update a type_to_vehicle.
     */
    data: XOR<type_to_vehicleUpdateInput, type_to_vehicleUncheckedUpdateInput>
    /**
     * Choose, which type_to_vehicle to update.
     */
    where: type_to_vehicleWhereUniqueInput
  }

  /**
   * type_to_vehicle updateMany
   */
  export type type_to_vehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update type_to_vehicles.
     */
    data: XOR<type_to_vehicleUpdateManyMutationInput, type_to_vehicleUncheckedUpdateManyInput>
    /**
     * Filter which type_to_vehicles to update
     */
    where?: type_to_vehicleWhereInput
    /**
     * Limit how many type_to_vehicles to update.
     */
    limit?: number
  }

  /**
   * type_to_vehicle updateManyAndReturn
   */
  export type type_to_vehicleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_to_vehicle
     */
    select?: type_to_vehicleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the type_to_vehicle
     */
    omit?: type_to_vehicleOmit<ExtArgs> | null
    /**
     * The data used to update type_to_vehicles.
     */
    data: XOR<type_to_vehicleUpdateManyMutationInput, type_to_vehicleUncheckedUpdateManyInput>
    /**
     * Filter which type_to_vehicles to update
     */
    where?: type_to_vehicleWhereInput
    /**
     * Limit how many type_to_vehicles to update.
     */
    limit?: number
  }

  /**
   * type_to_vehicle upsert
   */
  export type type_to_vehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_to_vehicle
     */
    select?: type_to_vehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_to_vehicle
     */
    omit?: type_to_vehicleOmit<ExtArgs> | null
    /**
     * The filter to search for the type_to_vehicle to update in case it exists.
     */
    where: type_to_vehicleWhereUniqueInput
    /**
     * In case the type_to_vehicle found by the `where` argument doesn't exist, create a new type_to_vehicle with this data.
     */
    create: XOR<type_to_vehicleCreateInput, type_to_vehicleUncheckedCreateInput>
    /**
     * In case the type_to_vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<type_to_vehicleUpdateInput, type_to_vehicleUncheckedUpdateInput>
  }

  /**
   * type_to_vehicle delete
   */
  export type type_to_vehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_to_vehicle
     */
    select?: type_to_vehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_to_vehicle
     */
    omit?: type_to_vehicleOmit<ExtArgs> | null
    /**
     * Filter which type_to_vehicle to delete.
     */
    where: type_to_vehicleWhereUniqueInput
  }

  /**
   * type_to_vehicle deleteMany
   */
  export type type_to_vehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which type_to_vehicles to delete
     */
    where?: type_to_vehicleWhereInput
    /**
     * Limit how many type_to_vehicles to delete.
     */
    limit?: number
  }

  /**
   * type_to_vehicle without action
   */
  export type type_to_vehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type_to_vehicle
     */
    select?: type_to_vehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the type_to_vehicle
     */
    omit?: type_to_vehicleOmit<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    first_name: string | null
    second_name: string | null
    last_name: string | null
    second_last_name: string | null
    status_now: string | null
    blood_group: string | null
    blood_rh_factor: string | null
    social_security_number: string | null
    type_position: string | null
    position: string | null
    email: string | null
    phone: string | null
    employee_number: string | null
    work_shift: string | null
    birthdate: Date | null
    start_date: Date | null
    emergency_contact_name: string | null
    emergency_contact_phone: string | null
    emergency_contact_phone_alt: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    first_name: string | null
    second_name: string | null
    last_name: string | null
    second_last_name: string | null
    status_now: string | null
    blood_group: string | null
    blood_rh_factor: string | null
    social_security_number: string | null
    type_position: string | null
    position: string | null
    email: string | null
    phone: string | null
    employee_number: string | null
    work_shift: string | null
    birthdate: Date | null
    start_date: Date | null
    emergency_contact_name: string | null
    emergency_contact_phone: string | null
    emergency_contact_phone_alt: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    first_name: number
    second_name: number
    last_name: number
    second_last_name: number
    status_now: number
    blood_group: number
    blood_rh_factor: number
    social_security_number: number
    type_position: number
    position: number
    email: number
    phone: number
    employee_number: number
    work_shift: number
    birthdate: number
    start_date: number
    emergency_contact_name: number
    emergency_contact_phone: number
    emergency_contact_phone_alt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    first_name?: true
    second_name?: true
    last_name?: true
    second_last_name?: true
    status_now?: true
    blood_group?: true
    blood_rh_factor?: true
    social_security_number?: true
    type_position?: true
    position?: true
    email?: true
    phone?: true
    employee_number?: true
    work_shift?: true
    birthdate?: true
    start_date?: true
    emergency_contact_name?: true
    emergency_contact_phone?: true
    emergency_contact_phone_alt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    first_name?: true
    second_name?: true
    last_name?: true
    second_last_name?: true
    status_now?: true
    blood_group?: true
    blood_rh_factor?: true
    social_security_number?: true
    type_position?: true
    position?: true
    email?: true
    phone?: true
    employee_number?: true
    work_shift?: true
    birthdate?: true
    start_date?: true
    emergency_contact_name?: true
    emergency_contact_phone?: true
    emergency_contact_phone_alt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    first_name?: true
    second_name?: true
    last_name?: true
    second_last_name?: true
    status_now?: true
    blood_group?: true
    blood_rh_factor?: true
    social_security_number?: true
    type_position?: true
    position?: true
    email?: true
    phone?: true
    employee_number?: true
    work_shift?: true
    birthdate?: true
    start_date?: true
    emergency_contact_name?: true
    emergency_contact_phone?: true
    emergency_contact_phone_alt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    first_name: string
    second_name: string | null
    last_name: string
    second_last_name: string | null
    status_now: string | null
    blood_group: string | null
    blood_rh_factor: string | null
    social_security_number: string | null
    type_position: string | null
    position: string
    email: string
    phone: string
    employee_number: string
    work_shift: string
    birthdate: Date
    start_date: Date
    emergency_contact_name: string
    emergency_contact_phone: string
    emergency_contact_phone_alt: string | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    second_name?: boolean
    last_name?: boolean
    second_last_name?: boolean
    status_now?: boolean
    blood_group?: boolean
    blood_rh_factor?: boolean
    social_security_number?: boolean
    type_position?: boolean
    position?: boolean
    email?: boolean
    phone?: boolean
    employee_number?: boolean
    work_shift?: boolean
    birthdate?: boolean
    start_date?: boolean
    emergency_contact_name?: boolean
    emergency_contact_phone?: boolean
    emergency_contact_phone_alt?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    second_name?: boolean
    last_name?: boolean
    second_last_name?: boolean
    status_now?: boolean
    blood_group?: boolean
    blood_rh_factor?: boolean
    social_security_number?: boolean
    type_position?: boolean
    position?: boolean
    email?: boolean
    phone?: boolean
    employee_number?: boolean
    work_shift?: boolean
    birthdate?: boolean
    start_date?: boolean
    emergency_contact_name?: boolean
    emergency_contact_phone?: boolean
    emergency_contact_phone_alt?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    second_name?: boolean
    last_name?: boolean
    second_last_name?: boolean
    status_now?: boolean
    blood_group?: boolean
    blood_rh_factor?: boolean
    social_security_number?: boolean
    type_position?: boolean
    position?: boolean
    email?: boolean
    phone?: boolean
    employee_number?: boolean
    work_shift?: boolean
    birthdate?: boolean
    start_date?: boolean
    emergency_contact_name?: boolean
    emergency_contact_phone?: boolean
    emergency_contact_phone_alt?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    first_name?: boolean
    second_name?: boolean
    last_name?: boolean
    second_last_name?: boolean
    status_now?: boolean
    blood_group?: boolean
    blood_rh_factor?: boolean
    social_security_number?: boolean
    type_position?: boolean
    position?: boolean
    email?: boolean
    phone?: boolean
    employee_number?: boolean
    work_shift?: boolean
    birthdate?: boolean
    start_date?: boolean
    emergency_contact_name?: boolean
    emergency_contact_phone?: boolean
    emergency_contact_phone_alt?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "second_name" | "last_name" | "second_last_name" | "status_now" | "blood_group" | "blood_rh_factor" | "social_security_number" | "type_position" | "position" | "email" | "phone" | "employee_number" | "work_shift" | "birthdate" | "start_date" | "emergency_contact_name" | "emergency_contact_phone" | "emergency_contact_phone_alt", ExtArgs["result"]["users"]>

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      first_name: string
      second_name: string | null
      last_name: string
      second_last_name: string | null
      status_now: string | null
      blood_group: string | null
      blood_rh_factor: string | null
      social_security_number: string | null
      type_position: string | null
      position: string
      email: string
      phone: string
      employee_number: string
      work_shift: string
      birthdate: Date
      start_date: Date
      emergency_contact_name: string
      emergency_contact_phone: string
      emergency_contact_phone_alt: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly first_name: FieldRef<"users", 'String'>
    readonly second_name: FieldRef<"users", 'String'>
    readonly last_name: FieldRef<"users", 'String'>
    readonly second_last_name: FieldRef<"users", 'String'>
    readonly status_now: FieldRef<"users", 'String'>
    readonly blood_group: FieldRef<"users", 'String'>
    readonly blood_rh_factor: FieldRef<"users", 'String'>
    readonly social_security_number: FieldRef<"users", 'String'>
    readonly type_position: FieldRef<"users", 'String'>
    readonly position: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly phone: FieldRef<"users", 'String'>
    readonly employee_number: FieldRef<"users", 'String'>
    readonly work_shift: FieldRef<"users", 'String'>
    readonly birthdate: FieldRef<"users", 'DateTime'>
    readonly start_date: FieldRef<"users", 'DateTime'>
    readonly emergency_contact_name: FieldRef<"users", 'String'>
    readonly emergency_contact_phone: FieldRef<"users", 'String'>
    readonly emergency_contact_phone_alt: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
  }


  /**
   * Model vehicle_logs
   */

  export type AggregateVehicle_logs = {
    _count: Vehicle_logsCountAggregateOutputType | null
    _avg: Vehicle_logsAvgAggregateOutputType | null
    _sum: Vehicle_logsSumAggregateOutputType | null
    _min: Vehicle_logsMinAggregateOutputType | null
    _max: Vehicle_logsMaxAggregateOutputType | null
  }

  export type Vehicle_logsAvgAggregateOutputType = {
    id: number | null
    vehicle_id: number | null
    driver_id: number | null
  }

  export type Vehicle_logsSumAggregateOutputType = {
    id: number | null
    vehicle_id: number | null
    driver_id: number | null
  }

  export type Vehicle_logsMinAggregateOutputType = {
    id: number | null
    vehicle_id: number | null
    driver_id: number | null
    luz_delantera_alta: string | null
    luz_delantera_baja: string | null
    luces_de_emergencia: string | null
    luces_neblineros: string | null
    luz_direccional: string | null
    luz_de_freno: string | null
    luz_de_reversa: string | null
    luces_del_tanque_cisterna: string | null
    luces_interior_cabina: string | null
    motor_adicional: string | null
    estado_de_tablero_indicadores: string | null
    elevadores_de_cristales: string | null
    espejos_lateral_derecho: string | null
    espejos_lateral_izquierdo: string | null
    espejo_retrovisor: string | null
    cristal_parabrisas: string | null
    cristal_medallon: string | null
    cristal_de_puertas: string | null
    gato_hidraulico: string | null
    herramientas_cambio_de_ruedas: string | null
    bocina_de_sonoros: string | null
    modulo_luminosos_sonoros: string | null
    torreta: string | null
    cinturones_de_seguridad: string | null
    limpia_parabrisas: string | null
    poliza_seguro: string | null
    tarjeta_circulacion: string | null
    tapon_tanque_combustible: string | null
    tapon_aceite: string | null
    tapon_agua: string | null
    nivel_aceite_motor: string | null
    nivel_aceite_transmision: string | null
    nivel_agua_radiador: string | null
    nivel_liquido_frenos: string | null
    llanta_delantera_derecha: string | null
    llanta_delantera_izquierda: string | null
    llanta_trasera_derecha: string | null
    llanta_trasera_izquierda: string | null
    llanta_repuesto: string | null
    fecha_registro: Date | null
    llaves_encendido: string | null
    switch_encendido: string | null
    bateria: string | null
    postes_terminales_bateria: string | null
  }

  export type Vehicle_logsMaxAggregateOutputType = {
    id: number | null
    vehicle_id: number | null
    driver_id: number | null
    luz_delantera_alta: string | null
    luz_delantera_baja: string | null
    luces_de_emergencia: string | null
    luces_neblineros: string | null
    luz_direccional: string | null
    luz_de_freno: string | null
    luz_de_reversa: string | null
    luces_del_tanque_cisterna: string | null
    luces_interior_cabina: string | null
    motor_adicional: string | null
    estado_de_tablero_indicadores: string | null
    elevadores_de_cristales: string | null
    espejos_lateral_derecho: string | null
    espejos_lateral_izquierdo: string | null
    espejo_retrovisor: string | null
    cristal_parabrisas: string | null
    cristal_medallon: string | null
    cristal_de_puertas: string | null
    gato_hidraulico: string | null
    herramientas_cambio_de_ruedas: string | null
    bocina_de_sonoros: string | null
    modulo_luminosos_sonoros: string | null
    torreta: string | null
    cinturones_de_seguridad: string | null
    limpia_parabrisas: string | null
    poliza_seguro: string | null
    tarjeta_circulacion: string | null
    tapon_tanque_combustible: string | null
    tapon_aceite: string | null
    tapon_agua: string | null
    nivel_aceite_motor: string | null
    nivel_aceite_transmision: string | null
    nivel_agua_radiador: string | null
    nivel_liquido_frenos: string | null
    llanta_delantera_derecha: string | null
    llanta_delantera_izquierda: string | null
    llanta_trasera_derecha: string | null
    llanta_trasera_izquierda: string | null
    llanta_repuesto: string | null
    fecha_registro: Date | null
    llaves_encendido: string | null
    switch_encendido: string | null
    bateria: string | null
    postes_terminales_bateria: string | null
  }

  export type Vehicle_logsCountAggregateOutputType = {
    id: number
    vehicle_id: number
    driver_id: number
    luz_delantera_alta: number
    luz_delantera_baja: number
    luces_de_emergencia: number
    luces_neblineros: number
    luz_direccional: number
    luz_de_freno: number
    luz_de_reversa: number
    luces_del_tanque_cisterna: number
    luces_interior_cabina: number
    motor_adicional: number
    estado_de_tablero_indicadores: number
    elevadores_de_cristales: number
    espejos_lateral_derecho: number
    espejos_lateral_izquierdo: number
    espejo_retrovisor: number
    cristal_parabrisas: number
    cristal_medallon: number
    cristal_de_puertas: number
    gato_hidraulico: number
    herramientas_cambio_de_ruedas: number
    bocina_de_sonoros: number
    modulo_luminosos_sonoros: number
    torreta: number
    cinturones_de_seguridad: number
    limpia_parabrisas: number
    poliza_seguro: number
    tarjeta_circulacion: number
    tapon_tanque_combustible: number
    tapon_aceite: number
    tapon_agua: number
    nivel_aceite_motor: number
    nivel_aceite_transmision: number
    nivel_agua_radiador: number
    nivel_liquido_frenos: number
    llanta_delantera_derecha: number
    llanta_delantera_izquierda: number
    llanta_trasera_derecha: number
    llanta_trasera_izquierda: number
    llanta_repuesto: number
    fecha_registro: number
    llaves_encendido: number
    switch_encendido: number
    bateria: number
    postes_terminales_bateria: number
    _all: number
  }


  export type Vehicle_logsAvgAggregateInputType = {
    id?: true
    vehicle_id?: true
    driver_id?: true
  }

  export type Vehicle_logsSumAggregateInputType = {
    id?: true
    vehicle_id?: true
    driver_id?: true
  }

  export type Vehicle_logsMinAggregateInputType = {
    id?: true
    vehicle_id?: true
    driver_id?: true
    luz_delantera_alta?: true
    luz_delantera_baja?: true
    luces_de_emergencia?: true
    luces_neblineros?: true
    luz_direccional?: true
    luz_de_freno?: true
    luz_de_reversa?: true
    luces_del_tanque_cisterna?: true
    luces_interior_cabina?: true
    motor_adicional?: true
    estado_de_tablero_indicadores?: true
    elevadores_de_cristales?: true
    espejos_lateral_derecho?: true
    espejos_lateral_izquierdo?: true
    espejo_retrovisor?: true
    cristal_parabrisas?: true
    cristal_medallon?: true
    cristal_de_puertas?: true
    gato_hidraulico?: true
    herramientas_cambio_de_ruedas?: true
    bocina_de_sonoros?: true
    modulo_luminosos_sonoros?: true
    torreta?: true
    cinturones_de_seguridad?: true
    limpia_parabrisas?: true
    poliza_seguro?: true
    tarjeta_circulacion?: true
    tapon_tanque_combustible?: true
    tapon_aceite?: true
    tapon_agua?: true
    nivel_aceite_motor?: true
    nivel_aceite_transmision?: true
    nivel_agua_radiador?: true
    nivel_liquido_frenos?: true
    llanta_delantera_derecha?: true
    llanta_delantera_izquierda?: true
    llanta_trasera_derecha?: true
    llanta_trasera_izquierda?: true
    llanta_repuesto?: true
    fecha_registro?: true
    llaves_encendido?: true
    switch_encendido?: true
    bateria?: true
    postes_terminales_bateria?: true
  }

  export type Vehicle_logsMaxAggregateInputType = {
    id?: true
    vehicle_id?: true
    driver_id?: true
    luz_delantera_alta?: true
    luz_delantera_baja?: true
    luces_de_emergencia?: true
    luces_neblineros?: true
    luz_direccional?: true
    luz_de_freno?: true
    luz_de_reversa?: true
    luces_del_tanque_cisterna?: true
    luces_interior_cabina?: true
    motor_adicional?: true
    estado_de_tablero_indicadores?: true
    elevadores_de_cristales?: true
    espejos_lateral_derecho?: true
    espejos_lateral_izquierdo?: true
    espejo_retrovisor?: true
    cristal_parabrisas?: true
    cristal_medallon?: true
    cristal_de_puertas?: true
    gato_hidraulico?: true
    herramientas_cambio_de_ruedas?: true
    bocina_de_sonoros?: true
    modulo_luminosos_sonoros?: true
    torreta?: true
    cinturones_de_seguridad?: true
    limpia_parabrisas?: true
    poliza_seguro?: true
    tarjeta_circulacion?: true
    tapon_tanque_combustible?: true
    tapon_aceite?: true
    tapon_agua?: true
    nivel_aceite_motor?: true
    nivel_aceite_transmision?: true
    nivel_agua_radiador?: true
    nivel_liquido_frenos?: true
    llanta_delantera_derecha?: true
    llanta_delantera_izquierda?: true
    llanta_trasera_derecha?: true
    llanta_trasera_izquierda?: true
    llanta_repuesto?: true
    fecha_registro?: true
    llaves_encendido?: true
    switch_encendido?: true
    bateria?: true
    postes_terminales_bateria?: true
  }

  export type Vehicle_logsCountAggregateInputType = {
    id?: true
    vehicle_id?: true
    driver_id?: true
    luz_delantera_alta?: true
    luz_delantera_baja?: true
    luces_de_emergencia?: true
    luces_neblineros?: true
    luz_direccional?: true
    luz_de_freno?: true
    luz_de_reversa?: true
    luces_del_tanque_cisterna?: true
    luces_interior_cabina?: true
    motor_adicional?: true
    estado_de_tablero_indicadores?: true
    elevadores_de_cristales?: true
    espejos_lateral_derecho?: true
    espejos_lateral_izquierdo?: true
    espejo_retrovisor?: true
    cristal_parabrisas?: true
    cristal_medallon?: true
    cristal_de_puertas?: true
    gato_hidraulico?: true
    herramientas_cambio_de_ruedas?: true
    bocina_de_sonoros?: true
    modulo_luminosos_sonoros?: true
    torreta?: true
    cinturones_de_seguridad?: true
    limpia_parabrisas?: true
    poliza_seguro?: true
    tarjeta_circulacion?: true
    tapon_tanque_combustible?: true
    tapon_aceite?: true
    tapon_agua?: true
    nivel_aceite_motor?: true
    nivel_aceite_transmision?: true
    nivel_agua_radiador?: true
    nivel_liquido_frenos?: true
    llanta_delantera_derecha?: true
    llanta_delantera_izquierda?: true
    llanta_trasera_derecha?: true
    llanta_trasera_izquierda?: true
    llanta_repuesto?: true
    fecha_registro?: true
    llaves_encendido?: true
    switch_encendido?: true
    bateria?: true
    postes_terminales_bateria?: true
    _all?: true
  }

  export type Vehicle_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vehicle_logs to aggregate.
     */
    where?: vehicle_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vehicle_logs to fetch.
     */
    orderBy?: vehicle_logsOrderByWithRelationInput | vehicle_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vehicle_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vehicle_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vehicle_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vehicle_logs
    **/
    _count?: true | Vehicle_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Vehicle_logsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Vehicle_logsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Vehicle_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Vehicle_logsMaxAggregateInputType
  }

  export type GetVehicle_logsAggregateType<T extends Vehicle_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle_logs[P]>
      : GetScalarType<T[P], AggregateVehicle_logs[P]>
  }




  export type vehicle_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vehicle_logsWhereInput
    orderBy?: vehicle_logsOrderByWithAggregationInput | vehicle_logsOrderByWithAggregationInput[]
    by: Vehicle_logsScalarFieldEnum[] | Vehicle_logsScalarFieldEnum
    having?: vehicle_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Vehicle_logsCountAggregateInputType | true
    _avg?: Vehicle_logsAvgAggregateInputType
    _sum?: Vehicle_logsSumAggregateInputType
    _min?: Vehicle_logsMinAggregateInputType
    _max?: Vehicle_logsMaxAggregateInputType
  }

  export type Vehicle_logsGroupByOutputType = {
    id: number
    vehicle_id: number
    driver_id: number
    luz_delantera_alta: string
    luz_delantera_baja: string
    luces_de_emergencia: string
    luces_neblineros: string
    luz_direccional: string
    luz_de_freno: string
    luz_de_reversa: string
    luces_del_tanque_cisterna: string
    luces_interior_cabina: string
    motor_adicional: string
    estado_de_tablero_indicadores: string
    elevadores_de_cristales: string
    espejos_lateral_derecho: string
    espejos_lateral_izquierdo: string
    espejo_retrovisor: string
    cristal_parabrisas: string
    cristal_medallon: string
    cristal_de_puertas: string
    gato_hidraulico: string
    herramientas_cambio_de_ruedas: string
    bocina_de_sonoros: string
    modulo_luminosos_sonoros: string
    torreta: string
    cinturones_de_seguridad: string
    limpia_parabrisas: string
    poliza_seguro: string
    tarjeta_circulacion: string
    tapon_tanque_combustible: string
    tapon_aceite: string
    tapon_agua: string
    nivel_aceite_motor: string
    nivel_aceite_transmision: string
    nivel_agua_radiador: string
    nivel_liquido_frenos: string
    llanta_delantera_derecha: string
    llanta_delantera_izquierda: string
    llanta_trasera_derecha: string
    llanta_trasera_izquierda: string
    llanta_repuesto: string
    fecha_registro: Date | null
    llaves_encendido: string
    switch_encendido: string
    bateria: string
    postes_terminales_bateria: string
    _count: Vehicle_logsCountAggregateOutputType | null
    _avg: Vehicle_logsAvgAggregateOutputType | null
    _sum: Vehicle_logsSumAggregateOutputType | null
    _min: Vehicle_logsMinAggregateOutputType | null
    _max: Vehicle_logsMaxAggregateOutputType | null
  }

  type GetVehicle_logsGroupByPayload<T extends vehicle_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Vehicle_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Vehicle_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Vehicle_logsGroupByOutputType[P]>
            : GetScalarType<T[P], Vehicle_logsGroupByOutputType[P]>
        }
      >
    >


  export type vehicle_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicle_id?: boolean
    driver_id?: boolean
    luz_delantera_alta?: boolean
    luz_delantera_baja?: boolean
    luces_de_emergencia?: boolean
    luces_neblineros?: boolean
    luz_direccional?: boolean
    luz_de_freno?: boolean
    luz_de_reversa?: boolean
    luces_del_tanque_cisterna?: boolean
    luces_interior_cabina?: boolean
    motor_adicional?: boolean
    estado_de_tablero_indicadores?: boolean
    elevadores_de_cristales?: boolean
    espejos_lateral_derecho?: boolean
    espejos_lateral_izquierdo?: boolean
    espejo_retrovisor?: boolean
    cristal_parabrisas?: boolean
    cristal_medallon?: boolean
    cristal_de_puertas?: boolean
    gato_hidraulico?: boolean
    herramientas_cambio_de_ruedas?: boolean
    bocina_de_sonoros?: boolean
    modulo_luminosos_sonoros?: boolean
    torreta?: boolean
    cinturones_de_seguridad?: boolean
    limpia_parabrisas?: boolean
    poliza_seguro?: boolean
    tarjeta_circulacion?: boolean
    tapon_tanque_combustible?: boolean
    tapon_aceite?: boolean
    tapon_agua?: boolean
    nivel_aceite_motor?: boolean
    nivel_aceite_transmision?: boolean
    nivel_agua_radiador?: boolean
    nivel_liquido_frenos?: boolean
    llanta_delantera_derecha?: boolean
    llanta_delantera_izquierda?: boolean
    llanta_trasera_derecha?: boolean
    llanta_trasera_izquierda?: boolean
    llanta_repuesto?: boolean
    fecha_registro?: boolean
    llaves_encendido?: boolean
    switch_encendido?: boolean
    bateria?: boolean
    postes_terminales_bateria?: boolean
    vehicles?: boolean | vehiclesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle_logs"]>

  export type vehicle_logsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicle_id?: boolean
    driver_id?: boolean
    luz_delantera_alta?: boolean
    luz_delantera_baja?: boolean
    luces_de_emergencia?: boolean
    luces_neblineros?: boolean
    luz_direccional?: boolean
    luz_de_freno?: boolean
    luz_de_reversa?: boolean
    luces_del_tanque_cisterna?: boolean
    luces_interior_cabina?: boolean
    motor_adicional?: boolean
    estado_de_tablero_indicadores?: boolean
    elevadores_de_cristales?: boolean
    espejos_lateral_derecho?: boolean
    espejos_lateral_izquierdo?: boolean
    espejo_retrovisor?: boolean
    cristal_parabrisas?: boolean
    cristal_medallon?: boolean
    cristal_de_puertas?: boolean
    gato_hidraulico?: boolean
    herramientas_cambio_de_ruedas?: boolean
    bocina_de_sonoros?: boolean
    modulo_luminosos_sonoros?: boolean
    torreta?: boolean
    cinturones_de_seguridad?: boolean
    limpia_parabrisas?: boolean
    poliza_seguro?: boolean
    tarjeta_circulacion?: boolean
    tapon_tanque_combustible?: boolean
    tapon_aceite?: boolean
    tapon_agua?: boolean
    nivel_aceite_motor?: boolean
    nivel_aceite_transmision?: boolean
    nivel_agua_radiador?: boolean
    nivel_liquido_frenos?: boolean
    llanta_delantera_derecha?: boolean
    llanta_delantera_izquierda?: boolean
    llanta_trasera_derecha?: boolean
    llanta_trasera_izquierda?: boolean
    llanta_repuesto?: boolean
    fecha_registro?: boolean
    llaves_encendido?: boolean
    switch_encendido?: boolean
    bateria?: boolean
    postes_terminales_bateria?: boolean
    vehicles?: boolean | vehiclesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle_logs"]>

  export type vehicle_logsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicle_id?: boolean
    driver_id?: boolean
    luz_delantera_alta?: boolean
    luz_delantera_baja?: boolean
    luces_de_emergencia?: boolean
    luces_neblineros?: boolean
    luz_direccional?: boolean
    luz_de_freno?: boolean
    luz_de_reversa?: boolean
    luces_del_tanque_cisterna?: boolean
    luces_interior_cabina?: boolean
    motor_adicional?: boolean
    estado_de_tablero_indicadores?: boolean
    elevadores_de_cristales?: boolean
    espejos_lateral_derecho?: boolean
    espejos_lateral_izquierdo?: boolean
    espejo_retrovisor?: boolean
    cristal_parabrisas?: boolean
    cristal_medallon?: boolean
    cristal_de_puertas?: boolean
    gato_hidraulico?: boolean
    herramientas_cambio_de_ruedas?: boolean
    bocina_de_sonoros?: boolean
    modulo_luminosos_sonoros?: boolean
    torreta?: boolean
    cinturones_de_seguridad?: boolean
    limpia_parabrisas?: boolean
    poliza_seguro?: boolean
    tarjeta_circulacion?: boolean
    tapon_tanque_combustible?: boolean
    tapon_aceite?: boolean
    tapon_agua?: boolean
    nivel_aceite_motor?: boolean
    nivel_aceite_transmision?: boolean
    nivel_agua_radiador?: boolean
    nivel_liquido_frenos?: boolean
    llanta_delantera_derecha?: boolean
    llanta_delantera_izquierda?: boolean
    llanta_trasera_derecha?: boolean
    llanta_trasera_izquierda?: boolean
    llanta_repuesto?: boolean
    fecha_registro?: boolean
    llaves_encendido?: boolean
    switch_encendido?: boolean
    bateria?: boolean
    postes_terminales_bateria?: boolean
    vehicles?: boolean | vehiclesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle_logs"]>

  export type vehicle_logsSelectScalar = {
    id?: boolean
    vehicle_id?: boolean
    driver_id?: boolean
    luz_delantera_alta?: boolean
    luz_delantera_baja?: boolean
    luces_de_emergencia?: boolean
    luces_neblineros?: boolean
    luz_direccional?: boolean
    luz_de_freno?: boolean
    luz_de_reversa?: boolean
    luces_del_tanque_cisterna?: boolean
    luces_interior_cabina?: boolean
    motor_adicional?: boolean
    estado_de_tablero_indicadores?: boolean
    elevadores_de_cristales?: boolean
    espejos_lateral_derecho?: boolean
    espejos_lateral_izquierdo?: boolean
    espejo_retrovisor?: boolean
    cristal_parabrisas?: boolean
    cristal_medallon?: boolean
    cristal_de_puertas?: boolean
    gato_hidraulico?: boolean
    herramientas_cambio_de_ruedas?: boolean
    bocina_de_sonoros?: boolean
    modulo_luminosos_sonoros?: boolean
    torreta?: boolean
    cinturones_de_seguridad?: boolean
    limpia_parabrisas?: boolean
    poliza_seguro?: boolean
    tarjeta_circulacion?: boolean
    tapon_tanque_combustible?: boolean
    tapon_aceite?: boolean
    tapon_agua?: boolean
    nivel_aceite_motor?: boolean
    nivel_aceite_transmision?: boolean
    nivel_agua_radiador?: boolean
    nivel_liquido_frenos?: boolean
    llanta_delantera_derecha?: boolean
    llanta_delantera_izquierda?: boolean
    llanta_trasera_derecha?: boolean
    llanta_trasera_izquierda?: boolean
    llanta_repuesto?: boolean
    fecha_registro?: boolean
    llaves_encendido?: boolean
    switch_encendido?: boolean
    bateria?: boolean
    postes_terminales_bateria?: boolean
  }

  export type vehicle_logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vehicle_id" | "driver_id" | "luz_delantera_alta" | "luz_delantera_baja" | "luces_de_emergencia" | "luces_neblineros" | "luz_direccional" | "luz_de_freno" | "luz_de_reversa" | "luces_del_tanque_cisterna" | "luces_interior_cabina" | "motor_adicional" | "estado_de_tablero_indicadores" | "elevadores_de_cristales" | "espejos_lateral_derecho" | "espejos_lateral_izquierdo" | "espejo_retrovisor" | "cristal_parabrisas" | "cristal_medallon" | "cristal_de_puertas" | "gato_hidraulico" | "herramientas_cambio_de_ruedas" | "bocina_de_sonoros" | "modulo_luminosos_sonoros" | "torreta" | "cinturones_de_seguridad" | "limpia_parabrisas" | "poliza_seguro" | "tarjeta_circulacion" | "tapon_tanque_combustible" | "tapon_aceite" | "tapon_agua" | "nivel_aceite_motor" | "nivel_aceite_transmision" | "nivel_agua_radiador" | "nivel_liquido_frenos" | "llanta_delantera_derecha" | "llanta_delantera_izquierda" | "llanta_trasera_derecha" | "llanta_trasera_izquierda" | "llanta_repuesto" | "fecha_registro" | "llaves_encendido" | "switch_encendido" | "bateria" | "postes_terminales_bateria", ExtArgs["result"]["vehicle_logs"]>
  export type vehicle_logsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | vehiclesDefaultArgs<ExtArgs>
  }
  export type vehicle_logsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | vehiclesDefaultArgs<ExtArgs>
  }
  export type vehicle_logsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | vehiclesDefaultArgs<ExtArgs>
  }

  export type $vehicle_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vehicle_logs"
    objects: {
      vehicles: Prisma.$vehiclesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      vehicle_id: number
      driver_id: number
      luz_delantera_alta: string
      luz_delantera_baja: string
      luces_de_emergencia: string
      luces_neblineros: string
      luz_direccional: string
      luz_de_freno: string
      luz_de_reversa: string
      luces_del_tanque_cisterna: string
      luces_interior_cabina: string
      motor_adicional: string
      estado_de_tablero_indicadores: string
      elevadores_de_cristales: string
      espejos_lateral_derecho: string
      espejos_lateral_izquierdo: string
      espejo_retrovisor: string
      cristal_parabrisas: string
      cristal_medallon: string
      cristal_de_puertas: string
      gato_hidraulico: string
      herramientas_cambio_de_ruedas: string
      bocina_de_sonoros: string
      modulo_luminosos_sonoros: string
      torreta: string
      cinturones_de_seguridad: string
      limpia_parabrisas: string
      poliza_seguro: string
      tarjeta_circulacion: string
      tapon_tanque_combustible: string
      tapon_aceite: string
      tapon_agua: string
      nivel_aceite_motor: string
      nivel_aceite_transmision: string
      nivel_agua_radiador: string
      nivel_liquido_frenos: string
      llanta_delantera_derecha: string
      llanta_delantera_izquierda: string
      llanta_trasera_derecha: string
      llanta_trasera_izquierda: string
      llanta_repuesto: string
      fecha_registro: Date | null
      llaves_encendido: string
      switch_encendido: string
      bateria: string
      postes_terminales_bateria: string
    }, ExtArgs["result"]["vehicle_logs"]>
    composites: {}
  }

  type vehicle_logsGetPayload<S extends boolean | null | undefined | vehicle_logsDefaultArgs> = $Result.GetResult<Prisma.$vehicle_logsPayload, S>

  type vehicle_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vehicle_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Vehicle_logsCountAggregateInputType | true
    }

  export interface vehicle_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vehicle_logs'], meta: { name: 'vehicle_logs' } }
    /**
     * Find zero or one Vehicle_logs that matches the filter.
     * @param {vehicle_logsFindUniqueArgs} args - Arguments to find a Vehicle_logs
     * @example
     * // Get one Vehicle_logs
     * const vehicle_logs = await prisma.vehicle_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vehicle_logsFindUniqueArgs>(args: SelectSubset<T, vehicle_logsFindUniqueArgs<ExtArgs>>): Prisma__vehicle_logsClient<$Result.GetResult<Prisma.$vehicle_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehicle_logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {vehicle_logsFindUniqueOrThrowArgs} args - Arguments to find a Vehicle_logs
     * @example
     * // Get one Vehicle_logs
     * const vehicle_logs = await prisma.vehicle_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vehicle_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, vehicle_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vehicle_logsClient<$Result.GetResult<Prisma.$vehicle_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicle_logsFindFirstArgs} args - Arguments to find a Vehicle_logs
     * @example
     * // Get one Vehicle_logs
     * const vehicle_logs = await prisma.vehicle_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vehicle_logsFindFirstArgs>(args?: SelectSubset<T, vehicle_logsFindFirstArgs<ExtArgs>>): Prisma__vehicle_logsClient<$Result.GetResult<Prisma.$vehicle_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicle_logsFindFirstOrThrowArgs} args - Arguments to find a Vehicle_logs
     * @example
     * // Get one Vehicle_logs
     * const vehicle_logs = await prisma.vehicle_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vehicle_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, vehicle_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__vehicle_logsClient<$Result.GetResult<Prisma.$vehicle_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicle_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicle_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicle_logs
     * const vehicle_logs = await prisma.vehicle_logs.findMany()
     * 
     * // Get first 10 Vehicle_logs
     * const vehicle_logs = await prisma.vehicle_logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicle_logsWithIdOnly = await prisma.vehicle_logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends vehicle_logsFindManyArgs>(args?: SelectSubset<T, vehicle_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vehicle_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehicle_logs.
     * @param {vehicle_logsCreateArgs} args - Arguments to create a Vehicle_logs.
     * @example
     * // Create one Vehicle_logs
     * const Vehicle_logs = await prisma.vehicle_logs.create({
     *   data: {
     *     // ... data to create a Vehicle_logs
     *   }
     * })
     * 
     */
    create<T extends vehicle_logsCreateArgs>(args: SelectSubset<T, vehicle_logsCreateArgs<ExtArgs>>): Prisma__vehicle_logsClient<$Result.GetResult<Prisma.$vehicle_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehicle_logs.
     * @param {vehicle_logsCreateManyArgs} args - Arguments to create many Vehicle_logs.
     * @example
     * // Create many Vehicle_logs
     * const vehicle_logs = await prisma.vehicle_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vehicle_logsCreateManyArgs>(args?: SelectSubset<T, vehicle_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehicle_logs and returns the data saved in the database.
     * @param {vehicle_logsCreateManyAndReturnArgs} args - Arguments to create many Vehicle_logs.
     * @example
     * // Create many Vehicle_logs
     * const vehicle_logs = await prisma.vehicle_logs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehicle_logs and only return the `id`
     * const vehicle_logsWithIdOnly = await prisma.vehicle_logs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends vehicle_logsCreateManyAndReturnArgs>(args?: SelectSubset<T, vehicle_logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vehicle_logsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vehicle_logs.
     * @param {vehicle_logsDeleteArgs} args - Arguments to delete one Vehicle_logs.
     * @example
     * // Delete one Vehicle_logs
     * const Vehicle_logs = await prisma.vehicle_logs.delete({
     *   where: {
     *     // ... filter to delete one Vehicle_logs
     *   }
     * })
     * 
     */
    delete<T extends vehicle_logsDeleteArgs>(args: SelectSubset<T, vehicle_logsDeleteArgs<ExtArgs>>): Prisma__vehicle_logsClient<$Result.GetResult<Prisma.$vehicle_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehicle_logs.
     * @param {vehicle_logsUpdateArgs} args - Arguments to update one Vehicle_logs.
     * @example
     * // Update one Vehicle_logs
     * const vehicle_logs = await prisma.vehicle_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vehicle_logsUpdateArgs>(args: SelectSubset<T, vehicle_logsUpdateArgs<ExtArgs>>): Prisma__vehicle_logsClient<$Result.GetResult<Prisma.$vehicle_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehicle_logs.
     * @param {vehicle_logsDeleteManyArgs} args - Arguments to filter Vehicle_logs to delete.
     * @example
     * // Delete a few Vehicle_logs
     * const { count } = await prisma.vehicle_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vehicle_logsDeleteManyArgs>(args?: SelectSubset<T, vehicle_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicle_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicle_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicle_logs
     * const vehicle_logs = await prisma.vehicle_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vehicle_logsUpdateManyArgs>(args: SelectSubset<T, vehicle_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicle_logs and returns the data updated in the database.
     * @param {vehicle_logsUpdateManyAndReturnArgs} args - Arguments to update many Vehicle_logs.
     * @example
     * // Update many Vehicle_logs
     * const vehicle_logs = await prisma.vehicle_logs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vehicle_logs and only return the `id`
     * const vehicle_logsWithIdOnly = await prisma.vehicle_logs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends vehicle_logsUpdateManyAndReturnArgs>(args: SelectSubset<T, vehicle_logsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vehicle_logsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vehicle_logs.
     * @param {vehicle_logsUpsertArgs} args - Arguments to update or create a Vehicle_logs.
     * @example
     * // Update or create a Vehicle_logs
     * const vehicle_logs = await prisma.vehicle_logs.upsert({
     *   create: {
     *     // ... data to create a Vehicle_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle_logs we want to update
     *   }
     * })
     */
    upsert<T extends vehicle_logsUpsertArgs>(args: SelectSubset<T, vehicle_logsUpsertArgs<ExtArgs>>): Prisma__vehicle_logsClient<$Result.GetResult<Prisma.$vehicle_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehicle_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicle_logsCountArgs} args - Arguments to filter Vehicle_logs to count.
     * @example
     * // Count the number of Vehicle_logs
     * const count = await prisma.vehicle_logs.count({
     *   where: {
     *     // ... the filter for the Vehicle_logs we want to count
     *   }
     * })
    **/
    count<T extends vehicle_logsCountArgs>(
      args?: Subset<T, vehicle_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Vehicle_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Vehicle_logsAggregateArgs>(args: Subset<T, Vehicle_logsAggregateArgs>): Prisma.PrismaPromise<GetVehicle_logsAggregateType<T>>

    /**
     * Group by Vehicle_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicle_logsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends vehicle_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vehicle_logsGroupByArgs['orderBy'] }
        : { orderBy?: vehicle_logsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, vehicle_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicle_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vehicle_logs model
   */
  readonly fields: vehicle_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vehicle_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vehicle_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicles<T extends vehiclesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, vehiclesDefaultArgs<ExtArgs>>): Prisma__vehiclesClient<$Result.GetResult<Prisma.$vehiclesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the vehicle_logs model
   */
  interface vehicle_logsFieldRefs {
    readonly id: FieldRef<"vehicle_logs", 'Int'>
    readonly vehicle_id: FieldRef<"vehicle_logs", 'Int'>
    readonly driver_id: FieldRef<"vehicle_logs", 'Int'>
    readonly luz_delantera_alta: FieldRef<"vehicle_logs", 'String'>
    readonly luz_delantera_baja: FieldRef<"vehicle_logs", 'String'>
    readonly luces_de_emergencia: FieldRef<"vehicle_logs", 'String'>
    readonly luces_neblineros: FieldRef<"vehicle_logs", 'String'>
    readonly luz_direccional: FieldRef<"vehicle_logs", 'String'>
    readonly luz_de_freno: FieldRef<"vehicle_logs", 'String'>
    readonly luz_de_reversa: FieldRef<"vehicle_logs", 'String'>
    readonly luces_del_tanque_cisterna: FieldRef<"vehicle_logs", 'String'>
    readonly luces_interior_cabina: FieldRef<"vehicle_logs", 'String'>
    readonly motor_adicional: FieldRef<"vehicle_logs", 'String'>
    readonly estado_de_tablero_indicadores: FieldRef<"vehicle_logs", 'String'>
    readonly elevadores_de_cristales: FieldRef<"vehicle_logs", 'String'>
    readonly espejos_lateral_derecho: FieldRef<"vehicle_logs", 'String'>
    readonly espejos_lateral_izquierdo: FieldRef<"vehicle_logs", 'String'>
    readonly espejo_retrovisor: FieldRef<"vehicle_logs", 'String'>
    readonly cristal_parabrisas: FieldRef<"vehicle_logs", 'String'>
    readonly cristal_medallon: FieldRef<"vehicle_logs", 'String'>
    readonly cristal_de_puertas: FieldRef<"vehicle_logs", 'String'>
    readonly gato_hidraulico: FieldRef<"vehicle_logs", 'String'>
    readonly herramientas_cambio_de_ruedas: FieldRef<"vehicle_logs", 'String'>
    readonly bocina_de_sonoros: FieldRef<"vehicle_logs", 'String'>
    readonly modulo_luminosos_sonoros: FieldRef<"vehicle_logs", 'String'>
    readonly torreta: FieldRef<"vehicle_logs", 'String'>
    readonly cinturones_de_seguridad: FieldRef<"vehicle_logs", 'String'>
    readonly limpia_parabrisas: FieldRef<"vehicle_logs", 'String'>
    readonly poliza_seguro: FieldRef<"vehicle_logs", 'String'>
    readonly tarjeta_circulacion: FieldRef<"vehicle_logs", 'String'>
    readonly tapon_tanque_combustible: FieldRef<"vehicle_logs", 'String'>
    readonly tapon_aceite: FieldRef<"vehicle_logs", 'String'>
    readonly tapon_agua: FieldRef<"vehicle_logs", 'String'>
    readonly nivel_aceite_motor: FieldRef<"vehicle_logs", 'String'>
    readonly nivel_aceite_transmision: FieldRef<"vehicle_logs", 'String'>
    readonly nivel_agua_radiador: FieldRef<"vehicle_logs", 'String'>
    readonly nivel_liquido_frenos: FieldRef<"vehicle_logs", 'String'>
    readonly llanta_delantera_derecha: FieldRef<"vehicle_logs", 'String'>
    readonly llanta_delantera_izquierda: FieldRef<"vehicle_logs", 'String'>
    readonly llanta_trasera_derecha: FieldRef<"vehicle_logs", 'String'>
    readonly llanta_trasera_izquierda: FieldRef<"vehicle_logs", 'String'>
    readonly llanta_repuesto: FieldRef<"vehicle_logs", 'String'>
    readonly fecha_registro: FieldRef<"vehicle_logs", 'DateTime'>
    readonly llaves_encendido: FieldRef<"vehicle_logs", 'String'>
    readonly switch_encendido: FieldRef<"vehicle_logs", 'String'>
    readonly bateria: FieldRef<"vehicle_logs", 'String'>
    readonly postes_terminales_bateria: FieldRef<"vehicle_logs", 'String'>
  }
    

  // Custom InputTypes
  /**
   * vehicle_logs findUnique
   */
  export type vehicle_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_logs
     */
    select?: vehicle_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle_logs
     */
    omit?: vehicle_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicle_logsInclude<ExtArgs> | null
    /**
     * Filter, which vehicle_logs to fetch.
     */
    where: vehicle_logsWhereUniqueInput
  }

  /**
   * vehicle_logs findUniqueOrThrow
   */
  export type vehicle_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_logs
     */
    select?: vehicle_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle_logs
     */
    omit?: vehicle_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicle_logsInclude<ExtArgs> | null
    /**
     * Filter, which vehicle_logs to fetch.
     */
    where: vehicle_logsWhereUniqueInput
  }

  /**
   * vehicle_logs findFirst
   */
  export type vehicle_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_logs
     */
    select?: vehicle_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle_logs
     */
    omit?: vehicle_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicle_logsInclude<ExtArgs> | null
    /**
     * Filter, which vehicle_logs to fetch.
     */
    where?: vehicle_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vehicle_logs to fetch.
     */
    orderBy?: vehicle_logsOrderByWithRelationInput | vehicle_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vehicle_logs.
     */
    cursor?: vehicle_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vehicle_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vehicle_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vehicle_logs.
     */
    distinct?: Vehicle_logsScalarFieldEnum | Vehicle_logsScalarFieldEnum[]
  }

  /**
   * vehicle_logs findFirstOrThrow
   */
  export type vehicle_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_logs
     */
    select?: vehicle_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle_logs
     */
    omit?: vehicle_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicle_logsInclude<ExtArgs> | null
    /**
     * Filter, which vehicle_logs to fetch.
     */
    where?: vehicle_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vehicle_logs to fetch.
     */
    orderBy?: vehicle_logsOrderByWithRelationInput | vehicle_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vehicle_logs.
     */
    cursor?: vehicle_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vehicle_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vehicle_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vehicle_logs.
     */
    distinct?: Vehicle_logsScalarFieldEnum | Vehicle_logsScalarFieldEnum[]
  }

  /**
   * vehicle_logs findMany
   */
  export type vehicle_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_logs
     */
    select?: vehicle_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle_logs
     */
    omit?: vehicle_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicle_logsInclude<ExtArgs> | null
    /**
     * Filter, which vehicle_logs to fetch.
     */
    where?: vehicle_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vehicle_logs to fetch.
     */
    orderBy?: vehicle_logsOrderByWithRelationInput | vehicle_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vehicle_logs.
     */
    cursor?: vehicle_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vehicle_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vehicle_logs.
     */
    skip?: number
    distinct?: Vehicle_logsScalarFieldEnum | Vehicle_logsScalarFieldEnum[]
  }

  /**
   * vehicle_logs create
   */
  export type vehicle_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_logs
     */
    select?: vehicle_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle_logs
     */
    omit?: vehicle_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicle_logsInclude<ExtArgs> | null
    /**
     * The data needed to create a vehicle_logs.
     */
    data: XOR<vehicle_logsCreateInput, vehicle_logsUncheckedCreateInput>
  }

  /**
   * vehicle_logs createMany
   */
  export type vehicle_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vehicle_logs.
     */
    data: vehicle_logsCreateManyInput | vehicle_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vehicle_logs createManyAndReturn
   */
  export type vehicle_logsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_logs
     */
    select?: vehicle_logsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle_logs
     */
    omit?: vehicle_logsOmit<ExtArgs> | null
    /**
     * The data used to create many vehicle_logs.
     */
    data: vehicle_logsCreateManyInput | vehicle_logsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicle_logsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * vehicle_logs update
   */
  export type vehicle_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_logs
     */
    select?: vehicle_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle_logs
     */
    omit?: vehicle_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicle_logsInclude<ExtArgs> | null
    /**
     * The data needed to update a vehicle_logs.
     */
    data: XOR<vehicle_logsUpdateInput, vehicle_logsUncheckedUpdateInput>
    /**
     * Choose, which vehicle_logs to update.
     */
    where: vehicle_logsWhereUniqueInput
  }

  /**
   * vehicle_logs updateMany
   */
  export type vehicle_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vehicle_logs.
     */
    data: XOR<vehicle_logsUpdateManyMutationInput, vehicle_logsUncheckedUpdateManyInput>
    /**
     * Filter which vehicle_logs to update
     */
    where?: vehicle_logsWhereInput
    /**
     * Limit how many vehicle_logs to update.
     */
    limit?: number
  }

  /**
   * vehicle_logs updateManyAndReturn
   */
  export type vehicle_logsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_logs
     */
    select?: vehicle_logsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle_logs
     */
    omit?: vehicle_logsOmit<ExtArgs> | null
    /**
     * The data used to update vehicle_logs.
     */
    data: XOR<vehicle_logsUpdateManyMutationInput, vehicle_logsUncheckedUpdateManyInput>
    /**
     * Filter which vehicle_logs to update
     */
    where?: vehicle_logsWhereInput
    /**
     * Limit how many vehicle_logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicle_logsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * vehicle_logs upsert
   */
  export type vehicle_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_logs
     */
    select?: vehicle_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle_logs
     */
    omit?: vehicle_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicle_logsInclude<ExtArgs> | null
    /**
     * The filter to search for the vehicle_logs to update in case it exists.
     */
    where: vehicle_logsWhereUniqueInput
    /**
     * In case the vehicle_logs found by the `where` argument doesn't exist, create a new vehicle_logs with this data.
     */
    create: XOR<vehicle_logsCreateInput, vehicle_logsUncheckedCreateInput>
    /**
     * In case the vehicle_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vehicle_logsUpdateInput, vehicle_logsUncheckedUpdateInput>
  }

  /**
   * vehicle_logs delete
   */
  export type vehicle_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_logs
     */
    select?: vehicle_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle_logs
     */
    omit?: vehicle_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicle_logsInclude<ExtArgs> | null
    /**
     * Filter which vehicle_logs to delete.
     */
    where: vehicle_logsWhereUniqueInput
  }

  /**
   * vehicle_logs deleteMany
   */
  export type vehicle_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vehicle_logs to delete
     */
    where?: vehicle_logsWhereInput
    /**
     * Limit how many vehicle_logs to delete.
     */
    limit?: number
  }

  /**
   * vehicle_logs without action
   */
  export type vehicle_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_logs
     */
    select?: vehicle_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle_logs
     */
    omit?: vehicle_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicle_logsInclude<ExtArgs> | null
  }


  /**
   * Model vehicles
   */

  export type AggregateVehicles = {
    _count: VehiclesCountAggregateOutputType | null
    _avg: VehiclesAvgAggregateOutputType | null
    _sum: VehiclesSumAggregateOutputType | null
    _min: VehiclesMinAggregateOutputType | null
    _max: VehiclesMaxAggregateOutputType | null
  }

  export type VehiclesAvgAggregateOutputType = {
    id: number | null
    number_unit: number | null
    kilometers: number | null
    kilometers_to_service: number | null
  }

  export type VehiclesSumAggregateOutputType = {
    id: number | null
    number_unit: number | null
    kilometers: number | null
    kilometers_to_service: number | null
  }

  export type VehiclesMinAggregateOutputType = {
    id: number | null
    number_unit: number | null
    type: string | null
    cover_img: string | null
    left_img: string | null
    up_img: string | null
    front_img: string | null
    back_img: string | null
    kilometers: number | null
    kilometers_to_service: number | null
    date_register: Date | null
    vehicle_license_plates: string | null
    status: string | null
    model: string | null
    card_brand: string | null
  }

  export type VehiclesMaxAggregateOutputType = {
    id: number | null
    number_unit: number | null
    type: string | null
    cover_img: string | null
    left_img: string | null
    up_img: string | null
    front_img: string | null
    back_img: string | null
    kilometers: number | null
    kilometers_to_service: number | null
    date_register: Date | null
    vehicle_license_plates: string | null
    status: string | null
    model: string | null
    card_brand: string | null
  }

  export type VehiclesCountAggregateOutputType = {
    id: number
    number_unit: number
    type: number
    cover_img: number
    left_img: number
    up_img: number
    front_img: number
    back_img: number
    kilometers: number
    kilometers_to_service: number
    date_register: number
    vehicle_license_plates: number
    status: number
    model: number
    card_brand: number
    _all: number
  }


  export type VehiclesAvgAggregateInputType = {
    id?: true
    number_unit?: true
    kilometers?: true
    kilometers_to_service?: true
  }

  export type VehiclesSumAggregateInputType = {
    id?: true
    number_unit?: true
    kilometers?: true
    kilometers_to_service?: true
  }

  export type VehiclesMinAggregateInputType = {
    id?: true
    number_unit?: true
    type?: true
    cover_img?: true
    left_img?: true
    up_img?: true
    front_img?: true
    back_img?: true
    kilometers?: true
    kilometers_to_service?: true
    date_register?: true
    vehicle_license_plates?: true
    status?: true
    model?: true
    card_brand?: true
  }

  export type VehiclesMaxAggregateInputType = {
    id?: true
    number_unit?: true
    type?: true
    cover_img?: true
    left_img?: true
    up_img?: true
    front_img?: true
    back_img?: true
    kilometers?: true
    kilometers_to_service?: true
    date_register?: true
    vehicle_license_plates?: true
    status?: true
    model?: true
    card_brand?: true
  }

  export type VehiclesCountAggregateInputType = {
    id?: true
    number_unit?: true
    type?: true
    cover_img?: true
    left_img?: true
    up_img?: true
    front_img?: true
    back_img?: true
    kilometers?: true
    kilometers_to_service?: true
    date_register?: true
    vehicle_license_plates?: true
    status?: true
    model?: true
    card_brand?: true
    _all?: true
  }

  export type VehiclesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vehicles to aggregate.
     */
    where?: vehiclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vehicles to fetch.
     */
    orderBy?: vehiclesOrderByWithRelationInput | vehiclesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vehiclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vehicles
    **/
    _count?: true | VehiclesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehiclesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehiclesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehiclesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehiclesMaxAggregateInputType
  }

  export type GetVehiclesAggregateType<T extends VehiclesAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicles[P]>
      : GetScalarType<T[P], AggregateVehicles[P]>
  }




  export type vehiclesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vehiclesWhereInput
    orderBy?: vehiclesOrderByWithAggregationInput | vehiclesOrderByWithAggregationInput[]
    by: VehiclesScalarFieldEnum[] | VehiclesScalarFieldEnum
    having?: vehiclesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehiclesCountAggregateInputType | true
    _avg?: VehiclesAvgAggregateInputType
    _sum?: VehiclesSumAggregateInputType
    _min?: VehiclesMinAggregateInputType
    _max?: VehiclesMaxAggregateInputType
  }

  export type VehiclesGroupByOutputType = {
    id: number
    number_unit: number
    type: string
    cover_img: string
    left_img: string
    up_img: string
    front_img: string
    back_img: string
    kilometers: number
    kilometers_to_service: number
    date_register: Date
    vehicle_license_plates: string
    status: string
    model: string
    card_brand: string
    _count: VehiclesCountAggregateOutputType | null
    _avg: VehiclesAvgAggregateOutputType | null
    _sum: VehiclesSumAggregateOutputType | null
    _min: VehiclesMinAggregateOutputType | null
    _max: VehiclesMaxAggregateOutputType | null
  }

  type GetVehiclesGroupByPayload<T extends vehiclesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehiclesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehiclesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehiclesGroupByOutputType[P]>
            : GetScalarType<T[P], VehiclesGroupByOutputType[P]>
        }
      >
    >


  export type vehiclesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number_unit?: boolean
    type?: boolean
    cover_img?: boolean
    left_img?: boolean
    up_img?: boolean
    front_img?: boolean
    back_img?: boolean
    kilometers?: boolean
    kilometers_to_service?: boolean
    date_register?: boolean
    vehicle_license_plates?: boolean
    status?: boolean
    model?: boolean
    card_brand?: boolean
    damages?: boolean | vehicles$damagesArgs<ExtArgs>
    services?: boolean | vehicles$servicesArgs<ExtArgs>
    vehicle_logs?: boolean | vehicles$vehicle_logsArgs<ExtArgs>
    work_force?: boolean | vehicles$work_forceArgs<ExtArgs>
    _count?: boolean | VehiclesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicles"]>

  export type vehiclesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number_unit?: boolean
    type?: boolean
    cover_img?: boolean
    left_img?: boolean
    up_img?: boolean
    front_img?: boolean
    back_img?: boolean
    kilometers?: boolean
    kilometers_to_service?: boolean
    date_register?: boolean
    vehicle_license_plates?: boolean
    status?: boolean
    model?: boolean
    card_brand?: boolean
  }, ExtArgs["result"]["vehicles"]>

  export type vehiclesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number_unit?: boolean
    type?: boolean
    cover_img?: boolean
    left_img?: boolean
    up_img?: boolean
    front_img?: boolean
    back_img?: boolean
    kilometers?: boolean
    kilometers_to_service?: boolean
    date_register?: boolean
    vehicle_license_plates?: boolean
    status?: boolean
    model?: boolean
    card_brand?: boolean
  }, ExtArgs["result"]["vehicles"]>

  export type vehiclesSelectScalar = {
    id?: boolean
    number_unit?: boolean
    type?: boolean
    cover_img?: boolean
    left_img?: boolean
    up_img?: boolean
    front_img?: boolean
    back_img?: boolean
    kilometers?: boolean
    kilometers_to_service?: boolean
    date_register?: boolean
    vehicle_license_plates?: boolean
    status?: boolean
    model?: boolean
    card_brand?: boolean
  }

  export type vehiclesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "number_unit" | "type" | "cover_img" | "left_img" | "up_img" | "front_img" | "back_img" | "kilometers" | "kilometers_to_service" | "date_register" | "vehicle_license_plates" | "status" | "model" | "card_brand", ExtArgs["result"]["vehicles"]>
  export type vehiclesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    damages?: boolean | vehicles$damagesArgs<ExtArgs>
    services?: boolean | vehicles$servicesArgs<ExtArgs>
    vehicle_logs?: boolean | vehicles$vehicle_logsArgs<ExtArgs>
    work_force?: boolean | vehicles$work_forceArgs<ExtArgs>
    _count?: boolean | VehiclesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type vehiclesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type vehiclesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $vehiclesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vehicles"
    objects: {
      damages: Prisma.$damagesPayload<ExtArgs>[]
      services: Prisma.$servicesPayload<ExtArgs>[]
      vehicle_logs: Prisma.$vehicle_logsPayload<ExtArgs>[]
      work_force: Prisma.$work_forcePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      number_unit: number
      type: string
      cover_img: string
      left_img: string
      up_img: string
      front_img: string
      back_img: string
      kilometers: number
      kilometers_to_service: number
      date_register: Date
      vehicle_license_plates: string
      status: string
      model: string
      card_brand: string
    }, ExtArgs["result"]["vehicles"]>
    composites: {}
  }

  type vehiclesGetPayload<S extends boolean | null | undefined | vehiclesDefaultArgs> = $Result.GetResult<Prisma.$vehiclesPayload, S>

  type vehiclesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vehiclesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehiclesCountAggregateInputType | true
    }

  export interface vehiclesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vehicles'], meta: { name: 'vehicles' } }
    /**
     * Find zero or one Vehicles that matches the filter.
     * @param {vehiclesFindUniqueArgs} args - Arguments to find a Vehicles
     * @example
     * // Get one Vehicles
     * const vehicles = await prisma.vehicles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vehiclesFindUniqueArgs>(args: SelectSubset<T, vehiclesFindUniqueArgs<ExtArgs>>): Prisma__vehiclesClient<$Result.GetResult<Prisma.$vehiclesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehicles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {vehiclesFindUniqueOrThrowArgs} args - Arguments to find a Vehicles
     * @example
     * // Get one Vehicles
     * const vehicles = await prisma.vehicles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vehiclesFindUniqueOrThrowArgs>(args: SelectSubset<T, vehiclesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vehiclesClient<$Result.GetResult<Prisma.$vehiclesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehiclesFindFirstArgs} args - Arguments to find a Vehicles
     * @example
     * // Get one Vehicles
     * const vehicles = await prisma.vehicles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vehiclesFindFirstArgs>(args?: SelectSubset<T, vehiclesFindFirstArgs<ExtArgs>>): Prisma__vehiclesClient<$Result.GetResult<Prisma.$vehiclesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehiclesFindFirstOrThrowArgs} args - Arguments to find a Vehicles
     * @example
     * // Get one Vehicles
     * const vehicles = await prisma.vehicles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vehiclesFindFirstOrThrowArgs>(args?: SelectSubset<T, vehiclesFindFirstOrThrowArgs<ExtArgs>>): Prisma__vehiclesClient<$Result.GetResult<Prisma.$vehiclesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehiclesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicles.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehiclesWithIdOnly = await prisma.vehicles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends vehiclesFindManyArgs>(args?: SelectSubset<T, vehiclesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vehiclesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehicles.
     * @param {vehiclesCreateArgs} args - Arguments to create a Vehicles.
     * @example
     * // Create one Vehicles
     * const Vehicles = await prisma.vehicles.create({
     *   data: {
     *     // ... data to create a Vehicles
     *   }
     * })
     * 
     */
    create<T extends vehiclesCreateArgs>(args: SelectSubset<T, vehiclesCreateArgs<ExtArgs>>): Prisma__vehiclesClient<$Result.GetResult<Prisma.$vehiclesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehicles.
     * @param {vehiclesCreateManyArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicles = await prisma.vehicles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vehiclesCreateManyArgs>(args?: SelectSubset<T, vehiclesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehicles and returns the data saved in the database.
     * @param {vehiclesCreateManyAndReturnArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicles = await prisma.vehicles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehicles and only return the `id`
     * const vehiclesWithIdOnly = await prisma.vehicles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends vehiclesCreateManyAndReturnArgs>(args?: SelectSubset<T, vehiclesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vehiclesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vehicles.
     * @param {vehiclesDeleteArgs} args - Arguments to delete one Vehicles.
     * @example
     * // Delete one Vehicles
     * const Vehicles = await prisma.vehicles.delete({
     *   where: {
     *     // ... filter to delete one Vehicles
     *   }
     * })
     * 
     */
    delete<T extends vehiclesDeleteArgs>(args: SelectSubset<T, vehiclesDeleteArgs<ExtArgs>>): Prisma__vehiclesClient<$Result.GetResult<Prisma.$vehiclesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehicles.
     * @param {vehiclesUpdateArgs} args - Arguments to update one Vehicles.
     * @example
     * // Update one Vehicles
     * const vehicles = await prisma.vehicles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vehiclesUpdateArgs>(args: SelectSubset<T, vehiclesUpdateArgs<ExtArgs>>): Prisma__vehiclesClient<$Result.GetResult<Prisma.$vehiclesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehicles.
     * @param {vehiclesDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vehiclesDeleteManyArgs>(args?: SelectSubset<T, vehiclesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehiclesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicles = await prisma.vehicles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vehiclesUpdateManyArgs>(args: SelectSubset<T, vehiclesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles and returns the data updated in the database.
     * @param {vehiclesUpdateManyAndReturnArgs} args - Arguments to update many Vehicles.
     * @example
     * // Update many Vehicles
     * const vehicles = await prisma.vehicles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vehicles and only return the `id`
     * const vehiclesWithIdOnly = await prisma.vehicles.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends vehiclesUpdateManyAndReturnArgs>(args: SelectSubset<T, vehiclesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vehiclesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vehicles.
     * @param {vehiclesUpsertArgs} args - Arguments to update or create a Vehicles.
     * @example
     * // Update or create a Vehicles
     * const vehicles = await prisma.vehicles.upsert({
     *   create: {
     *     // ... data to create a Vehicles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicles we want to update
     *   }
     * })
     */
    upsert<T extends vehiclesUpsertArgs>(args: SelectSubset<T, vehiclesUpsertArgs<ExtArgs>>): Prisma__vehiclesClient<$Result.GetResult<Prisma.$vehiclesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehiclesCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicles.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends vehiclesCountArgs>(
      args?: Subset<T, vehiclesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehiclesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiclesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehiclesAggregateArgs>(args: Subset<T, VehiclesAggregateArgs>): Prisma.PrismaPromise<GetVehiclesAggregateType<T>>

    /**
     * Group by Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehiclesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends vehiclesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vehiclesGroupByArgs['orderBy'] }
        : { orderBy?: vehiclesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, vehiclesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehiclesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vehicles model
   */
  readonly fields: vehiclesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vehicles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vehiclesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    damages<T extends vehicles$damagesArgs<ExtArgs> = {}>(args?: Subset<T, vehicles$damagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$damagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    services<T extends vehicles$servicesArgs<ExtArgs> = {}>(args?: Subset<T, vehicles$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vehicle_logs<T extends vehicles$vehicle_logsArgs<ExtArgs> = {}>(args?: Subset<T, vehicles$vehicle_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vehicle_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    work_force<T extends vehicles$work_forceArgs<ExtArgs> = {}>(args?: Subset<T, vehicles$work_forceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$work_forcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the vehicles model
   */
  interface vehiclesFieldRefs {
    readonly id: FieldRef<"vehicles", 'Int'>
    readonly number_unit: FieldRef<"vehicles", 'Int'>
    readonly type: FieldRef<"vehicles", 'String'>
    readonly cover_img: FieldRef<"vehicles", 'String'>
    readonly left_img: FieldRef<"vehicles", 'String'>
    readonly up_img: FieldRef<"vehicles", 'String'>
    readonly front_img: FieldRef<"vehicles", 'String'>
    readonly back_img: FieldRef<"vehicles", 'String'>
    readonly kilometers: FieldRef<"vehicles", 'Float'>
    readonly kilometers_to_service: FieldRef<"vehicles", 'Float'>
    readonly date_register: FieldRef<"vehicles", 'DateTime'>
    readonly vehicle_license_plates: FieldRef<"vehicles", 'String'>
    readonly status: FieldRef<"vehicles", 'String'>
    readonly model: FieldRef<"vehicles", 'String'>
    readonly card_brand: FieldRef<"vehicles", 'String'>
  }
    

  // Custom InputTypes
  /**
   * vehicles findUnique
   */
  export type vehiclesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicles
     */
    select?: vehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicles
     */
    omit?: vehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehiclesInclude<ExtArgs> | null
    /**
     * Filter, which vehicles to fetch.
     */
    where: vehiclesWhereUniqueInput
  }

  /**
   * vehicles findUniqueOrThrow
   */
  export type vehiclesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicles
     */
    select?: vehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicles
     */
    omit?: vehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehiclesInclude<ExtArgs> | null
    /**
     * Filter, which vehicles to fetch.
     */
    where: vehiclesWhereUniqueInput
  }

  /**
   * vehicles findFirst
   */
  export type vehiclesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicles
     */
    select?: vehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicles
     */
    omit?: vehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehiclesInclude<ExtArgs> | null
    /**
     * Filter, which vehicles to fetch.
     */
    where?: vehiclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vehicles to fetch.
     */
    orderBy?: vehiclesOrderByWithRelationInput | vehiclesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vehicles.
     */
    cursor?: vehiclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vehicles.
     */
    distinct?: VehiclesScalarFieldEnum | VehiclesScalarFieldEnum[]
  }

  /**
   * vehicles findFirstOrThrow
   */
  export type vehiclesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicles
     */
    select?: vehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicles
     */
    omit?: vehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehiclesInclude<ExtArgs> | null
    /**
     * Filter, which vehicles to fetch.
     */
    where?: vehiclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vehicles to fetch.
     */
    orderBy?: vehiclesOrderByWithRelationInput | vehiclesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vehicles.
     */
    cursor?: vehiclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vehicles.
     */
    distinct?: VehiclesScalarFieldEnum | VehiclesScalarFieldEnum[]
  }

  /**
   * vehicles findMany
   */
  export type vehiclesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicles
     */
    select?: vehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicles
     */
    omit?: vehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehiclesInclude<ExtArgs> | null
    /**
     * Filter, which vehicles to fetch.
     */
    where?: vehiclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vehicles to fetch.
     */
    orderBy?: vehiclesOrderByWithRelationInput | vehiclesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vehicles.
     */
    cursor?: vehiclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vehicles.
     */
    skip?: number
    distinct?: VehiclesScalarFieldEnum | VehiclesScalarFieldEnum[]
  }

  /**
   * vehicles create
   */
  export type vehiclesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicles
     */
    select?: vehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicles
     */
    omit?: vehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehiclesInclude<ExtArgs> | null
    /**
     * The data needed to create a vehicles.
     */
    data: XOR<vehiclesCreateInput, vehiclesUncheckedCreateInput>
  }

  /**
   * vehicles createMany
   */
  export type vehiclesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vehicles.
     */
    data: vehiclesCreateManyInput | vehiclesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vehicles createManyAndReturn
   */
  export type vehiclesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicles
     */
    select?: vehiclesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the vehicles
     */
    omit?: vehiclesOmit<ExtArgs> | null
    /**
     * The data used to create many vehicles.
     */
    data: vehiclesCreateManyInput | vehiclesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vehicles update
   */
  export type vehiclesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicles
     */
    select?: vehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicles
     */
    omit?: vehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehiclesInclude<ExtArgs> | null
    /**
     * The data needed to update a vehicles.
     */
    data: XOR<vehiclesUpdateInput, vehiclesUncheckedUpdateInput>
    /**
     * Choose, which vehicles to update.
     */
    where: vehiclesWhereUniqueInput
  }

  /**
   * vehicles updateMany
   */
  export type vehiclesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vehicles.
     */
    data: XOR<vehiclesUpdateManyMutationInput, vehiclesUncheckedUpdateManyInput>
    /**
     * Filter which vehicles to update
     */
    where?: vehiclesWhereInput
    /**
     * Limit how many vehicles to update.
     */
    limit?: number
  }

  /**
   * vehicles updateManyAndReturn
   */
  export type vehiclesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicles
     */
    select?: vehiclesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the vehicles
     */
    omit?: vehiclesOmit<ExtArgs> | null
    /**
     * The data used to update vehicles.
     */
    data: XOR<vehiclesUpdateManyMutationInput, vehiclesUncheckedUpdateManyInput>
    /**
     * Filter which vehicles to update
     */
    where?: vehiclesWhereInput
    /**
     * Limit how many vehicles to update.
     */
    limit?: number
  }

  /**
   * vehicles upsert
   */
  export type vehiclesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicles
     */
    select?: vehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicles
     */
    omit?: vehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehiclesInclude<ExtArgs> | null
    /**
     * The filter to search for the vehicles to update in case it exists.
     */
    where: vehiclesWhereUniqueInput
    /**
     * In case the vehicles found by the `where` argument doesn't exist, create a new vehicles with this data.
     */
    create: XOR<vehiclesCreateInput, vehiclesUncheckedCreateInput>
    /**
     * In case the vehicles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vehiclesUpdateInput, vehiclesUncheckedUpdateInput>
  }

  /**
   * vehicles delete
   */
  export type vehiclesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicles
     */
    select?: vehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicles
     */
    omit?: vehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehiclesInclude<ExtArgs> | null
    /**
     * Filter which vehicles to delete.
     */
    where: vehiclesWhereUniqueInput
  }

  /**
   * vehicles deleteMany
   */
  export type vehiclesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vehicles to delete
     */
    where?: vehiclesWhereInput
    /**
     * Limit how many vehicles to delete.
     */
    limit?: number
  }

  /**
   * vehicles.damages
   */
  export type vehicles$damagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the damages
     */
    select?: damagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the damages
     */
    omit?: damagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: damagesInclude<ExtArgs> | null
    where?: damagesWhereInput
    orderBy?: damagesOrderByWithRelationInput | damagesOrderByWithRelationInput[]
    cursor?: damagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DamagesScalarFieldEnum | DamagesScalarFieldEnum[]
  }

  /**
   * vehicles.services
   */
  export type vehicles$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicesInclude<ExtArgs> | null
    where?: servicesWhereInput
    orderBy?: servicesOrderByWithRelationInput | servicesOrderByWithRelationInput[]
    cursor?: servicesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }

  /**
   * vehicles.vehicle_logs
   */
  export type vehicles$vehicle_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_logs
     */
    select?: vehicle_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicle_logs
     */
    omit?: vehicle_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehicle_logsInclude<ExtArgs> | null
    where?: vehicle_logsWhereInput
    orderBy?: vehicle_logsOrderByWithRelationInput | vehicle_logsOrderByWithRelationInput[]
    cursor?: vehicle_logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Vehicle_logsScalarFieldEnum | Vehicle_logsScalarFieldEnum[]
  }

  /**
   * vehicles.work_force
   */
  export type vehicles$work_forceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_force
     */
    select?: work_forceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_force
     */
    omit?: work_forceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_forceInclude<ExtArgs> | null
    where?: work_forceWhereInput
    orderBy?: work_forceOrderByWithRelationInput | work_forceOrderByWithRelationInput[]
    cursor?: work_forceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Work_forceScalarFieldEnum | Work_forceScalarFieldEnum[]
  }

  /**
   * vehicles without action
   */
  export type vehiclesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicles
     */
    select?: vehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicles
     */
    omit?: vehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehiclesInclude<ExtArgs> | null
  }


  /**
   * Model work_force
   */

  export type AggregateWork_force = {
    _count: Work_forceCountAggregateOutputType | null
    _avg: Work_forceAvgAggregateOutputType | null
    _sum: Work_forceSumAggregateOutputType | null
    _min: Work_forceMinAggregateOutputType | null
    _max: Work_forceMaxAggregateOutputType | null
  }

  export type Work_forceAvgAggregateOutputType = {
    id: number | null
    id_base: number | null
    id_vehicle: number | null
    id_drive: number | null
    id_persone_one: number | null
    id_persone_two: number | null
    id_presone_trhee: number | null
  }

  export type Work_forceSumAggregateOutputType = {
    id: number | null
    id_base: number | null
    id_vehicle: number | null
    id_drive: number | null
    id_persone_one: number | null
    id_persone_two: number | null
    id_presone_trhee: number | null
  }

  export type Work_forceMinAggregateOutputType = {
    id: number | null
    work_shift: string | null
    id_base: number | null
    id_vehicle: number | null
    id_drive: number | null
    id_persone_one: number | null
    id_persone_two: number | null
    id_presone_trhee: number | null
    extras_persone: string | null
    date_work_shift: Date | null
    notes: string | null
  }

  export type Work_forceMaxAggregateOutputType = {
    id: number | null
    work_shift: string | null
    id_base: number | null
    id_vehicle: number | null
    id_drive: number | null
    id_persone_one: number | null
    id_persone_two: number | null
    id_presone_trhee: number | null
    extras_persone: string | null
    date_work_shift: Date | null
    notes: string | null
  }

  export type Work_forceCountAggregateOutputType = {
    id: number
    work_shift: number
    id_base: number
    id_vehicle: number
    id_drive: number
    id_persone_one: number
    id_persone_two: number
    id_presone_trhee: number
    extras_persone: number
    date_work_shift: number
    notes: number
    _all: number
  }


  export type Work_forceAvgAggregateInputType = {
    id?: true
    id_base?: true
    id_vehicle?: true
    id_drive?: true
    id_persone_one?: true
    id_persone_two?: true
    id_presone_trhee?: true
  }

  export type Work_forceSumAggregateInputType = {
    id?: true
    id_base?: true
    id_vehicle?: true
    id_drive?: true
    id_persone_one?: true
    id_persone_two?: true
    id_presone_trhee?: true
  }

  export type Work_forceMinAggregateInputType = {
    id?: true
    work_shift?: true
    id_base?: true
    id_vehicle?: true
    id_drive?: true
    id_persone_one?: true
    id_persone_two?: true
    id_presone_trhee?: true
    extras_persone?: true
    date_work_shift?: true
    notes?: true
  }

  export type Work_forceMaxAggregateInputType = {
    id?: true
    work_shift?: true
    id_base?: true
    id_vehicle?: true
    id_drive?: true
    id_persone_one?: true
    id_persone_two?: true
    id_presone_trhee?: true
    extras_persone?: true
    date_work_shift?: true
    notes?: true
  }

  export type Work_forceCountAggregateInputType = {
    id?: true
    work_shift?: true
    id_base?: true
    id_vehicle?: true
    id_drive?: true
    id_persone_one?: true
    id_persone_two?: true
    id_presone_trhee?: true
    extras_persone?: true
    date_work_shift?: true
    notes?: true
    _all?: true
  }

  export type Work_forceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which work_force to aggregate.
     */
    where?: work_forceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of work_forces to fetch.
     */
    orderBy?: work_forceOrderByWithRelationInput | work_forceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: work_forceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` work_forces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` work_forces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned work_forces
    **/
    _count?: true | Work_forceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Work_forceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Work_forceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Work_forceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Work_forceMaxAggregateInputType
  }

  export type GetWork_forceAggregateType<T extends Work_forceAggregateArgs> = {
        [P in keyof T & keyof AggregateWork_force]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWork_force[P]>
      : GetScalarType<T[P], AggregateWork_force[P]>
  }




  export type work_forceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: work_forceWhereInput
    orderBy?: work_forceOrderByWithAggregationInput | work_forceOrderByWithAggregationInput[]
    by: Work_forceScalarFieldEnum[] | Work_forceScalarFieldEnum
    having?: work_forceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Work_forceCountAggregateInputType | true
    _avg?: Work_forceAvgAggregateInputType
    _sum?: Work_forceSumAggregateInputType
    _min?: Work_forceMinAggregateInputType
    _max?: Work_forceMaxAggregateInputType
  }

  export type Work_forceGroupByOutputType = {
    id: number
    work_shift: string
    id_base: number | null
    id_vehicle: number | null
    id_drive: number | null
    id_persone_one: number
    id_persone_two: number | null
    id_presone_trhee: number | null
    extras_persone: string | null
    date_work_shift: Date
    notes: string | null
    _count: Work_forceCountAggregateOutputType | null
    _avg: Work_forceAvgAggregateOutputType | null
    _sum: Work_forceSumAggregateOutputType | null
    _min: Work_forceMinAggregateOutputType | null
    _max: Work_forceMaxAggregateOutputType | null
  }

  type GetWork_forceGroupByPayload<T extends work_forceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Work_forceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Work_forceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Work_forceGroupByOutputType[P]>
            : GetScalarType<T[P], Work_forceGroupByOutputType[P]>
        }
      >
    >


  export type work_forceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    work_shift?: boolean
    id_base?: boolean
    id_vehicle?: boolean
    id_drive?: boolean
    id_persone_one?: boolean
    id_persone_two?: boolean
    id_presone_trhee?: boolean
    extras_persone?: boolean
    date_work_shift?: boolean
    notes?: boolean
    base?: boolean | work_force$baseArgs<ExtArgs>
    vehicles?: boolean | work_force$vehiclesArgs<ExtArgs>
  }, ExtArgs["result"]["work_force"]>

  export type work_forceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    work_shift?: boolean
    id_base?: boolean
    id_vehicle?: boolean
    id_drive?: boolean
    id_persone_one?: boolean
    id_persone_two?: boolean
    id_presone_trhee?: boolean
    extras_persone?: boolean
    date_work_shift?: boolean
    notes?: boolean
    base?: boolean | work_force$baseArgs<ExtArgs>
    vehicles?: boolean | work_force$vehiclesArgs<ExtArgs>
  }, ExtArgs["result"]["work_force"]>

  export type work_forceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    work_shift?: boolean
    id_base?: boolean
    id_vehicle?: boolean
    id_drive?: boolean
    id_persone_one?: boolean
    id_persone_two?: boolean
    id_presone_trhee?: boolean
    extras_persone?: boolean
    date_work_shift?: boolean
    notes?: boolean
    base?: boolean | work_force$baseArgs<ExtArgs>
    vehicles?: boolean | work_force$vehiclesArgs<ExtArgs>
  }, ExtArgs["result"]["work_force"]>

  export type work_forceSelectScalar = {
    id?: boolean
    work_shift?: boolean
    id_base?: boolean
    id_vehicle?: boolean
    id_drive?: boolean
    id_persone_one?: boolean
    id_persone_two?: boolean
    id_presone_trhee?: boolean
    extras_persone?: boolean
    date_work_shift?: boolean
    notes?: boolean
  }

  export type work_forceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "work_shift" | "id_base" | "id_vehicle" | "id_drive" | "id_persone_one" | "id_persone_two" | "id_presone_trhee" | "extras_persone" | "date_work_shift" | "notes", ExtArgs["result"]["work_force"]>
  export type work_forceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    base?: boolean | work_force$baseArgs<ExtArgs>
    vehicles?: boolean | work_force$vehiclesArgs<ExtArgs>
  }
  export type work_forceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    base?: boolean | work_force$baseArgs<ExtArgs>
    vehicles?: boolean | work_force$vehiclesArgs<ExtArgs>
  }
  export type work_forceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    base?: boolean | work_force$baseArgs<ExtArgs>
    vehicles?: boolean | work_force$vehiclesArgs<ExtArgs>
  }

  export type $work_forcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "work_force"
    objects: {
      base: Prisma.$basePayload<ExtArgs> | null
      vehicles: Prisma.$vehiclesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      work_shift: string
      id_base: number | null
      id_vehicle: number | null
      id_drive: number | null
      id_persone_one: number
      id_persone_two: number | null
      id_presone_trhee: number | null
      extras_persone: string | null
      date_work_shift: Date
      notes: string | null
    }, ExtArgs["result"]["work_force"]>
    composites: {}
  }

  type work_forceGetPayload<S extends boolean | null | undefined | work_forceDefaultArgs> = $Result.GetResult<Prisma.$work_forcePayload, S>

  type work_forceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<work_forceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Work_forceCountAggregateInputType | true
    }

  export interface work_forceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['work_force'], meta: { name: 'work_force' } }
    /**
     * Find zero or one Work_force that matches the filter.
     * @param {work_forceFindUniqueArgs} args - Arguments to find a Work_force
     * @example
     * // Get one Work_force
     * const work_force = await prisma.work_force.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends work_forceFindUniqueArgs>(args: SelectSubset<T, work_forceFindUniqueArgs<ExtArgs>>): Prisma__work_forceClient<$Result.GetResult<Prisma.$work_forcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Work_force that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {work_forceFindUniqueOrThrowArgs} args - Arguments to find a Work_force
     * @example
     * // Get one Work_force
     * const work_force = await prisma.work_force.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends work_forceFindUniqueOrThrowArgs>(args: SelectSubset<T, work_forceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__work_forceClient<$Result.GetResult<Prisma.$work_forcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Work_force that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {work_forceFindFirstArgs} args - Arguments to find a Work_force
     * @example
     * // Get one Work_force
     * const work_force = await prisma.work_force.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends work_forceFindFirstArgs>(args?: SelectSubset<T, work_forceFindFirstArgs<ExtArgs>>): Prisma__work_forceClient<$Result.GetResult<Prisma.$work_forcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Work_force that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {work_forceFindFirstOrThrowArgs} args - Arguments to find a Work_force
     * @example
     * // Get one Work_force
     * const work_force = await prisma.work_force.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends work_forceFindFirstOrThrowArgs>(args?: SelectSubset<T, work_forceFindFirstOrThrowArgs<ExtArgs>>): Prisma__work_forceClient<$Result.GetResult<Prisma.$work_forcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Work_forces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {work_forceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Work_forces
     * const work_forces = await prisma.work_force.findMany()
     * 
     * // Get first 10 Work_forces
     * const work_forces = await prisma.work_force.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const work_forceWithIdOnly = await prisma.work_force.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends work_forceFindManyArgs>(args?: SelectSubset<T, work_forceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$work_forcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Work_force.
     * @param {work_forceCreateArgs} args - Arguments to create a Work_force.
     * @example
     * // Create one Work_force
     * const Work_force = await prisma.work_force.create({
     *   data: {
     *     // ... data to create a Work_force
     *   }
     * })
     * 
     */
    create<T extends work_forceCreateArgs>(args: SelectSubset<T, work_forceCreateArgs<ExtArgs>>): Prisma__work_forceClient<$Result.GetResult<Prisma.$work_forcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Work_forces.
     * @param {work_forceCreateManyArgs} args - Arguments to create many Work_forces.
     * @example
     * // Create many Work_forces
     * const work_force = await prisma.work_force.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends work_forceCreateManyArgs>(args?: SelectSubset<T, work_forceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Work_forces and returns the data saved in the database.
     * @param {work_forceCreateManyAndReturnArgs} args - Arguments to create many Work_forces.
     * @example
     * // Create many Work_forces
     * const work_force = await prisma.work_force.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Work_forces and only return the `id`
     * const work_forceWithIdOnly = await prisma.work_force.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends work_forceCreateManyAndReturnArgs>(args?: SelectSubset<T, work_forceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$work_forcePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Work_force.
     * @param {work_forceDeleteArgs} args - Arguments to delete one Work_force.
     * @example
     * // Delete one Work_force
     * const Work_force = await prisma.work_force.delete({
     *   where: {
     *     // ... filter to delete one Work_force
     *   }
     * })
     * 
     */
    delete<T extends work_forceDeleteArgs>(args: SelectSubset<T, work_forceDeleteArgs<ExtArgs>>): Prisma__work_forceClient<$Result.GetResult<Prisma.$work_forcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Work_force.
     * @param {work_forceUpdateArgs} args - Arguments to update one Work_force.
     * @example
     * // Update one Work_force
     * const work_force = await prisma.work_force.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends work_forceUpdateArgs>(args: SelectSubset<T, work_forceUpdateArgs<ExtArgs>>): Prisma__work_forceClient<$Result.GetResult<Prisma.$work_forcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Work_forces.
     * @param {work_forceDeleteManyArgs} args - Arguments to filter Work_forces to delete.
     * @example
     * // Delete a few Work_forces
     * const { count } = await prisma.work_force.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends work_forceDeleteManyArgs>(args?: SelectSubset<T, work_forceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Work_forces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {work_forceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Work_forces
     * const work_force = await prisma.work_force.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends work_forceUpdateManyArgs>(args: SelectSubset<T, work_forceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Work_forces and returns the data updated in the database.
     * @param {work_forceUpdateManyAndReturnArgs} args - Arguments to update many Work_forces.
     * @example
     * // Update many Work_forces
     * const work_force = await prisma.work_force.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Work_forces and only return the `id`
     * const work_forceWithIdOnly = await prisma.work_force.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends work_forceUpdateManyAndReturnArgs>(args: SelectSubset<T, work_forceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$work_forcePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Work_force.
     * @param {work_forceUpsertArgs} args - Arguments to update or create a Work_force.
     * @example
     * // Update or create a Work_force
     * const work_force = await prisma.work_force.upsert({
     *   create: {
     *     // ... data to create a Work_force
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Work_force we want to update
     *   }
     * })
     */
    upsert<T extends work_forceUpsertArgs>(args: SelectSubset<T, work_forceUpsertArgs<ExtArgs>>): Prisma__work_forceClient<$Result.GetResult<Prisma.$work_forcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Work_forces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {work_forceCountArgs} args - Arguments to filter Work_forces to count.
     * @example
     * // Count the number of Work_forces
     * const count = await prisma.work_force.count({
     *   where: {
     *     // ... the filter for the Work_forces we want to count
     *   }
     * })
    **/
    count<T extends work_forceCountArgs>(
      args?: Subset<T, work_forceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Work_forceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Work_force.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Work_forceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Work_forceAggregateArgs>(args: Subset<T, Work_forceAggregateArgs>): Prisma.PrismaPromise<GetWork_forceAggregateType<T>>

    /**
     * Group by Work_force.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {work_forceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends work_forceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: work_forceGroupByArgs['orderBy'] }
        : { orderBy?: work_forceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, work_forceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWork_forceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the work_force model
   */
  readonly fields: work_forceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for work_force.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__work_forceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    base<T extends work_force$baseArgs<ExtArgs> = {}>(args?: Subset<T, work_force$baseArgs<ExtArgs>>): Prisma__baseClient<$Result.GetResult<Prisma.$basePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    vehicles<T extends work_force$vehiclesArgs<ExtArgs> = {}>(args?: Subset<T, work_force$vehiclesArgs<ExtArgs>>): Prisma__vehiclesClient<$Result.GetResult<Prisma.$vehiclesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the work_force model
   */
  interface work_forceFieldRefs {
    readonly id: FieldRef<"work_force", 'Int'>
    readonly work_shift: FieldRef<"work_force", 'String'>
    readonly id_base: FieldRef<"work_force", 'Int'>
    readonly id_vehicle: FieldRef<"work_force", 'Int'>
    readonly id_drive: FieldRef<"work_force", 'Int'>
    readonly id_persone_one: FieldRef<"work_force", 'Int'>
    readonly id_persone_two: FieldRef<"work_force", 'Int'>
    readonly id_presone_trhee: FieldRef<"work_force", 'Int'>
    readonly extras_persone: FieldRef<"work_force", 'String'>
    readonly date_work_shift: FieldRef<"work_force", 'DateTime'>
    readonly notes: FieldRef<"work_force", 'String'>
  }
    

  // Custom InputTypes
  /**
   * work_force findUnique
   */
  export type work_forceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_force
     */
    select?: work_forceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_force
     */
    omit?: work_forceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_forceInclude<ExtArgs> | null
    /**
     * Filter, which work_force to fetch.
     */
    where: work_forceWhereUniqueInput
  }

  /**
   * work_force findUniqueOrThrow
   */
  export type work_forceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_force
     */
    select?: work_forceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_force
     */
    omit?: work_forceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_forceInclude<ExtArgs> | null
    /**
     * Filter, which work_force to fetch.
     */
    where: work_forceWhereUniqueInput
  }

  /**
   * work_force findFirst
   */
  export type work_forceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_force
     */
    select?: work_forceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_force
     */
    omit?: work_forceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_forceInclude<ExtArgs> | null
    /**
     * Filter, which work_force to fetch.
     */
    where?: work_forceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of work_forces to fetch.
     */
    orderBy?: work_forceOrderByWithRelationInput | work_forceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for work_forces.
     */
    cursor?: work_forceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` work_forces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` work_forces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of work_forces.
     */
    distinct?: Work_forceScalarFieldEnum | Work_forceScalarFieldEnum[]
  }

  /**
   * work_force findFirstOrThrow
   */
  export type work_forceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_force
     */
    select?: work_forceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_force
     */
    omit?: work_forceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_forceInclude<ExtArgs> | null
    /**
     * Filter, which work_force to fetch.
     */
    where?: work_forceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of work_forces to fetch.
     */
    orderBy?: work_forceOrderByWithRelationInput | work_forceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for work_forces.
     */
    cursor?: work_forceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` work_forces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` work_forces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of work_forces.
     */
    distinct?: Work_forceScalarFieldEnum | Work_forceScalarFieldEnum[]
  }

  /**
   * work_force findMany
   */
  export type work_forceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_force
     */
    select?: work_forceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_force
     */
    omit?: work_forceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_forceInclude<ExtArgs> | null
    /**
     * Filter, which work_forces to fetch.
     */
    where?: work_forceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of work_forces to fetch.
     */
    orderBy?: work_forceOrderByWithRelationInput | work_forceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing work_forces.
     */
    cursor?: work_forceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` work_forces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` work_forces.
     */
    skip?: number
    distinct?: Work_forceScalarFieldEnum | Work_forceScalarFieldEnum[]
  }

  /**
   * work_force create
   */
  export type work_forceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_force
     */
    select?: work_forceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_force
     */
    omit?: work_forceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_forceInclude<ExtArgs> | null
    /**
     * The data needed to create a work_force.
     */
    data: XOR<work_forceCreateInput, work_forceUncheckedCreateInput>
  }

  /**
   * work_force createMany
   */
  export type work_forceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many work_forces.
     */
    data: work_forceCreateManyInput | work_forceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * work_force createManyAndReturn
   */
  export type work_forceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_force
     */
    select?: work_forceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the work_force
     */
    omit?: work_forceOmit<ExtArgs> | null
    /**
     * The data used to create many work_forces.
     */
    data: work_forceCreateManyInput | work_forceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_forceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * work_force update
   */
  export type work_forceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_force
     */
    select?: work_forceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_force
     */
    omit?: work_forceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_forceInclude<ExtArgs> | null
    /**
     * The data needed to update a work_force.
     */
    data: XOR<work_forceUpdateInput, work_forceUncheckedUpdateInput>
    /**
     * Choose, which work_force to update.
     */
    where: work_forceWhereUniqueInput
  }

  /**
   * work_force updateMany
   */
  export type work_forceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update work_forces.
     */
    data: XOR<work_forceUpdateManyMutationInput, work_forceUncheckedUpdateManyInput>
    /**
     * Filter which work_forces to update
     */
    where?: work_forceWhereInput
    /**
     * Limit how many work_forces to update.
     */
    limit?: number
  }

  /**
   * work_force updateManyAndReturn
   */
  export type work_forceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_force
     */
    select?: work_forceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the work_force
     */
    omit?: work_forceOmit<ExtArgs> | null
    /**
     * The data used to update work_forces.
     */
    data: XOR<work_forceUpdateManyMutationInput, work_forceUncheckedUpdateManyInput>
    /**
     * Filter which work_forces to update
     */
    where?: work_forceWhereInput
    /**
     * Limit how many work_forces to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_forceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * work_force upsert
   */
  export type work_forceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_force
     */
    select?: work_forceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_force
     */
    omit?: work_forceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_forceInclude<ExtArgs> | null
    /**
     * The filter to search for the work_force to update in case it exists.
     */
    where: work_forceWhereUniqueInput
    /**
     * In case the work_force found by the `where` argument doesn't exist, create a new work_force with this data.
     */
    create: XOR<work_forceCreateInput, work_forceUncheckedCreateInput>
    /**
     * In case the work_force was found with the provided `where` argument, update it with this data.
     */
    update: XOR<work_forceUpdateInput, work_forceUncheckedUpdateInput>
  }

  /**
   * work_force delete
   */
  export type work_forceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_force
     */
    select?: work_forceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_force
     */
    omit?: work_forceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_forceInclude<ExtArgs> | null
    /**
     * Filter which work_force to delete.
     */
    where: work_forceWhereUniqueInput
  }

  /**
   * work_force deleteMany
   */
  export type work_forceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which work_forces to delete
     */
    where?: work_forceWhereInput
    /**
     * Limit how many work_forces to delete.
     */
    limit?: number
  }

  /**
   * work_force.base
   */
  export type work_force$baseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the base
     */
    select?: baseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the base
     */
    omit?: baseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: baseInclude<ExtArgs> | null
    where?: baseWhereInput
  }

  /**
   * work_force.vehicles
   */
  export type work_force$vehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicles
     */
    select?: vehiclesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vehicles
     */
    omit?: vehiclesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vehiclesInclude<ExtArgs> | null
    where?: vehiclesWhereInput
  }

  /**
   * work_force without action
   */
  export type work_forceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_force
     */
    select?: work_forceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_force
     */
    omit?: work_forceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: work_forceInclude<ExtArgs> | null
  }


  /**
   * Model work_shift
   */

  export type AggregateWork_shift = {
    _count: Work_shiftCountAggregateOutputType | null
    _avg: Work_shiftAvgAggregateOutputType | null
    _sum: Work_shiftSumAggregateOutputType | null
    _min: Work_shiftMinAggregateOutputType | null
    _max: Work_shiftMaxAggregateOutputType | null
  }

  export type Work_shiftAvgAggregateOutputType = {
    id: number | null
    operative_personal: number | null
    in_operative_personal: number | null
    time_start: number | null
    working_time: number | null
  }

  export type Work_shiftSumAggregateOutputType = {
    id: number | null
    operative_personal: number | null
    in_operative_personal: number | null
    time_start: number | null
    working_time: number | null
  }

  export type Work_shiftMinAggregateOutputType = {
    id: number | null
    name: string | null
    operative_personal: number | null
    in_operative_personal: number | null
    workday: string | null
    time_start: number | null
    working_time: number | null
  }

  export type Work_shiftMaxAggregateOutputType = {
    id: number | null
    name: string | null
    operative_personal: number | null
    in_operative_personal: number | null
    workday: string | null
    time_start: number | null
    working_time: number | null
  }

  export type Work_shiftCountAggregateOutputType = {
    id: number
    name: number
    operative_personal: number
    in_operative_personal: number
    workday: number
    time_start: number
    working_time: number
    _all: number
  }


  export type Work_shiftAvgAggregateInputType = {
    id?: true
    operative_personal?: true
    in_operative_personal?: true
    time_start?: true
    working_time?: true
  }

  export type Work_shiftSumAggregateInputType = {
    id?: true
    operative_personal?: true
    in_operative_personal?: true
    time_start?: true
    working_time?: true
  }

  export type Work_shiftMinAggregateInputType = {
    id?: true
    name?: true
    operative_personal?: true
    in_operative_personal?: true
    workday?: true
    time_start?: true
    working_time?: true
  }

  export type Work_shiftMaxAggregateInputType = {
    id?: true
    name?: true
    operative_personal?: true
    in_operative_personal?: true
    workday?: true
    time_start?: true
    working_time?: true
  }

  export type Work_shiftCountAggregateInputType = {
    id?: true
    name?: true
    operative_personal?: true
    in_operative_personal?: true
    workday?: true
    time_start?: true
    working_time?: true
    _all?: true
  }

  export type Work_shiftAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which work_shift to aggregate.
     */
    where?: work_shiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of work_shifts to fetch.
     */
    orderBy?: work_shiftOrderByWithRelationInput | work_shiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: work_shiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` work_shifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` work_shifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned work_shifts
    **/
    _count?: true | Work_shiftCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Work_shiftAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Work_shiftSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Work_shiftMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Work_shiftMaxAggregateInputType
  }

  export type GetWork_shiftAggregateType<T extends Work_shiftAggregateArgs> = {
        [P in keyof T & keyof AggregateWork_shift]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWork_shift[P]>
      : GetScalarType<T[P], AggregateWork_shift[P]>
  }




  export type work_shiftGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: work_shiftWhereInput
    orderBy?: work_shiftOrderByWithAggregationInput | work_shiftOrderByWithAggregationInput[]
    by: Work_shiftScalarFieldEnum[] | Work_shiftScalarFieldEnum
    having?: work_shiftScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Work_shiftCountAggregateInputType | true
    _avg?: Work_shiftAvgAggregateInputType
    _sum?: Work_shiftSumAggregateInputType
    _min?: Work_shiftMinAggregateInputType
    _max?: Work_shiftMaxAggregateInputType
  }

  export type Work_shiftGroupByOutputType = {
    id: number
    name: string
    operative_personal: number | null
    in_operative_personal: number | null
    workday: string
    time_start: number
    working_time: number
    _count: Work_shiftCountAggregateOutputType | null
    _avg: Work_shiftAvgAggregateOutputType | null
    _sum: Work_shiftSumAggregateOutputType | null
    _min: Work_shiftMinAggregateOutputType | null
    _max: Work_shiftMaxAggregateOutputType | null
  }

  type GetWork_shiftGroupByPayload<T extends work_shiftGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Work_shiftGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Work_shiftGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Work_shiftGroupByOutputType[P]>
            : GetScalarType<T[P], Work_shiftGroupByOutputType[P]>
        }
      >
    >


  export type work_shiftSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    operative_personal?: boolean
    in_operative_personal?: boolean
    workday?: boolean
    time_start?: boolean
    working_time?: boolean
  }, ExtArgs["result"]["work_shift"]>

  export type work_shiftSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    operative_personal?: boolean
    in_operative_personal?: boolean
    workday?: boolean
    time_start?: boolean
    working_time?: boolean
  }, ExtArgs["result"]["work_shift"]>

  export type work_shiftSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    operative_personal?: boolean
    in_operative_personal?: boolean
    workday?: boolean
    time_start?: boolean
    working_time?: boolean
  }, ExtArgs["result"]["work_shift"]>

  export type work_shiftSelectScalar = {
    id?: boolean
    name?: boolean
    operative_personal?: boolean
    in_operative_personal?: boolean
    workday?: boolean
    time_start?: boolean
    working_time?: boolean
  }

  export type work_shiftOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "operative_personal" | "in_operative_personal" | "workday" | "time_start" | "working_time", ExtArgs["result"]["work_shift"]>

  export type $work_shiftPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "work_shift"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      operative_personal: number | null
      in_operative_personal: number | null
      workday: string
      time_start: number
      working_time: number
    }, ExtArgs["result"]["work_shift"]>
    composites: {}
  }

  type work_shiftGetPayload<S extends boolean | null | undefined | work_shiftDefaultArgs> = $Result.GetResult<Prisma.$work_shiftPayload, S>

  type work_shiftCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<work_shiftFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Work_shiftCountAggregateInputType | true
    }

  export interface work_shiftDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['work_shift'], meta: { name: 'work_shift' } }
    /**
     * Find zero or one Work_shift that matches the filter.
     * @param {work_shiftFindUniqueArgs} args - Arguments to find a Work_shift
     * @example
     * // Get one Work_shift
     * const work_shift = await prisma.work_shift.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends work_shiftFindUniqueArgs>(args: SelectSubset<T, work_shiftFindUniqueArgs<ExtArgs>>): Prisma__work_shiftClient<$Result.GetResult<Prisma.$work_shiftPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Work_shift that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {work_shiftFindUniqueOrThrowArgs} args - Arguments to find a Work_shift
     * @example
     * // Get one Work_shift
     * const work_shift = await prisma.work_shift.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends work_shiftFindUniqueOrThrowArgs>(args: SelectSubset<T, work_shiftFindUniqueOrThrowArgs<ExtArgs>>): Prisma__work_shiftClient<$Result.GetResult<Prisma.$work_shiftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Work_shift that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {work_shiftFindFirstArgs} args - Arguments to find a Work_shift
     * @example
     * // Get one Work_shift
     * const work_shift = await prisma.work_shift.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends work_shiftFindFirstArgs>(args?: SelectSubset<T, work_shiftFindFirstArgs<ExtArgs>>): Prisma__work_shiftClient<$Result.GetResult<Prisma.$work_shiftPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Work_shift that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {work_shiftFindFirstOrThrowArgs} args - Arguments to find a Work_shift
     * @example
     * // Get one Work_shift
     * const work_shift = await prisma.work_shift.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends work_shiftFindFirstOrThrowArgs>(args?: SelectSubset<T, work_shiftFindFirstOrThrowArgs<ExtArgs>>): Prisma__work_shiftClient<$Result.GetResult<Prisma.$work_shiftPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Work_shifts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {work_shiftFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Work_shifts
     * const work_shifts = await prisma.work_shift.findMany()
     * 
     * // Get first 10 Work_shifts
     * const work_shifts = await prisma.work_shift.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const work_shiftWithIdOnly = await prisma.work_shift.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends work_shiftFindManyArgs>(args?: SelectSubset<T, work_shiftFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$work_shiftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Work_shift.
     * @param {work_shiftCreateArgs} args - Arguments to create a Work_shift.
     * @example
     * // Create one Work_shift
     * const Work_shift = await prisma.work_shift.create({
     *   data: {
     *     // ... data to create a Work_shift
     *   }
     * })
     * 
     */
    create<T extends work_shiftCreateArgs>(args: SelectSubset<T, work_shiftCreateArgs<ExtArgs>>): Prisma__work_shiftClient<$Result.GetResult<Prisma.$work_shiftPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Work_shifts.
     * @param {work_shiftCreateManyArgs} args - Arguments to create many Work_shifts.
     * @example
     * // Create many Work_shifts
     * const work_shift = await prisma.work_shift.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends work_shiftCreateManyArgs>(args?: SelectSubset<T, work_shiftCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Work_shifts and returns the data saved in the database.
     * @param {work_shiftCreateManyAndReturnArgs} args - Arguments to create many Work_shifts.
     * @example
     * // Create many Work_shifts
     * const work_shift = await prisma.work_shift.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Work_shifts and only return the `id`
     * const work_shiftWithIdOnly = await prisma.work_shift.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends work_shiftCreateManyAndReturnArgs>(args?: SelectSubset<T, work_shiftCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$work_shiftPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Work_shift.
     * @param {work_shiftDeleteArgs} args - Arguments to delete one Work_shift.
     * @example
     * // Delete one Work_shift
     * const Work_shift = await prisma.work_shift.delete({
     *   where: {
     *     // ... filter to delete one Work_shift
     *   }
     * })
     * 
     */
    delete<T extends work_shiftDeleteArgs>(args: SelectSubset<T, work_shiftDeleteArgs<ExtArgs>>): Prisma__work_shiftClient<$Result.GetResult<Prisma.$work_shiftPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Work_shift.
     * @param {work_shiftUpdateArgs} args - Arguments to update one Work_shift.
     * @example
     * // Update one Work_shift
     * const work_shift = await prisma.work_shift.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends work_shiftUpdateArgs>(args: SelectSubset<T, work_shiftUpdateArgs<ExtArgs>>): Prisma__work_shiftClient<$Result.GetResult<Prisma.$work_shiftPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Work_shifts.
     * @param {work_shiftDeleteManyArgs} args - Arguments to filter Work_shifts to delete.
     * @example
     * // Delete a few Work_shifts
     * const { count } = await prisma.work_shift.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends work_shiftDeleteManyArgs>(args?: SelectSubset<T, work_shiftDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Work_shifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {work_shiftUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Work_shifts
     * const work_shift = await prisma.work_shift.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends work_shiftUpdateManyArgs>(args: SelectSubset<T, work_shiftUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Work_shifts and returns the data updated in the database.
     * @param {work_shiftUpdateManyAndReturnArgs} args - Arguments to update many Work_shifts.
     * @example
     * // Update many Work_shifts
     * const work_shift = await prisma.work_shift.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Work_shifts and only return the `id`
     * const work_shiftWithIdOnly = await prisma.work_shift.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends work_shiftUpdateManyAndReturnArgs>(args: SelectSubset<T, work_shiftUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$work_shiftPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Work_shift.
     * @param {work_shiftUpsertArgs} args - Arguments to update or create a Work_shift.
     * @example
     * // Update or create a Work_shift
     * const work_shift = await prisma.work_shift.upsert({
     *   create: {
     *     // ... data to create a Work_shift
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Work_shift we want to update
     *   }
     * })
     */
    upsert<T extends work_shiftUpsertArgs>(args: SelectSubset<T, work_shiftUpsertArgs<ExtArgs>>): Prisma__work_shiftClient<$Result.GetResult<Prisma.$work_shiftPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Work_shifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {work_shiftCountArgs} args - Arguments to filter Work_shifts to count.
     * @example
     * // Count the number of Work_shifts
     * const count = await prisma.work_shift.count({
     *   where: {
     *     // ... the filter for the Work_shifts we want to count
     *   }
     * })
    **/
    count<T extends work_shiftCountArgs>(
      args?: Subset<T, work_shiftCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Work_shiftCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Work_shift.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Work_shiftAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Work_shiftAggregateArgs>(args: Subset<T, Work_shiftAggregateArgs>): Prisma.PrismaPromise<GetWork_shiftAggregateType<T>>

    /**
     * Group by Work_shift.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {work_shiftGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends work_shiftGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: work_shiftGroupByArgs['orderBy'] }
        : { orderBy?: work_shiftGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, work_shiftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWork_shiftGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the work_shift model
   */
  readonly fields: work_shiftFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for work_shift.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__work_shiftClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the work_shift model
   */
  interface work_shiftFieldRefs {
    readonly id: FieldRef<"work_shift", 'Int'>
    readonly name: FieldRef<"work_shift", 'String'>
    readonly operative_personal: FieldRef<"work_shift", 'Int'>
    readonly in_operative_personal: FieldRef<"work_shift", 'Int'>
    readonly workday: FieldRef<"work_shift", 'String'>
    readonly time_start: FieldRef<"work_shift", 'Int'>
    readonly working_time: FieldRef<"work_shift", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * work_shift findUnique
   */
  export type work_shiftFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_shift
     */
    select?: work_shiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_shift
     */
    omit?: work_shiftOmit<ExtArgs> | null
    /**
     * Filter, which work_shift to fetch.
     */
    where: work_shiftWhereUniqueInput
  }

  /**
   * work_shift findUniqueOrThrow
   */
  export type work_shiftFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_shift
     */
    select?: work_shiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_shift
     */
    omit?: work_shiftOmit<ExtArgs> | null
    /**
     * Filter, which work_shift to fetch.
     */
    where: work_shiftWhereUniqueInput
  }

  /**
   * work_shift findFirst
   */
  export type work_shiftFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_shift
     */
    select?: work_shiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_shift
     */
    omit?: work_shiftOmit<ExtArgs> | null
    /**
     * Filter, which work_shift to fetch.
     */
    where?: work_shiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of work_shifts to fetch.
     */
    orderBy?: work_shiftOrderByWithRelationInput | work_shiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for work_shifts.
     */
    cursor?: work_shiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` work_shifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` work_shifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of work_shifts.
     */
    distinct?: Work_shiftScalarFieldEnum | Work_shiftScalarFieldEnum[]
  }

  /**
   * work_shift findFirstOrThrow
   */
  export type work_shiftFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_shift
     */
    select?: work_shiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_shift
     */
    omit?: work_shiftOmit<ExtArgs> | null
    /**
     * Filter, which work_shift to fetch.
     */
    where?: work_shiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of work_shifts to fetch.
     */
    orderBy?: work_shiftOrderByWithRelationInput | work_shiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for work_shifts.
     */
    cursor?: work_shiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` work_shifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` work_shifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of work_shifts.
     */
    distinct?: Work_shiftScalarFieldEnum | Work_shiftScalarFieldEnum[]
  }

  /**
   * work_shift findMany
   */
  export type work_shiftFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_shift
     */
    select?: work_shiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_shift
     */
    omit?: work_shiftOmit<ExtArgs> | null
    /**
     * Filter, which work_shifts to fetch.
     */
    where?: work_shiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of work_shifts to fetch.
     */
    orderBy?: work_shiftOrderByWithRelationInput | work_shiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing work_shifts.
     */
    cursor?: work_shiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` work_shifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` work_shifts.
     */
    skip?: number
    distinct?: Work_shiftScalarFieldEnum | Work_shiftScalarFieldEnum[]
  }

  /**
   * work_shift create
   */
  export type work_shiftCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_shift
     */
    select?: work_shiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_shift
     */
    omit?: work_shiftOmit<ExtArgs> | null
    /**
     * The data needed to create a work_shift.
     */
    data: XOR<work_shiftCreateInput, work_shiftUncheckedCreateInput>
  }

  /**
   * work_shift createMany
   */
  export type work_shiftCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many work_shifts.
     */
    data: work_shiftCreateManyInput | work_shiftCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * work_shift createManyAndReturn
   */
  export type work_shiftCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_shift
     */
    select?: work_shiftSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the work_shift
     */
    omit?: work_shiftOmit<ExtArgs> | null
    /**
     * The data used to create many work_shifts.
     */
    data: work_shiftCreateManyInput | work_shiftCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * work_shift update
   */
  export type work_shiftUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_shift
     */
    select?: work_shiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_shift
     */
    omit?: work_shiftOmit<ExtArgs> | null
    /**
     * The data needed to update a work_shift.
     */
    data: XOR<work_shiftUpdateInput, work_shiftUncheckedUpdateInput>
    /**
     * Choose, which work_shift to update.
     */
    where: work_shiftWhereUniqueInput
  }

  /**
   * work_shift updateMany
   */
  export type work_shiftUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update work_shifts.
     */
    data: XOR<work_shiftUpdateManyMutationInput, work_shiftUncheckedUpdateManyInput>
    /**
     * Filter which work_shifts to update
     */
    where?: work_shiftWhereInput
    /**
     * Limit how many work_shifts to update.
     */
    limit?: number
  }

  /**
   * work_shift updateManyAndReturn
   */
  export type work_shiftUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_shift
     */
    select?: work_shiftSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the work_shift
     */
    omit?: work_shiftOmit<ExtArgs> | null
    /**
     * The data used to update work_shifts.
     */
    data: XOR<work_shiftUpdateManyMutationInput, work_shiftUncheckedUpdateManyInput>
    /**
     * Filter which work_shifts to update
     */
    where?: work_shiftWhereInput
    /**
     * Limit how many work_shifts to update.
     */
    limit?: number
  }

  /**
   * work_shift upsert
   */
  export type work_shiftUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_shift
     */
    select?: work_shiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_shift
     */
    omit?: work_shiftOmit<ExtArgs> | null
    /**
     * The filter to search for the work_shift to update in case it exists.
     */
    where: work_shiftWhereUniqueInput
    /**
     * In case the work_shift found by the `where` argument doesn't exist, create a new work_shift with this data.
     */
    create: XOR<work_shiftCreateInput, work_shiftUncheckedCreateInput>
    /**
     * In case the work_shift was found with the provided `where` argument, update it with this data.
     */
    update: XOR<work_shiftUpdateInput, work_shiftUncheckedUpdateInput>
  }

  /**
   * work_shift delete
   */
  export type work_shiftDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_shift
     */
    select?: work_shiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_shift
     */
    omit?: work_shiftOmit<ExtArgs> | null
    /**
     * Filter which work_shift to delete.
     */
    where: work_shiftWhereUniqueInput
  }

  /**
   * work_shift deleteMany
   */
  export type work_shiftDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which work_shifts to delete
     */
    where?: work_shiftWhereInput
    /**
     * Limit how many work_shifts to delete.
     */
    limit?: number
  }

  /**
   * work_shift without action
   */
  export type work_shiftDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the work_shift
     */
    select?: work_shiftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the work_shift
     */
    omit?: work_shiftOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BaseScalarFieldEnum: {
    id: 'id',
    cologne: 'cologne',
    street_and_number: 'street_and_number',
    crosse: 'crosse',
    status: 'status',
    image: 'image'
  };

  export type BaseScalarFieldEnum = (typeof BaseScalarFieldEnum)[keyof typeof BaseScalarFieldEnum]


  export const DamagesScalarFieldEnum: {
    id: 'id',
    driver_id: 'driver_id',
    vehicle_id: 'vehicle_id',
    damage_event: 'damage_event',
    where_is_damage: 'where_is_damage',
    photo_damage: 'photo_damage',
    damage_description: 'damage_description',
    type_to_damage: 'type_to_damage'
  };

  export type DamagesScalarFieldEnum = (typeof DamagesScalarFieldEnum)[keyof typeof DamagesScalarFieldEnum]


  export const Logs_servicesScalarFieldEnum: {
    id: 'id',
    id_user: 'id_user',
    id_service: 'id_service',
    old_data: 'old_data',
    new_data: 'new_data',
    date_change: 'date_change'
  };

  export type Logs_servicesScalarFieldEnum = (typeof Logs_servicesScalarFieldEnum)[keyof typeof Logs_servicesScalarFieldEnum]


  export const PreferenceScalarFieldEnum: {
    id: 'id',
    id_user: 'id_user',
    name_s: 'name_s',
    last_name_s: 'last_name_s',
    style_colorimetry_app: 'style_colorimetry_app',
    sex_visibility: 'sex_visibility'
  };

  export type PreferenceScalarFieldEnum = (typeof PreferenceScalarFieldEnum)[keyof typeof PreferenceScalarFieldEnum]


  export const ServicesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    vehicle_id: 'vehicle_id',
    kilometers: 'kilometers',
    driver: 'driver',
    first_firefighter: 'first_firefighter',
    second_firefighter: 'second_firefighter',
    third_firefighter: 'third_firefighter',
    type_service: 'type_service',
    folio: 'folio',
    cologne: 'cologne',
    stret: 'stret',
    crossing: 'crossing',
    reporter: 'reporter',
    phone_reporter: 'phone_reporter',
    close_type: 'close_type',
    general_and_conclusion: 'general_and_conclusion',
    close_kilometers: 'close_kilometers',
    kilometers_traveled: 'kilometers_traveled',
    status: 'status'
  };

  export type ServicesScalarFieldEnum = (typeof ServicesScalarFieldEnum)[keyof typeof ServicesScalarFieldEnum]


  export const Tipe_tool_equipmentScalarFieldEnum: {
    id: 'id',
    cover_image: 'cover_image',
    name: 'name',
    type: 'type',
    on_inventory: 'on_inventory'
  };

  export type Tipe_tool_equipmentScalarFieldEnum = (typeof Tipe_tool_equipmentScalarFieldEnum)[keyof typeof Tipe_tool_equipmentScalarFieldEnum]


  export const Type_to_vehicleScalarFieldEnum: {
    id: 'id',
    type: 'type',
    image: 'image',
    operative: 'operative',
    in_operative: 'in_operative'
  };

  export type Type_to_vehicleScalarFieldEnum = (typeof Type_to_vehicleScalarFieldEnum)[keyof typeof Type_to_vehicleScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    second_name: 'second_name',
    last_name: 'last_name',
    second_last_name: 'second_last_name',
    status_now: 'status_now',
    blood_group: 'blood_group',
    blood_rh_factor: 'blood_rh_factor',
    social_security_number: 'social_security_number',
    type_position: 'type_position',
    position: 'position',
    email: 'email',
    phone: 'phone',
    employee_number: 'employee_number',
    work_shift: 'work_shift',
    birthdate: 'birthdate',
    start_date: 'start_date',
    emergency_contact_name: 'emergency_contact_name',
    emergency_contact_phone: 'emergency_contact_phone',
    emergency_contact_phone_alt: 'emergency_contact_phone_alt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Vehicle_logsScalarFieldEnum: {
    id: 'id',
    vehicle_id: 'vehicle_id',
    driver_id: 'driver_id',
    luz_delantera_alta: 'luz_delantera_alta',
    luz_delantera_baja: 'luz_delantera_baja',
    luces_de_emergencia: 'luces_de_emergencia',
    luces_neblineros: 'luces_neblineros',
    luz_direccional: 'luz_direccional',
    luz_de_freno: 'luz_de_freno',
    luz_de_reversa: 'luz_de_reversa',
    luces_del_tanque_cisterna: 'luces_del_tanque_cisterna',
    luces_interior_cabina: 'luces_interior_cabina',
    motor_adicional: 'motor_adicional',
    estado_de_tablero_indicadores: 'estado_de_tablero_indicadores',
    elevadores_de_cristales: 'elevadores_de_cristales',
    espejos_lateral_derecho: 'espejos_lateral_derecho',
    espejos_lateral_izquierdo: 'espejos_lateral_izquierdo',
    espejo_retrovisor: 'espejo_retrovisor',
    cristal_parabrisas: 'cristal_parabrisas',
    cristal_medallon: 'cristal_medallon',
    cristal_de_puertas: 'cristal_de_puertas',
    gato_hidraulico: 'gato_hidraulico',
    herramientas_cambio_de_ruedas: 'herramientas_cambio_de_ruedas',
    bocina_de_sonoros: 'bocina_de_sonoros',
    modulo_luminosos_sonoros: 'modulo_luminosos_sonoros',
    torreta: 'torreta',
    cinturones_de_seguridad: 'cinturones_de_seguridad',
    limpia_parabrisas: 'limpia_parabrisas',
    poliza_seguro: 'poliza_seguro',
    tarjeta_circulacion: 'tarjeta_circulacion',
    tapon_tanque_combustible: 'tapon_tanque_combustible',
    tapon_aceite: 'tapon_aceite',
    tapon_agua: 'tapon_agua',
    nivel_aceite_motor: 'nivel_aceite_motor',
    nivel_aceite_transmision: 'nivel_aceite_transmision',
    nivel_agua_radiador: 'nivel_agua_radiador',
    nivel_liquido_frenos: 'nivel_liquido_frenos',
    llanta_delantera_derecha: 'llanta_delantera_derecha',
    llanta_delantera_izquierda: 'llanta_delantera_izquierda',
    llanta_trasera_derecha: 'llanta_trasera_derecha',
    llanta_trasera_izquierda: 'llanta_trasera_izquierda',
    llanta_repuesto: 'llanta_repuesto',
    fecha_registro: 'fecha_registro',
    llaves_encendido: 'llaves_encendido',
    switch_encendido: 'switch_encendido',
    bateria: 'bateria',
    postes_terminales_bateria: 'postes_terminales_bateria'
  };

  export type Vehicle_logsScalarFieldEnum = (typeof Vehicle_logsScalarFieldEnum)[keyof typeof Vehicle_logsScalarFieldEnum]


  export const VehiclesScalarFieldEnum: {
    id: 'id',
    number_unit: 'number_unit',
    type: 'type',
    cover_img: 'cover_img',
    left_img: 'left_img',
    up_img: 'up_img',
    front_img: 'front_img',
    back_img: 'back_img',
    kilometers: 'kilometers',
    kilometers_to_service: 'kilometers_to_service',
    date_register: 'date_register',
    vehicle_license_plates: 'vehicle_license_plates',
    status: 'status',
    model: 'model',
    card_brand: 'card_brand'
  };

  export type VehiclesScalarFieldEnum = (typeof VehiclesScalarFieldEnum)[keyof typeof VehiclesScalarFieldEnum]


  export const Work_forceScalarFieldEnum: {
    id: 'id',
    work_shift: 'work_shift',
    id_base: 'id_base',
    id_vehicle: 'id_vehicle',
    id_drive: 'id_drive',
    id_persone_one: 'id_persone_one',
    id_persone_two: 'id_persone_two',
    id_presone_trhee: 'id_presone_trhee',
    extras_persone: 'extras_persone',
    date_work_shift: 'date_work_shift',
    notes: 'notes'
  };

  export type Work_forceScalarFieldEnum = (typeof Work_forceScalarFieldEnum)[keyof typeof Work_forceScalarFieldEnum]


  export const Work_shiftScalarFieldEnum: {
    id: 'id',
    name: 'name',
    operative_personal: 'operative_personal',
    in_operative_personal: 'in_operative_personal',
    workday: 'workday',
    time_start: 'time_start',
    working_time: 'working_time'
  };

  export type Work_shiftScalarFieldEnum = (typeof Work_shiftScalarFieldEnum)[keyof typeof Work_shiftScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type baseWhereInput = {
    AND?: baseWhereInput | baseWhereInput[]
    OR?: baseWhereInput[]
    NOT?: baseWhereInput | baseWhereInput[]
    id?: IntFilter<"base"> | number
    cologne?: StringFilter<"base"> | string
    street_and_number?: StringFilter<"base"> | string
    crosse?: StringFilter<"base"> | string
    status?: StringFilter<"base"> | string
    image?: StringFilter<"base"> | string
    work_force?: Work_forceListRelationFilter
  }

  export type baseOrderByWithRelationInput = {
    id?: SortOrder
    cologne?: SortOrder
    street_and_number?: SortOrder
    crosse?: SortOrder
    status?: SortOrder
    image?: SortOrder
    work_force?: work_forceOrderByRelationAggregateInput
  }

  export type baseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: baseWhereInput | baseWhereInput[]
    OR?: baseWhereInput[]
    NOT?: baseWhereInput | baseWhereInput[]
    cologne?: StringFilter<"base"> | string
    street_and_number?: StringFilter<"base"> | string
    crosse?: StringFilter<"base"> | string
    status?: StringFilter<"base"> | string
    image?: StringFilter<"base"> | string
    work_force?: Work_forceListRelationFilter
  }, "id">

  export type baseOrderByWithAggregationInput = {
    id?: SortOrder
    cologne?: SortOrder
    street_and_number?: SortOrder
    crosse?: SortOrder
    status?: SortOrder
    image?: SortOrder
    _count?: baseCountOrderByAggregateInput
    _avg?: baseAvgOrderByAggregateInput
    _max?: baseMaxOrderByAggregateInput
    _min?: baseMinOrderByAggregateInput
    _sum?: baseSumOrderByAggregateInput
  }

  export type baseScalarWhereWithAggregatesInput = {
    AND?: baseScalarWhereWithAggregatesInput | baseScalarWhereWithAggregatesInput[]
    OR?: baseScalarWhereWithAggregatesInput[]
    NOT?: baseScalarWhereWithAggregatesInput | baseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"base"> | number
    cologne?: StringWithAggregatesFilter<"base"> | string
    street_and_number?: StringWithAggregatesFilter<"base"> | string
    crosse?: StringWithAggregatesFilter<"base"> | string
    status?: StringWithAggregatesFilter<"base"> | string
    image?: StringWithAggregatesFilter<"base"> | string
  }

  export type damagesWhereInput = {
    AND?: damagesWhereInput | damagesWhereInput[]
    OR?: damagesWhereInput[]
    NOT?: damagesWhereInput | damagesWhereInput[]
    id?: IntFilter<"damages"> | number
    driver_id?: IntFilter<"damages"> | number
    vehicle_id?: IntFilter<"damages"> | number
    damage_event?: StringFilter<"damages"> | string
    where_is_damage?: StringFilter<"damages"> | string
    photo_damage?: StringNullableFilter<"damages"> | string | null
    damage_description?: StringFilter<"damages"> | string
    type_to_damage?: StringFilter<"damages"> | string
    vehicles?: XOR<VehiclesScalarRelationFilter, vehiclesWhereInput>
  }

  export type damagesOrderByWithRelationInput = {
    id?: SortOrder
    driver_id?: SortOrder
    vehicle_id?: SortOrder
    damage_event?: SortOrder
    where_is_damage?: SortOrder
    photo_damage?: SortOrderInput | SortOrder
    damage_description?: SortOrder
    type_to_damage?: SortOrder
    vehicles?: vehiclesOrderByWithRelationInput
  }

  export type damagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: damagesWhereInput | damagesWhereInput[]
    OR?: damagesWhereInput[]
    NOT?: damagesWhereInput | damagesWhereInput[]
    driver_id?: IntFilter<"damages"> | number
    vehicle_id?: IntFilter<"damages"> | number
    damage_event?: StringFilter<"damages"> | string
    where_is_damage?: StringFilter<"damages"> | string
    photo_damage?: StringNullableFilter<"damages"> | string | null
    damage_description?: StringFilter<"damages"> | string
    type_to_damage?: StringFilter<"damages"> | string
    vehicles?: XOR<VehiclesScalarRelationFilter, vehiclesWhereInput>
  }, "id">

  export type damagesOrderByWithAggregationInput = {
    id?: SortOrder
    driver_id?: SortOrder
    vehicle_id?: SortOrder
    damage_event?: SortOrder
    where_is_damage?: SortOrder
    photo_damage?: SortOrderInput | SortOrder
    damage_description?: SortOrder
    type_to_damage?: SortOrder
    _count?: damagesCountOrderByAggregateInput
    _avg?: damagesAvgOrderByAggregateInput
    _max?: damagesMaxOrderByAggregateInput
    _min?: damagesMinOrderByAggregateInput
    _sum?: damagesSumOrderByAggregateInput
  }

  export type damagesScalarWhereWithAggregatesInput = {
    AND?: damagesScalarWhereWithAggregatesInput | damagesScalarWhereWithAggregatesInput[]
    OR?: damagesScalarWhereWithAggregatesInput[]
    NOT?: damagesScalarWhereWithAggregatesInput | damagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"damages"> | number
    driver_id?: IntWithAggregatesFilter<"damages"> | number
    vehicle_id?: IntWithAggregatesFilter<"damages"> | number
    damage_event?: StringWithAggregatesFilter<"damages"> | string
    where_is_damage?: StringWithAggregatesFilter<"damages"> | string
    photo_damage?: StringNullableWithAggregatesFilter<"damages"> | string | null
    damage_description?: StringWithAggregatesFilter<"damages"> | string
    type_to_damage?: StringWithAggregatesFilter<"damages"> | string
  }

  export type logs_servicesWhereInput = {
    AND?: logs_servicesWhereInput | logs_servicesWhereInput[]
    OR?: logs_servicesWhereInput[]
    NOT?: logs_servicesWhereInput | logs_servicesWhereInput[]
    id?: IntFilter<"logs_services"> | number
    id_user?: IntFilter<"logs_services"> | number
    id_service?: IntFilter<"logs_services"> | number
    old_data?: StringNullableFilter<"logs_services"> | string | null
    new_data?: StringFilter<"logs_services"> | string
    date_change?: StringFilter<"logs_services"> | string
    services?: XOR<ServicesScalarRelationFilter, servicesWhereInput>
  }

  export type logs_servicesOrderByWithRelationInput = {
    id?: SortOrder
    id_user?: SortOrder
    id_service?: SortOrder
    old_data?: SortOrderInput | SortOrder
    new_data?: SortOrder
    date_change?: SortOrder
    services?: servicesOrderByWithRelationInput
  }

  export type logs_servicesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: logs_servicesWhereInput | logs_servicesWhereInput[]
    OR?: logs_servicesWhereInput[]
    NOT?: logs_servicesWhereInput | logs_servicesWhereInput[]
    id_user?: IntFilter<"logs_services"> | number
    id_service?: IntFilter<"logs_services"> | number
    old_data?: StringNullableFilter<"logs_services"> | string | null
    new_data?: StringFilter<"logs_services"> | string
    date_change?: StringFilter<"logs_services"> | string
    services?: XOR<ServicesScalarRelationFilter, servicesWhereInput>
  }, "id">

  export type logs_servicesOrderByWithAggregationInput = {
    id?: SortOrder
    id_user?: SortOrder
    id_service?: SortOrder
    old_data?: SortOrderInput | SortOrder
    new_data?: SortOrder
    date_change?: SortOrder
    _count?: logs_servicesCountOrderByAggregateInput
    _avg?: logs_servicesAvgOrderByAggregateInput
    _max?: logs_servicesMaxOrderByAggregateInput
    _min?: logs_servicesMinOrderByAggregateInput
    _sum?: logs_servicesSumOrderByAggregateInput
  }

  export type logs_servicesScalarWhereWithAggregatesInput = {
    AND?: logs_servicesScalarWhereWithAggregatesInput | logs_servicesScalarWhereWithAggregatesInput[]
    OR?: logs_servicesScalarWhereWithAggregatesInput[]
    NOT?: logs_servicesScalarWhereWithAggregatesInput | logs_servicesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"logs_services"> | number
    id_user?: IntWithAggregatesFilter<"logs_services"> | number
    id_service?: IntWithAggregatesFilter<"logs_services"> | number
    old_data?: StringNullableWithAggregatesFilter<"logs_services"> | string | null
    new_data?: StringWithAggregatesFilter<"logs_services"> | string
    date_change?: StringWithAggregatesFilter<"logs_services"> | string
  }

  export type preferenceWhereInput = {
    AND?: preferenceWhereInput | preferenceWhereInput[]
    OR?: preferenceWhereInput[]
    NOT?: preferenceWhereInput | preferenceWhereInput[]
    id?: IntFilter<"preference"> | number
    id_user?: IntNullableFilter<"preference"> | number | null
    name_s?: StringNullableFilter<"preference"> | string | null
    last_name_s?: StringNullableFilter<"preference"> | string | null
    style_colorimetry_app?: IntNullableFilter<"preference"> | number | null
    sex_visibility?: StringNullableFilter<"preference"> | string | null
  }

  export type preferenceOrderByWithRelationInput = {
    id?: SortOrder
    id_user?: SortOrderInput | SortOrder
    name_s?: SortOrderInput | SortOrder
    last_name_s?: SortOrderInput | SortOrder
    style_colorimetry_app?: SortOrderInput | SortOrder
    sex_visibility?: SortOrderInput | SortOrder
  }

  export type preferenceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: preferenceWhereInput | preferenceWhereInput[]
    OR?: preferenceWhereInput[]
    NOT?: preferenceWhereInput | preferenceWhereInput[]
    id_user?: IntNullableFilter<"preference"> | number | null
    name_s?: StringNullableFilter<"preference"> | string | null
    last_name_s?: StringNullableFilter<"preference"> | string | null
    style_colorimetry_app?: IntNullableFilter<"preference"> | number | null
    sex_visibility?: StringNullableFilter<"preference"> | string | null
  }, "id">

  export type preferenceOrderByWithAggregationInput = {
    id?: SortOrder
    id_user?: SortOrderInput | SortOrder
    name_s?: SortOrderInput | SortOrder
    last_name_s?: SortOrderInput | SortOrder
    style_colorimetry_app?: SortOrderInput | SortOrder
    sex_visibility?: SortOrderInput | SortOrder
    _count?: preferenceCountOrderByAggregateInput
    _avg?: preferenceAvgOrderByAggregateInput
    _max?: preferenceMaxOrderByAggregateInput
    _min?: preferenceMinOrderByAggregateInput
    _sum?: preferenceSumOrderByAggregateInput
  }

  export type preferenceScalarWhereWithAggregatesInput = {
    AND?: preferenceScalarWhereWithAggregatesInput | preferenceScalarWhereWithAggregatesInput[]
    OR?: preferenceScalarWhereWithAggregatesInput[]
    NOT?: preferenceScalarWhereWithAggregatesInput | preferenceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"preference"> | number
    id_user?: IntNullableWithAggregatesFilter<"preference"> | number | null
    name_s?: StringNullableWithAggregatesFilter<"preference"> | string | null
    last_name_s?: StringNullableWithAggregatesFilter<"preference"> | string | null
    style_colorimetry_app?: IntNullableWithAggregatesFilter<"preference"> | number | null
    sex_visibility?: StringNullableWithAggregatesFilter<"preference"> | string | null
  }

  export type servicesWhereInput = {
    AND?: servicesWhereInput | servicesWhereInput[]
    OR?: servicesWhereInput[]
    NOT?: servicesWhereInput | servicesWhereInput[]
    id?: IntFilter<"services"> | number
    user_id?: IntFilter<"services"> | number
    vehicle_id?: IntFilter<"services"> | number
    kilometers?: IntFilter<"services"> | number
    driver?: IntFilter<"services"> | number
    first_firefighter?: StringFilter<"services"> | string
    second_firefighter?: StringNullableFilter<"services"> | string | null
    third_firefighter?: StringNullableFilter<"services"> | string | null
    type_service?: StringFilter<"services"> | string
    folio?: StringNullableFilter<"services"> | string | null
    cologne?: StringFilter<"services"> | string
    stret?: StringFilter<"services"> | string
    crossing?: StringFilter<"services"> | string
    reporter?: StringFilter<"services"> | string
    phone_reporter?: StringFilter<"services"> | string
    close_type?: StringFilter<"services"> | string
    general_and_conclusion?: StringFilter<"services"> | string
    close_kilometers?: IntFilter<"services"> | number
    kilometers_traveled?: IntNullableFilter<"services"> | number | null
    status?: StringFilter<"services"> | string
    logs_services?: Logs_servicesListRelationFilter
    vehicles?: XOR<VehiclesScalarRelationFilter, vehiclesWhereInput>
  }

  export type servicesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    vehicle_id?: SortOrder
    kilometers?: SortOrder
    driver?: SortOrder
    first_firefighter?: SortOrder
    second_firefighter?: SortOrderInput | SortOrder
    third_firefighter?: SortOrderInput | SortOrder
    type_service?: SortOrder
    folio?: SortOrderInput | SortOrder
    cologne?: SortOrder
    stret?: SortOrder
    crossing?: SortOrder
    reporter?: SortOrder
    phone_reporter?: SortOrder
    close_type?: SortOrder
    general_and_conclusion?: SortOrder
    close_kilometers?: SortOrder
    kilometers_traveled?: SortOrderInput | SortOrder
    status?: SortOrder
    logs_services?: logs_servicesOrderByRelationAggregateInput
    vehicles?: vehiclesOrderByWithRelationInput
  }

  export type servicesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: servicesWhereInput | servicesWhereInput[]
    OR?: servicesWhereInput[]
    NOT?: servicesWhereInput | servicesWhereInput[]
    user_id?: IntFilter<"services"> | number
    vehicle_id?: IntFilter<"services"> | number
    kilometers?: IntFilter<"services"> | number
    driver?: IntFilter<"services"> | number
    first_firefighter?: StringFilter<"services"> | string
    second_firefighter?: StringNullableFilter<"services"> | string | null
    third_firefighter?: StringNullableFilter<"services"> | string | null
    type_service?: StringFilter<"services"> | string
    folio?: StringNullableFilter<"services"> | string | null
    cologne?: StringFilter<"services"> | string
    stret?: StringFilter<"services"> | string
    crossing?: StringFilter<"services"> | string
    reporter?: StringFilter<"services"> | string
    phone_reporter?: StringFilter<"services"> | string
    close_type?: StringFilter<"services"> | string
    general_and_conclusion?: StringFilter<"services"> | string
    close_kilometers?: IntFilter<"services"> | number
    kilometers_traveled?: IntNullableFilter<"services"> | number | null
    status?: StringFilter<"services"> | string
    logs_services?: Logs_servicesListRelationFilter
    vehicles?: XOR<VehiclesScalarRelationFilter, vehiclesWhereInput>
  }, "id">

  export type servicesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    vehicle_id?: SortOrder
    kilometers?: SortOrder
    driver?: SortOrder
    first_firefighter?: SortOrder
    second_firefighter?: SortOrderInput | SortOrder
    third_firefighter?: SortOrderInput | SortOrder
    type_service?: SortOrder
    folio?: SortOrderInput | SortOrder
    cologne?: SortOrder
    stret?: SortOrder
    crossing?: SortOrder
    reporter?: SortOrder
    phone_reporter?: SortOrder
    close_type?: SortOrder
    general_and_conclusion?: SortOrder
    close_kilometers?: SortOrder
    kilometers_traveled?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: servicesCountOrderByAggregateInput
    _avg?: servicesAvgOrderByAggregateInput
    _max?: servicesMaxOrderByAggregateInput
    _min?: servicesMinOrderByAggregateInput
    _sum?: servicesSumOrderByAggregateInput
  }

  export type servicesScalarWhereWithAggregatesInput = {
    AND?: servicesScalarWhereWithAggregatesInput | servicesScalarWhereWithAggregatesInput[]
    OR?: servicesScalarWhereWithAggregatesInput[]
    NOT?: servicesScalarWhereWithAggregatesInput | servicesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"services"> | number
    user_id?: IntWithAggregatesFilter<"services"> | number
    vehicle_id?: IntWithAggregatesFilter<"services"> | number
    kilometers?: IntWithAggregatesFilter<"services"> | number
    driver?: IntWithAggregatesFilter<"services"> | number
    first_firefighter?: StringWithAggregatesFilter<"services"> | string
    second_firefighter?: StringNullableWithAggregatesFilter<"services"> | string | null
    third_firefighter?: StringNullableWithAggregatesFilter<"services"> | string | null
    type_service?: StringWithAggregatesFilter<"services"> | string
    folio?: StringNullableWithAggregatesFilter<"services"> | string | null
    cologne?: StringWithAggregatesFilter<"services"> | string
    stret?: StringWithAggregatesFilter<"services"> | string
    crossing?: StringWithAggregatesFilter<"services"> | string
    reporter?: StringWithAggregatesFilter<"services"> | string
    phone_reporter?: StringWithAggregatesFilter<"services"> | string
    close_type?: StringWithAggregatesFilter<"services"> | string
    general_and_conclusion?: StringWithAggregatesFilter<"services"> | string
    close_kilometers?: IntWithAggregatesFilter<"services"> | number
    kilometers_traveled?: IntNullableWithAggregatesFilter<"services"> | number | null
    status?: StringWithAggregatesFilter<"services"> | string
  }

  export type tipe_tool_equipmentWhereInput = {
    AND?: tipe_tool_equipmentWhereInput | tipe_tool_equipmentWhereInput[]
    OR?: tipe_tool_equipmentWhereInput[]
    NOT?: tipe_tool_equipmentWhereInput | tipe_tool_equipmentWhereInput[]
    id?: IntFilter<"tipe_tool_equipment"> | number
    cover_image?: StringNullableFilter<"tipe_tool_equipment"> | string | null
    name?: StringNullableFilter<"tipe_tool_equipment"> | string | null
    type?: StringNullableFilter<"tipe_tool_equipment"> | string | null
    on_inventory?: IntNullableFilter<"tipe_tool_equipment"> | number | null
  }

  export type tipe_tool_equipmentOrderByWithRelationInput = {
    id?: SortOrder
    cover_image?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    on_inventory?: SortOrderInput | SortOrder
  }

  export type tipe_tool_equipmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tipe_tool_equipmentWhereInput | tipe_tool_equipmentWhereInput[]
    OR?: tipe_tool_equipmentWhereInput[]
    NOT?: tipe_tool_equipmentWhereInput | tipe_tool_equipmentWhereInput[]
    cover_image?: StringNullableFilter<"tipe_tool_equipment"> | string | null
    name?: StringNullableFilter<"tipe_tool_equipment"> | string | null
    type?: StringNullableFilter<"tipe_tool_equipment"> | string | null
    on_inventory?: IntNullableFilter<"tipe_tool_equipment"> | number | null
  }, "id">

  export type tipe_tool_equipmentOrderByWithAggregationInput = {
    id?: SortOrder
    cover_image?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    on_inventory?: SortOrderInput | SortOrder
    _count?: tipe_tool_equipmentCountOrderByAggregateInput
    _avg?: tipe_tool_equipmentAvgOrderByAggregateInput
    _max?: tipe_tool_equipmentMaxOrderByAggregateInput
    _min?: tipe_tool_equipmentMinOrderByAggregateInput
    _sum?: tipe_tool_equipmentSumOrderByAggregateInput
  }

  export type tipe_tool_equipmentScalarWhereWithAggregatesInput = {
    AND?: tipe_tool_equipmentScalarWhereWithAggregatesInput | tipe_tool_equipmentScalarWhereWithAggregatesInput[]
    OR?: tipe_tool_equipmentScalarWhereWithAggregatesInput[]
    NOT?: tipe_tool_equipmentScalarWhereWithAggregatesInput | tipe_tool_equipmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tipe_tool_equipment"> | number
    cover_image?: StringNullableWithAggregatesFilter<"tipe_tool_equipment"> | string | null
    name?: StringNullableWithAggregatesFilter<"tipe_tool_equipment"> | string | null
    type?: StringNullableWithAggregatesFilter<"tipe_tool_equipment"> | string | null
    on_inventory?: IntNullableWithAggregatesFilter<"tipe_tool_equipment"> | number | null
  }

  export type type_to_vehicleWhereInput = {
    AND?: type_to_vehicleWhereInput | type_to_vehicleWhereInput[]
    OR?: type_to_vehicleWhereInput[]
    NOT?: type_to_vehicleWhereInput | type_to_vehicleWhereInput[]
    id?: IntFilter<"type_to_vehicle"> | number
    type?: StringNullableFilter<"type_to_vehicle"> | string | null
    image?: StringNullableFilter<"type_to_vehicle"> | string | null
    operative?: IntNullableFilter<"type_to_vehicle"> | number | null
    in_operative?: IntNullableFilter<"type_to_vehicle"> | number | null
  }

  export type type_to_vehicleOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    operative?: SortOrderInput | SortOrder
    in_operative?: SortOrderInput | SortOrder
  }

  export type type_to_vehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: type_to_vehicleWhereInput | type_to_vehicleWhereInput[]
    OR?: type_to_vehicleWhereInput[]
    NOT?: type_to_vehicleWhereInput | type_to_vehicleWhereInput[]
    type?: StringNullableFilter<"type_to_vehicle"> | string | null
    image?: StringNullableFilter<"type_to_vehicle"> | string | null
    operative?: IntNullableFilter<"type_to_vehicle"> | number | null
    in_operative?: IntNullableFilter<"type_to_vehicle"> | number | null
  }, "id">

  export type type_to_vehicleOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    operative?: SortOrderInput | SortOrder
    in_operative?: SortOrderInput | SortOrder
    _count?: type_to_vehicleCountOrderByAggregateInput
    _avg?: type_to_vehicleAvgOrderByAggregateInput
    _max?: type_to_vehicleMaxOrderByAggregateInput
    _min?: type_to_vehicleMinOrderByAggregateInput
    _sum?: type_to_vehicleSumOrderByAggregateInput
  }

  export type type_to_vehicleScalarWhereWithAggregatesInput = {
    AND?: type_to_vehicleScalarWhereWithAggregatesInput | type_to_vehicleScalarWhereWithAggregatesInput[]
    OR?: type_to_vehicleScalarWhereWithAggregatesInput[]
    NOT?: type_to_vehicleScalarWhereWithAggregatesInput | type_to_vehicleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"type_to_vehicle"> | number
    type?: StringNullableWithAggregatesFilter<"type_to_vehicle"> | string | null
    image?: StringNullableWithAggregatesFilter<"type_to_vehicle"> | string | null
    operative?: IntNullableWithAggregatesFilter<"type_to_vehicle"> | number | null
    in_operative?: IntNullableWithAggregatesFilter<"type_to_vehicle"> | number | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    first_name?: StringFilter<"users"> | string
    second_name?: StringNullableFilter<"users"> | string | null
    last_name?: StringFilter<"users"> | string
    second_last_name?: StringNullableFilter<"users"> | string | null
    status_now?: StringNullableFilter<"users"> | string | null
    blood_group?: StringNullableFilter<"users"> | string | null
    blood_rh_factor?: StringNullableFilter<"users"> | string | null
    social_security_number?: StringNullableFilter<"users"> | string | null
    type_position?: StringNullableFilter<"users"> | string | null
    position?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    phone?: StringFilter<"users"> | string
    employee_number?: StringFilter<"users"> | string
    work_shift?: StringFilter<"users"> | string
    birthdate?: DateTimeFilter<"users"> | Date | string
    start_date?: DateTimeFilter<"users"> | Date | string
    emergency_contact_name?: StringFilter<"users"> | string
    emergency_contact_phone?: StringFilter<"users"> | string
    emergency_contact_phone_alt?: StringNullableFilter<"users"> | string | null
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    second_name?: SortOrderInput | SortOrder
    last_name?: SortOrder
    second_last_name?: SortOrderInput | SortOrder
    status_now?: SortOrderInput | SortOrder
    blood_group?: SortOrderInput | SortOrder
    blood_rh_factor?: SortOrderInput | SortOrder
    social_security_number?: SortOrderInput | SortOrder
    type_position?: SortOrderInput | SortOrder
    position?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    employee_number?: SortOrder
    work_shift?: SortOrder
    birthdate?: SortOrder
    start_date?: SortOrder
    emergency_contact_name?: SortOrder
    emergency_contact_phone?: SortOrder
    emergency_contact_phone_alt?: SortOrderInput | SortOrder
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    employee_number?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    first_name?: StringFilter<"users"> | string
    second_name?: StringNullableFilter<"users"> | string | null
    last_name?: StringFilter<"users"> | string
    second_last_name?: StringNullableFilter<"users"> | string | null
    status_now?: StringNullableFilter<"users"> | string | null
    blood_group?: StringNullableFilter<"users"> | string | null
    blood_rh_factor?: StringNullableFilter<"users"> | string | null
    social_security_number?: StringNullableFilter<"users"> | string | null
    type_position?: StringNullableFilter<"users"> | string | null
    position?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    phone?: StringFilter<"users"> | string
    work_shift?: StringFilter<"users"> | string
    birthdate?: DateTimeFilter<"users"> | Date | string
    start_date?: DateTimeFilter<"users"> | Date | string
    emergency_contact_name?: StringFilter<"users"> | string
    emergency_contact_phone?: StringFilter<"users"> | string
    emergency_contact_phone_alt?: StringNullableFilter<"users"> | string | null
  }, "id" | "employee_number">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    second_name?: SortOrderInput | SortOrder
    last_name?: SortOrder
    second_last_name?: SortOrderInput | SortOrder
    status_now?: SortOrderInput | SortOrder
    blood_group?: SortOrderInput | SortOrder
    blood_rh_factor?: SortOrderInput | SortOrder
    social_security_number?: SortOrderInput | SortOrder
    type_position?: SortOrderInput | SortOrder
    position?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    employee_number?: SortOrder
    work_shift?: SortOrder
    birthdate?: SortOrder
    start_date?: SortOrder
    emergency_contact_name?: SortOrder
    emergency_contact_phone?: SortOrder
    emergency_contact_phone_alt?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    first_name?: StringWithAggregatesFilter<"users"> | string
    second_name?: StringNullableWithAggregatesFilter<"users"> | string | null
    last_name?: StringWithAggregatesFilter<"users"> | string
    second_last_name?: StringNullableWithAggregatesFilter<"users"> | string | null
    status_now?: StringNullableWithAggregatesFilter<"users"> | string | null
    blood_group?: StringNullableWithAggregatesFilter<"users"> | string | null
    blood_rh_factor?: StringNullableWithAggregatesFilter<"users"> | string | null
    social_security_number?: StringNullableWithAggregatesFilter<"users"> | string | null
    type_position?: StringNullableWithAggregatesFilter<"users"> | string | null
    position?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    phone?: StringWithAggregatesFilter<"users"> | string
    employee_number?: StringWithAggregatesFilter<"users"> | string
    work_shift?: StringWithAggregatesFilter<"users"> | string
    birthdate?: DateTimeWithAggregatesFilter<"users"> | Date | string
    start_date?: DateTimeWithAggregatesFilter<"users"> | Date | string
    emergency_contact_name?: StringWithAggregatesFilter<"users"> | string
    emergency_contact_phone?: StringWithAggregatesFilter<"users"> | string
    emergency_contact_phone_alt?: StringNullableWithAggregatesFilter<"users"> | string | null
  }

  export type vehicle_logsWhereInput = {
    AND?: vehicle_logsWhereInput | vehicle_logsWhereInput[]
    OR?: vehicle_logsWhereInput[]
    NOT?: vehicle_logsWhereInput | vehicle_logsWhereInput[]
    id?: IntFilter<"vehicle_logs"> | number
    vehicle_id?: IntFilter<"vehicle_logs"> | number
    driver_id?: IntFilter<"vehicle_logs"> | number
    luz_delantera_alta?: StringFilter<"vehicle_logs"> | string
    luz_delantera_baja?: StringFilter<"vehicle_logs"> | string
    luces_de_emergencia?: StringFilter<"vehicle_logs"> | string
    luces_neblineros?: StringFilter<"vehicle_logs"> | string
    luz_direccional?: StringFilter<"vehicle_logs"> | string
    luz_de_freno?: StringFilter<"vehicle_logs"> | string
    luz_de_reversa?: StringFilter<"vehicle_logs"> | string
    luces_del_tanque_cisterna?: StringFilter<"vehicle_logs"> | string
    luces_interior_cabina?: StringFilter<"vehicle_logs"> | string
    motor_adicional?: StringFilter<"vehicle_logs"> | string
    estado_de_tablero_indicadores?: StringFilter<"vehicle_logs"> | string
    elevadores_de_cristales?: StringFilter<"vehicle_logs"> | string
    espejos_lateral_derecho?: StringFilter<"vehicle_logs"> | string
    espejos_lateral_izquierdo?: StringFilter<"vehicle_logs"> | string
    espejo_retrovisor?: StringFilter<"vehicle_logs"> | string
    cristal_parabrisas?: StringFilter<"vehicle_logs"> | string
    cristal_medallon?: StringFilter<"vehicle_logs"> | string
    cristal_de_puertas?: StringFilter<"vehicle_logs"> | string
    gato_hidraulico?: StringFilter<"vehicle_logs"> | string
    herramientas_cambio_de_ruedas?: StringFilter<"vehicle_logs"> | string
    bocina_de_sonoros?: StringFilter<"vehicle_logs"> | string
    modulo_luminosos_sonoros?: StringFilter<"vehicle_logs"> | string
    torreta?: StringFilter<"vehicle_logs"> | string
    cinturones_de_seguridad?: StringFilter<"vehicle_logs"> | string
    limpia_parabrisas?: StringFilter<"vehicle_logs"> | string
    poliza_seguro?: StringFilter<"vehicle_logs"> | string
    tarjeta_circulacion?: StringFilter<"vehicle_logs"> | string
    tapon_tanque_combustible?: StringFilter<"vehicle_logs"> | string
    tapon_aceite?: StringFilter<"vehicle_logs"> | string
    tapon_agua?: StringFilter<"vehicle_logs"> | string
    nivel_aceite_motor?: StringFilter<"vehicle_logs"> | string
    nivel_aceite_transmision?: StringFilter<"vehicle_logs"> | string
    nivel_agua_radiador?: StringFilter<"vehicle_logs"> | string
    nivel_liquido_frenos?: StringFilter<"vehicle_logs"> | string
    llanta_delantera_derecha?: StringFilter<"vehicle_logs"> | string
    llanta_delantera_izquierda?: StringFilter<"vehicle_logs"> | string
    llanta_trasera_derecha?: StringFilter<"vehicle_logs"> | string
    llanta_trasera_izquierda?: StringFilter<"vehicle_logs"> | string
    llanta_repuesto?: StringFilter<"vehicle_logs"> | string
    fecha_registro?: DateTimeNullableFilter<"vehicle_logs"> | Date | string | null
    llaves_encendido?: StringFilter<"vehicle_logs"> | string
    switch_encendido?: StringFilter<"vehicle_logs"> | string
    bateria?: StringFilter<"vehicle_logs"> | string
    postes_terminales_bateria?: StringFilter<"vehicle_logs"> | string
    vehicles?: XOR<VehiclesScalarRelationFilter, vehiclesWhereInput>
  }

  export type vehicle_logsOrderByWithRelationInput = {
    id?: SortOrder
    vehicle_id?: SortOrder
    driver_id?: SortOrder
    luz_delantera_alta?: SortOrder
    luz_delantera_baja?: SortOrder
    luces_de_emergencia?: SortOrder
    luces_neblineros?: SortOrder
    luz_direccional?: SortOrder
    luz_de_freno?: SortOrder
    luz_de_reversa?: SortOrder
    luces_del_tanque_cisterna?: SortOrder
    luces_interior_cabina?: SortOrder
    motor_adicional?: SortOrder
    estado_de_tablero_indicadores?: SortOrder
    elevadores_de_cristales?: SortOrder
    espejos_lateral_derecho?: SortOrder
    espejos_lateral_izquierdo?: SortOrder
    espejo_retrovisor?: SortOrder
    cristal_parabrisas?: SortOrder
    cristal_medallon?: SortOrder
    cristal_de_puertas?: SortOrder
    gato_hidraulico?: SortOrder
    herramientas_cambio_de_ruedas?: SortOrder
    bocina_de_sonoros?: SortOrder
    modulo_luminosos_sonoros?: SortOrder
    torreta?: SortOrder
    cinturones_de_seguridad?: SortOrder
    limpia_parabrisas?: SortOrder
    poliza_seguro?: SortOrder
    tarjeta_circulacion?: SortOrder
    tapon_tanque_combustible?: SortOrder
    tapon_aceite?: SortOrder
    tapon_agua?: SortOrder
    nivel_aceite_motor?: SortOrder
    nivel_aceite_transmision?: SortOrder
    nivel_agua_radiador?: SortOrder
    nivel_liquido_frenos?: SortOrder
    llanta_delantera_derecha?: SortOrder
    llanta_delantera_izquierda?: SortOrder
    llanta_trasera_derecha?: SortOrder
    llanta_trasera_izquierda?: SortOrder
    llanta_repuesto?: SortOrder
    fecha_registro?: SortOrderInput | SortOrder
    llaves_encendido?: SortOrder
    switch_encendido?: SortOrder
    bateria?: SortOrder
    postes_terminales_bateria?: SortOrder
    vehicles?: vehiclesOrderByWithRelationInput
  }

  export type vehicle_logsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: vehicle_logsWhereInput | vehicle_logsWhereInput[]
    OR?: vehicle_logsWhereInput[]
    NOT?: vehicle_logsWhereInput | vehicle_logsWhereInput[]
    vehicle_id?: IntFilter<"vehicle_logs"> | number
    driver_id?: IntFilter<"vehicle_logs"> | number
    luz_delantera_alta?: StringFilter<"vehicle_logs"> | string
    luz_delantera_baja?: StringFilter<"vehicle_logs"> | string
    luces_de_emergencia?: StringFilter<"vehicle_logs"> | string
    luces_neblineros?: StringFilter<"vehicle_logs"> | string
    luz_direccional?: StringFilter<"vehicle_logs"> | string
    luz_de_freno?: StringFilter<"vehicle_logs"> | string
    luz_de_reversa?: StringFilter<"vehicle_logs"> | string
    luces_del_tanque_cisterna?: StringFilter<"vehicle_logs"> | string
    luces_interior_cabina?: StringFilter<"vehicle_logs"> | string
    motor_adicional?: StringFilter<"vehicle_logs"> | string
    estado_de_tablero_indicadores?: StringFilter<"vehicle_logs"> | string
    elevadores_de_cristales?: StringFilter<"vehicle_logs"> | string
    espejos_lateral_derecho?: StringFilter<"vehicle_logs"> | string
    espejos_lateral_izquierdo?: StringFilter<"vehicle_logs"> | string
    espejo_retrovisor?: StringFilter<"vehicle_logs"> | string
    cristal_parabrisas?: StringFilter<"vehicle_logs"> | string
    cristal_medallon?: StringFilter<"vehicle_logs"> | string
    cristal_de_puertas?: StringFilter<"vehicle_logs"> | string
    gato_hidraulico?: StringFilter<"vehicle_logs"> | string
    herramientas_cambio_de_ruedas?: StringFilter<"vehicle_logs"> | string
    bocina_de_sonoros?: StringFilter<"vehicle_logs"> | string
    modulo_luminosos_sonoros?: StringFilter<"vehicle_logs"> | string
    torreta?: StringFilter<"vehicle_logs"> | string
    cinturones_de_seguridad?: StringFilter<"vehicle_logs"> | string
    limpia_parabrisas?: StringFilter<"vehicle_logs"> | string
    poliza_seguro?: StringFilter<"vehicle_logs"> | string
    tarjeta_circulacion?: StringFilter<"vehicle_logs"> | string
    tapon_tanque_combustible?: StringFilter<"vehicle_logs"> | string
    tapon_aceite?: StringFilter<"vehicle_logs"> | string
    tapon_agua?: StringFilter<"vehicle_logs"> | string
    nivel_aceite_motor?: StringFilter<"vehicle_logs"> | string
    nivel_aceite_transmision?: StringFilter<"vehicle_logs"> | string
    nivel_agua_radiador?: StringFilter<"vehicle_logs"> | string
    nivel_liquido_frenos?: StringFilter<"vehicle_logs"> | string
    llanta_delantera_derecha?: StringFilter<"vehicle_logs"> | string
    llanta_delantera_izquierda?: StringFilter<"vehicle_logs"> | string
    llanta_trasera_derecha?: StringFilter<"vehicle_logs"> | string
    llanta_trasera_izquierda?: StringFilter<"vehicle_logs"> | string
    llanta_repuesto?: StringFilter<"vehicle_logs"> | string
    fecha_registro?: DateTimeNullableFilter<"vehicle_logs"> | Date | string | null
    llaves_encendido?: StringFilter<"vehicle_logs"> | string
    switch_encendido?: StringFilter<"vehicle_logs"> | string
    bateria?: StringFilter<"vehicle_logs"> | string
    postes_terminales_bateria?: StringFilter<"vehicle_logs"> | string
    vehicles?: XOR<VehiclesScalarRelationFilter, vehiclesWhereInput>
  }, "id">

  export type vehicle_logsOrderByWithAggregationInput = {
    id?: SortOrder
    vehicle_id?: SortOrder
    driver_id?: SortOrder
    luz_delantera_alta?: SortOrder
    luz_delantera_baja?: SortOrder
    luces_de_emergencia?: SortOrder
    luces_neblineros?: SortOrder
    luz_direccional?: SortOrder
    luz_de_freno?: SortOrder
    luz_de_reversa?: SortOrder
    luces_del_tanque_cisterna?: SortOrder
    luces_interior_cabina?: SortOrder
    motor_adicional?: SortOrder
    estado_de_tablero_indicadores?: SortOrder
    elevadores_de_cristales?: SortOrder
    espejos_lateral_derecho?: SortOrder
    espejos_lateral_izquierdo?: SortOrder
    espejo_retrovisor?: SortOrder
    cristal_parabrisas?: SortOrder
    cristal_medallon?: SortOrder
    cristal_de_puertas?: SortOrder
    gato_hidraulico?: SortOrder
    herramientas_cambio_de_ruedas?: SortOrder
    bocina_de_sonoros?: SortOrder
    modulo_luminosos_sonoros?: SortOrder
    torreta?: SortOrder
    cinturones_de_seguridad?: SortOrder
    limpia_parabrisas?: SortOrder
    poliza_seguro?: SortOrder
    tarjeta_circulacion?: SortOrder
    tapon_tanque_combustible?: SortOrder
    tapon_aceite?: SortOrder
    tapon_agua?: SortOrder
    nivel_aceite_motor?: SortOrder
    nivel_aceite_transmision?: SortOrder
    nivel_agua_radiador?: SortOrder
    nivel_liquido_frenos?: SortOrder
    llanta_delantera_derecha?: SortOrder
    llanta_delantera_izquierda?: SortOrder
    llanta_trasera_derecha?: SortOrder
    llanta_trasera_izquierda?: SortOrder
    llanta_repuesto?: SortOrder
    fecha_registro?: SortOrderInput | SortOrder
    llaves_encendido?: SortOrder
    switch_encendido?: SortOrder
    bateria?: SortOrder
    postes_terminales_bateria?: SortOrder
    _count?: vehicle_logsCountOrderByAggregateInput
    _avg?: vehicle_logsAvgOrderByAggregateInput
    _max?: vehicle_logsMaxOrderByAggregateInput
    _min?: vehicle_logsMinOrderByAggregateInput
    _sum?: vehicle_logsSumOrderByAggregateInput
  }

  export type vehicle_logsScalarWhereWithAggregatesInput = {
    AND?: vehicle_logsScalarWhereWithAggregatesInput | vehicle_logsScalarWhereWithAggregatesInput[]
    OR?: vehicle_logsScalarWhereWithAggregatesInput[]
    NOT?: vehicle_logsScalarWhereWithAggregatesInput | vehicle_logsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"vehicle_logs"> | number
    vehicle_id?: IntWithAggregatesFilter<"vehicle_logs"> | number
    driver_id?: IntWithAggregatesFilter<"vehicle_logs"> | number
    luz_delantera_alta?: StringWithAggregatesFilter<"vehicle_logs"> | string
    luz_delantera_baja?: StringWithAggregatesFilter<"vehicle_logs"> | string
    luces_de_emergencia?: StringWithAggregatesFilter<"vehicle_logs"> | string
    luces_neblineros?: StringWithAggregatesFilter<"vehicle_logs"> | string
    luz_direccional?: StringWithAggregatesFilter<"vehicle_logs"> | string
    luz_de_freno?: StringWithAggregatesFilter<"vehicle_logs"> | string
    luz_de_reversa?: StringWithAggregatesFilter<"vehicle_logs"> | string
    luces_del_tanque_cisterna?: StringWithAggregatesFilter<"vehicle_logs"> | string
    luces_interior_cabina?: StringWithAggregatesFilter<"vehicle_logs"> | string
    motor_adicional?: StringWithAggregatesFilter<"vehicle_logs"> | string
    estado_de_tablero_indicadores?: StringWithAggregatesFilter<"vehicle_logs"> | string
    elevadores_de_cristales?: StringWithAggregatesFilter<"vehicle_logs"> | string
    espejos_lateral_derecho?: StringWithAggregatesFilter<"vehicle_logs"> | string
    espejos_lateral_izquierdo?: StringWithAggregatesFilter<"vehicle_logs"> | string
    espejo_retrovisor?: StringWithAggregatesFilter<"vehicle_logs"> | string
    cristal_parabrisas?: StringWithAggregatesFilter<"vehicle_logs"> | string
    cristal_medallon?: StringWithAggregatesFilter<"vehicle_logs"> | string
    cristal_de_puertas?: StringWithAggregatesFilter<"vehicle_logs"> | string
    gato_hidraulico?: StringWithAggregatesFilter<"vehicle_logs"> | string
    herramientas_cambio_de_ruedas?: StringWithAggregatesFilter<"vehicle_logs"> | string
    bocina_de_sonoros?: StringWithAggregatesFilter<"vehicle_logs"> | string
    modulo_luminosos_sonoros?: StringWithAggregatesFilter<"vehicle_logs"> | string
    torreta?: StringWithAggregatesFilter<"vehicle_logs"> | string
    cinturones_de_seguridad?: StringWithAggregatesFilter<"vehicle_logs"> | string
    limpia_parabrisas?: StringWithAggregatesFilter<"vehicle_logs"> | string
    poliza_seguro?: StringWithAggregatesFilter<"vehicle_logs"> | string
    tarjeta_circulacion?: StringWithAggregatesFilter<"vehicle_logs"> | string
    tapon_tanque_combustible?: StringWithAggregatesFilter<"vehicle_logs"> | string
    tapon_aceite?: StringWithAggregatesFilter<"vehicle_logs"> | string
    tapon_agua?: StringWithAggregatesFilter<"vehicle_logs"> | string
    nivel_aceite_motor?: StringWithAggregatesFilter<"vehicle_logs"> | string
    nivel_aceite_transmision?: StringWithAggregatesFilter<"vehicle_logs"> | string
    nivel_agua_radiador?: StringWithAggregatesFilter<"vehicle_logs"> | string
    nivel_liquido_frenos?: StringWithAggregatesFilter<"vehicle_logs"> | string
    llanta_delantera_derecha?: StringWithAggregatesFilter<"vehicle_logs"> | string
    llanta_delantera_izquierda?: StringWithAggregatesFilter<"vehicle_logs"> | string
    llanta_trasera_derecha?: StringWithAggregatesFilter<"vehicle_logs"> | string
    llanta_trasera_izquierda?: StringWithAggregatesFilter<"vehicle_logs"> | string
    llanta_repuesto?: StringWithAggregatesFilter<"vehicle_logs"> | string
    fecha_registro?: DateTimeNullableWithAggregatesFilter<"vehicle_logs"> | Date | string | null
    llaves_encendido?: StringWithAggregatesFilter<"vehicle_logs"> | string
    switch_encendido?: StringWithAggregatesFilter<"vehicle_logs"> | string
    bateria?: StringWithAggregatesFilter<"vehicle_logs"> | string
    postes_terminales_bateria?: StringWithAggregatesFilter<"vehicle_logs"> | string
  }

  export type vehiclesWhereInput = {
    AND?: vehiclesWhereInput | vehiclesWhereInput[]
    OR?: vehiclesWhereInput[]
    NOT?: vehiclesWhereInput | vehiclesWhereInput[]
    id?: IntFilter<"vehicles"> | number
    number_unit?: IntFilter<"vehicles"> | number
    type?: StringFilter<"vehicles"> | string
    cover_img?: StringFilter<"vehicles"> | string
    left_img?: StringFilter<"vehicles"> | string
    up_img?: StringFilter<"vehicles"> | string
    front_img?: StringFilter<"vehicles"> | string
    back_img?: StringFilter<"vehicles"> | string
    kilometers?: FloatFilter<"vehicles"> | number
    kilometers_to_service?: FloatFilter<"vehicles"> | number
    date_register?: DateTimeFilter<"vehicles"> | Date | string
    vehicle_license_plates?: StringFilter<"vehicles"> | string
    status?: StringFilter<"vehicles"> | string
    model?: StringFilter<"vehicles"> | string
    card_brand?: StringFilter<"vehicles"> | string
    damages?: DamagesListRelationFilter
    services?: ServicesListRelationFilter
    vehicle_logs?: Vehicle_logsListRelationFilter
    work_force?: Work_forceListRelationFilter
  }

  export type vehiclesOrderByWithRelationInput = {
    id?: SortOrder
    number_unit?: SortOrder
    type?: SortOrder
    cover_img?: SortOrder
    left_img?: SortOrder
    up_img?: SortOrder
    front_img?: SortOrder
    back_img?: SortOrder
    kilometers?: SortOrder
    kilometers_to_service?: SortOrder
    date_register?: SortOrder
    vehicle_license_plates?: SortOrder
    status?: SortOrder
    model?: SortOrder
    card_brand?: SortOrder
    damages?: damagesOrderByRelationAggregateInput
    services?: servicesOrderByRelationAggregateInput
    vehicle_logs?: vehicle_logsOrderByRelationAggregateInput
    work_force?: work_forceOrderByRelationAggregateInput
  }

  export type vehiclesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    number_unit?: number
    AND?: vehiclesWhereInput | vehiclesWhereInput[]
    OR?: vehiclesWhereInput[]
    NOT?: vehiclesWhereInput | vehiclesWhereInput[]
    type?: StringFilter<"vehicles"> | string
    cover_img?: StringFilter<"vehicles"> | string
    left_img?: StringFilter<"vehicles"> | string
    up_img?: StringFilter<"vehicles"> | string
    front_img?: StringFilter<"vehicles"> | string
    back_img?: StringFilter<"vehicles"> | string
    kilometers?: FloatFilter<"vehicles"> | number
    kilometers_to_service?: FloatFilter<"vehicles"> | number
    date_register?: DateTimeFilter<"vehicles"> | Date | string
    vehicle_license_plates?: StringFilter<"vehicles"> | string
    status?: StringFilter<"vehicles"> | string
    model?: StringFilter<"vehicles"> | string
    card_brand?: StringFilter<"vehicles"> | string
    damages?: DamagesListRelationFilter
    services?: ServicesListRelationFilter
    vehicle_logs?: Vehicle_logsListRelationFilter
    work_force?: Work_forceListRelationFilter
  }, "id" | "number_unit">

  export type vehiclesOrderByWithAggregationInput = {
    id?: SortOrder
    number_unit?: SortOrder
    type?: SortOrder
    cover_img?: SortOrder
    left_img?: SortOrder
    up_img?: SortOrder
    front_img?: SortOrder
    back_img?: SortOrder
    kilometers?: SortOrder
    kilometers_to_service?: SortOrder
    date_register?: SortOrder
    vehicle_license_plates?: SortOrder
    status?: SortOrder
    model?: SortOrder
    card_brand?: SortOrder
    _count?: vehiclesCountOrderByAggregateInput
    _avg?: vehiclesAvgOrderByAggregateInput
    _max?: vehiclesMaxOrderByAggregateInput
    _min?: vehiclesMinOrderByAggregateInput
    _sum?: vehiclesSumOrderByAggregateInput
  }

  export type vehiclesScalarWhereWithAggregatesInput = {
    AND?: vehiclesScalarWhereWithAggregatesInput | vehiclesScalarWhereWithAggregatesInput[]
    OR?: vehiclesScalarWhereWithAggregatesInput[]
    NOT?: vehiclesScalarWhereWithAggregatesInput | vehiclesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"vehicles"> | number
    number_unit?: IntWithAggregatesFilter<"vehicles"> | number
    type?: StringWithAggregatesFilter<"vehicles"> | string
    cover_img?: StringWithAggregatesFilter<"vehicles"> | string
    left_img?: StringWithAggregatesFilter<"vehicles"> | string
    up_img?: StringWithAggregatesFilter<"vehicles"> | string
    front_img?: StringWithAggregatesFilter<"vehicles"> | string
    back_img?: StringWithAggregatesFilter<"vehicles"> | string
    kilometers?: FloatWithAggregatesFilter<"vehicles"> | number
    kilometers_to_service?: FloatWithAggregatesFilter<"vehicles"> | number
    date_register?: DateTimeWithAggregatesFilter<"vehicles"> | Date | string
    vehicle_license_plates?: StringWithAggregatesFilter<"vehicles"> | string
    status?: StringWithAggregatesFilter<"vehicles"> | string
    model?: StringWithAggregatesFilter<"vehicles"> | string
    card_brand?: StringWithAggregatesFilter<"vehicles"> | string
  }

  export type work_forceWhereInput = {
    AND?: work_forceWhereInput | work_forceWhereInput[]
    OR?: work_forceWhereInput[]
    NOT?: work_forceWhereInput | work_forceWhereInput[]
    id?: IntFilter<"work_force"> | number
    work_shift?: StringFilter<"work_force"> | string
    id_base?: IntNullableFilter<"work_force"> | number | null
    id_vehicle?: IntNullableFilter<"work_force"> | number | null
    id_drive?: IntNullableFilter<"work_force"> | number | null
    id_persone_one?: IntFilter<"work_force"> | number
    id_persone_two?: IntNullableFilter<"work_force"> | number | null
    id_presone_trhee?: IntNullableFilter<"work_force"> | number | null
    extras_persone?: StringNullableFilter<"work_force"> | string | null
    date_work_shift?: DateTimeFilter<"work_force"> | Date | string
    notes?: StringNullableFilter<"work_force"> | string | null
    base?: XOR<BaseNullableScalarRelationFilter, baseWhereInput> | null
    vehicles?: XOR<VehiclesNullableScalarRelationFilter, vehiclesWhereInput> | null
  }

  export type work_forceOrderByWithRelationInput = {
    id?: SortOrder
    work_shift?: SortOrder
    id_base?: SortOrderInput | SortOrder
    id_vehicle?: SortOrderInput | SortOrder
    id_drive?: SortOrderInput | SortOrder
    id_persone_one?: SortOrder
    id_persone_two?: SortOrderInput | SortOrder
    id_presone_trhee?: SortOrderInput | SortOrder
    extras_persone?: SortOrderInput | SortOrder
    date_work_shift?: SortOrder
    notes?: SortOrderInput | SortOrder
    base?: baseOrderByWithRelationInput
    vehicles?: vehiclesOrderByWithRelationInput
  }

  export type work_forceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: work_forceWhereInput | work_forceWhereInput[]
    OR?: work_forceWhereInput[]
    NOT?: work_forceWhereInput | work_forceWhereInput[]
    work_shift?: StringFilter<"work_force"> | string
    id_base?: IntNullableFilter<"work_force"> | number | null
    id_vehicle?: IntNullableFilter<"work_force"> | number | null
    id_drive?: IntNullableFilter<"work_force"> | number | null
    id_persone_one?: IntFilter<"work_force"> | number
    id_persone_two?: IntNullableFilter<"work_force"> | number | null
    id_presone_trhee?: IntNullableFilter<"work_force"> | number | null
    extras_persone?: StringNullableFilter<"work_force"> | string | null
    date_work_shift?: DateTimeFilter<"work_force"> | Date | string
    notes?: StringNullableFilter<"work_force"> | string | null
    base?: XOR<BaseNullableScalarRelationFilter, baseWhereInput> | null
    vehicles?: XOR<VehiclesNullableScalarRelationFilter, vehiclesWhereInput> | null
  }, "id">

  export type work_forceOrderByWithAggregationInput = {
    id?: SortOrder
    work_shift?: SortOrder
    id_base?: SortOrderInput | SortOrder
    id_vehicle?: SortOrderInput | SortOrder
    id_drive?: SortOrderInput | SortOrder
    id_persone_one?: SortOrder
    id_persone_two?: SortOrderInput | SortOrder
    id_presone_trhee?: SortOrderInput | SortOrder
    extras_persone?: SortOrderInput | SortOrder
    date_work_shift?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: work_forceCountOrderByAggregateInput
    _avg?: work_forceAvgOrderByAggregateInput
    _max?: work_forceMaxOrderByAggregateInput
    _min?: work_forceMinOrderByAggregateInput
    _sum?: work_forceSumOrderByAggregateInput
  }

  export type work_forceScalarWhereWithAggregatesInput = {
    AND?: work_forceScalarWhereWithAggregatesInput | work_forceScalarWhereWithAggregatesInput[]
    OR?: work_forceScalarWhereWithAggregatesInput[]
    NOT?: work_forceScalarWhereWithAggregatesInput | work_forceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"work_force"> | number
    work_shift?: StringWithAggregatesFilter<"work_force"> | string
    id_base?: IntNullableWithAggregatesFilter<"work_force"> | number | null
    id_vehicle?: IntNullableWithAggregatesFilter<"work_force"> | number | null
    id_drive?: IntNullableWithAggregatesFilter<"work_force"> | number | null
    id_persone_one?: IntWithAggregatesFilter<"work_force"> | number
    id_persone_two?: IntNullableWithAggregatesFilter<"work_force"> | number | null
    id_presone_trhee?: IntNullableWithAggregatesFilter<"work_force"> | number | null
    extras_persone?: StringNullableWithAggregatesFilter<"work_force"> | string | null
    date_work_shift?: DateTimeWithAggregatesFilter<"work_force"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"work_force"> | string | null
  }

  export type work_shiftWhereInput = {
    AND?: work_shiftWhereInput | work_shiftWhereInput[]
    OR?: work_shiftWhereInput[]
    NOT?: work_shiftWhereInput | work_shiftWhereInput[]
    id?: IntFilter<"work_shift"> | number
    name?: StringFilter<"work_shift"> | string
    operative_personal?: IntNullableFilter<"work_shift"> | number | null
    in_operative_personal?: IntNullableFilter<"work_shift"> | number | null
    workday?: StringFilter<"work_shift"> | string
    time_start?: IntFilter<"work_shift"> | number
    working_time?: IntFilter<"work_shift"> | number
  }

  export type work_shiftOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    operative_personal?: SortOrderInput | SortOrder
    in_operative_personal?: SortOrderInput | SortOrder
    workday?: SortOrder
    time_start?: SortOrder
    working_time?: SortOrder
  }

  export type work_shiftWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: work_shiftWhereInput | work_shiftWhereInput[]
    OR?: work_shiftWhereInput[]
    NOT?: work_shiftWhereInput | work_shiftWhereInput[]
    name?: StringFilter<"work_shift"> | string
    operative_personal?: IntNullableFilter<"work_shift"> | number | null
    in_operative_personal?: IntNullableFilter<"work_shift"> | number | null
    workday?: StringFilter<"work_shift"> | string
    time_start?: IntFilter<"work_shift"> | number
    working_time?: IntFilter<"work_shift"> | number
  }, "id">

  export type work_shiftOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    operative_personal?: SortOrderInput | SortOrder
    in_operative_personal?: SortOrderInput | SortOrder
    workday?: SortOrder
    time_start?: SortOrder
    working_time?: SortOrder
    _count?: work_shiftCountOrderByAggregateInput
    _avg?: work_shiftAvgOrderByAggregateInput
    _max?: work_shiftMaxOrderByAggregateInput
    _min?: work_shiftMinOrderByAggregateInput
    _sum?: work_shiftSumOrderByAggregateInput
  }

  export type work_shiftScalarWhereWithAggregatesInput = {
    AND?: work_shiftScalarWhereWithAggregatesInput | work_shiftScalarWhereWithAggregatesInput[]
    OR?: work_shiftScalarWhereWithAggregatesInput[]
    NOT?: work_shiftScalarWhereWithAggregatesInput | work_shiftScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"work_shift"> | number
    name?: StringWithAggregatesFilter<"work_shift"> | string
    operative_personal?: IntNullableWithAggregatesFilter<"work_shift"> | number | null
    in_operative_personal?: IntNullableWithAggregatesFilter<"work_shift"> | number | null
    workday?: StringWithAggregatesFilter<"work_shift"> | string
    time_start?: IntWithAggregatesFilter<"work_shift"> | number
    working_time?: IntWithAggregatesFilter<"work_shift"> | number
  }

  export type baseCreateInput = {
    cologne: string
    street_and_number: string
    crosse: string
    status: string
    image: string
    work_force?: work_forceCreateNestedManyWithoutBaseInput
  }

  export type baseUncheckedCreateInput = {
    id?: number
    cologne: string
    street_and_number: string
    crosse: string
    status: string
    image: string
    work_force?: work_forceUncheckedCreateNestedManyWithoutBaseInput
  }

  export type baseUpdateInput = {
    cologne?: StringFieldUpdateOperationsInput | string
    street_and_number?: StringFieldUpdateOperationsInput | string
    crosse?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    work_force?: work_forceUpdateManyWithoutBaseNestedInput
  }

  export type baseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cologne?: StringFieldUpdateOperationsInput | string
    street_and_number?: StringFieldUpdateOperationsInput | string
    crosse?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    work_force?: work_forceUncheckedUpdateManyWithoutBaseNestedInput
  }

  export type baseCreateManyInput = {
    id?: number
    cologne: string
    street_and_number: string
    crosse: string
    status: string
    image: string
  }

  export type baseUpdateManyMutationInput = {
    cologne?: StringFieldUpdateOperationsInput | string
    street_and_number?: StringFieldUpdateOperationsInput | string
    crosse?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type baseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cologne?: StringFieldUpdateOperationsInput | string
    street_and_number?: StringFieldUpdateOperationsInput | string
    crosse?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type damagesCreateInput = {
    driver_id: number
    damage_event: string
    where_is_damage: string
    photo_damage?: string | null
    damage_description: string
    type_to_damage: string
    vehicles: vehiclesCreateNestedOneWithoutDamagesInput
  }

  export type damagesUncheckedCreateInput = {
    id?: number
    driver_id: number
    vehicle_id: number
    damage_event: string
    where_is_damage: string
    photo_damage?: string | null
    damage_description: string
    type_to_damage: string
  }

  export type damagesUpdateInput = {
    driver_id?: IntFieldUpdateOperationsInput | number
    damage_event?: StringFieldUpdateOperationsInput | string
    where_is_damage?: StringFieldUpdateOperationsInput | string
    photo_damage?: NullableStringFieldUpdateOperationsInput | string | null
    damage_description?: StringFieldUpdateOperationsInput | string
    type_to_damage?: StringFieldUpdateOperationsInput | string
    vehicles?: vehiclesUpdateOneRequiredWithoutDamagesNestedInput
  }

  export type damagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    driver_id?: IntFieldUpdateOperationsInput | number
    vehicle_id?: IntFieldUpdateOperationsInput | number
    damage_event?: StringFieldUpdateOperationsInput | string
    where_is_damage?: StringFieldUpdateOperationsInput | string
    photo_damage?: NullableStringFieldUpdateOperationsInput | string | null
    damage_description?: StringFieldUpdateOperationsInput | string
    type_to_damage?: StringFieldUpdateOperationsInput | string
  }

  export type damagesCreateManyInput = {
    id?: number
    driver_id: number
    vehicle_id: number
    damage_event: string
    where_is_damage: string
    photo_damage?: string | null
    damage_description: string
    type_to_damage: string
  }

  export type damagesUpdateManyMutationInput = {
    driver_id?: IntFieldUpdateOperationsInput | number
    damage_event?: StringFieldUpdateOperationsInput | string
    where_is_damage?: StringFieldUpdateOperationsInput | string
    photo_damage?: NullableStringFieldUpdateOperationsInput | string | null
    damage_description?: StringFieldUpdateOperationsInput | string
    type_to_damage?: StringFieldUpdateOperationsInput | string
  }

  export type damagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    driver_id?: IntFieldUpdateOperationsInput | number
    vehicle_id?: IntFieldUpdateOperationsInput | number
    damage_event?: StringFieldUpdateOperationsInput | string
    where_is_damage?: StringFieldUpdateOperationsInput | string
    photo_damage?: NullableStringFieldUpdateOperationsInput | string | null
    damage_description?: StringFieldUpdateOperationsInput | string
    type_to_damage?: StringFieldUpdateOperationsInput | string
  }

  export type logs_servicesCreateInput = {
    id_user: number
    old_data?: string | null
    new_data: string
    date_change: string
    services: servicesCreateNestedOneWithoutLogs_servicesInput
  }

  export type logs_servicesUncheckedCreateInput = {
    id?: number
    id_user: number
    id_service: number
    old_data?: string | null
    new_data: string
    date_change: string
  }

  export type logs_servicesUpdateInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    old_data?: NullableStringFieldUpdateOperationsInput | string | null
    new_data?: StringFieldUpdateOperationsInput | string
    date_change?: StringFieldUpdateOperationsInput | string
    services?: servicesUpdateOneRequiredWithoutLogs_servicesNestedInput
  }

  export type logs_servicesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    id_service?: IntFieldUpdateOperationsInput | number
    old_data?: NullableStringFieldUpdateOperationsInput | string | null
    new_data?: StringFieldUpdateOperationsInput | string
    date_change?: StringFieldUpdateOperationsInput | string
  }

  export type logs_servicesCreateManyInput = {
    id?: number
    id_user: number
    id_service: number
    old_data?: string | null
    new_data: string
    date_change: string
  }

  export type logs_servicesUpdateManyMutationInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    old_data?: NullableStringFieldUpdateOperationsInput | string | null
    new_data?: StringFieldUpdateOperationsInput | string
    date_change?: StringFieldUpdateOperationsInput | string
  }

  export type logs_servicesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    id_service?: IntFieldUpdateOperationsInput | number
    old_data?: NullableStringFieldUpdateOperationsInput | string | null
    new_data?: StringFieldUpdateOperationsInput | string
    date_change?: StringFieldUpdateOperationsInput | string
  }

  export type preferenceCreateInput = {
    id_user?: number | null
    name_s?: string | null
    last_name_s?: string | null
    style_colorimetry_app?: number | null
    sex_visibility?: string | null
  }

  export type preferenceUncheckedCreateInput = {
    id?: number
    id_user?: number | null
    name_s?: string | null
    last_name_s?: string | null
    style_colorimetry_app?: number | null
    sex_visibility?: string | null
  }

  export type preferenceUpdateInput = {
    id_user?: NullableIntFieldUpdateOperationsInput | number | null
    name_s?: NullableStringFieldUpdateOperationsInput | string | null
    last_name_s?: NullableStringFieldUpdateOperationsInput | string | null
    style_colorimetry_app?: NullableIntFieldUpdateOperationsInput | number | null
    sex_visibility?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type preferenceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_user?: NullableIntFieldUpdateOperationsInput | number | null
    name_s?: NullableStringFieldUpdateOperationsInput | string | null
    last_name_s?: NullableStringFieldUpdateOperationsInput | string | null
    style_colorimetry_app?: NullableIntFieldUpdateOperationsInput | number | null
    sex_visibility?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type preferenceCreateManyInput = {
    id?: number
    id_user?: number | null
    name_s?: string | null
    last_name_s?: string | null
    style_colorimetry_app?: number | null
    sex_visibility?: string | null
  }

  export type preferenceUpdateManyMutationInput = {
    id_user?: NullableIntFieldUpdateOperationsInput | number | null
    name_s?: NullableStringFieldUpdateOperationsInput | string | null
    last_name_s?: NullableStringFieldUpdateOperationsInput | string | null
    style_colorimetry_app?: NullableIntFieldUpdateOperationsInput | number | null
    sex_visibility?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type preferenceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_user?: NullableIntFieldUpdateOperationsInput | number | null
    name_s?: NullableStringFieldUpdateOperationsInput | string | null
    last_name_s?: NullableStringFieldUpdateOperationsInput | string | null
    style_colorimetry_app?: NullableIntFieldUpdateOperationsInput | number | null
    sex_visibility?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type servicesCreateInput = {
    user_id: number
    kilometers: number
    driver: number
    first_firefighter: string
    second_firefighter?: string | null
    third_firefighter?: string | null
    type_service: string
    folio?: string | null
    cologne: string
    stret: string
    crossing: string
    reporter: string
    phone_reporter: string
    close_type: string
    general_and_conclusion: string
    close_kilometers: number
    kilometers_traveled?: number | null
    status: string
    logs_services?: logs_servicesCreateNestedManyWithoutServicesInput
    vehicles: vehiclesCreateNestedOneWithoutServicesInput
  }

  export type servicesUncheckedCreateInput = {
    id?: number
    user_id: number
    vehicle_id: number
    kilometers: number
    driver: number
    first_firefighter: string
    second_firefighter?: string | null
    third_firefighter?: string | null
    type_service: string
    folio?: string | null
    cologne: string
    stret: string
    crossing: string
    reporter: string
    phone_reporter: string
    close_type: string
    general_and_conclusion: string
    close_kilometers: number
    kilometers_traveled?: number | null
    status: string
    logs_services?: logs_servicesUncheckedCreateNestedManyWithoutServicesInput
  }

  export type servicesUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    kilometers?: IntFieldUpdateOperationsInput | number
    driver?: IntFieldUpdateOperationsInput | number
    first_firefighter?: StringFieldUpdateOperationsInput | string
    second_firefighter?: NullableStringFieldUpdateOperationsInput | string | null
    third_firefighter?: NullableStringFieldUpdateOperationsInput | string | null
    type_service?: StringFieldUpdateOperationsInput | string
    folio?: NullableStringFieldUpdateOperationsInput | string | null
    cologne?: StringFieldUpdateOperationsInput | string
    stret?: StringFieldUpdateOperationsInput | string
    crossing?: StringFieldUpdateOperationsInput | string
    reporter?: StringFieldUpdateOperationsInput | string
    phone_reporter?: StringFieldUpdateOperationsInput | string
    close_type?: StringFieldUpdateOperationsInput | string
    general_and_conclusion?: StringFieldUpdateOperationsInput | string
    close_kilometers?: IntFieldUpdateOperationsInput | number
    kilometers_traveled?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    logs_services?: logs_servicesUpdateManyWithoutServicesNestedInput
    vehicles?: vehiclesUpdateOneRequiredWithoutServicesNestedInput
  }

  export type servicesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    vehicle_id?: IntFieldUpdateOperationsInput | number
    kilometers?: IntFieldUpdateOperationsInput | number
    driver?: IntFieldUpdateOperationsInput | number
    first_firefighter?: StringFieldUpdateOperationsInput | string
    second_firefighter?: NullableStringFieldUpdateOperationsInput | string | null
    third_firefighter?: NullableStringFieldUpdateOperationsInput | string | null
    type_service?: StringFieldUpdateOperationsInput | string
    folio?: NullableStringFieldUpdateOperationsInput | string | null
    cologne?: StringFieldUpdateOperationsInput | string
    stret?: StringFieldUpdateOperationsInput | string
    crossing?: StringFieldUpdateOperationsInput | string
    reporter?: StringFieldUpdateOperationsInput | string
    phone_reporter?: StringFieldUpdateOperationsInput | string
    close_type?: StringFieldUpdateOperationsInput | string
    general_and_conclusion?: StringFieldUpdateOperationsInput | string
    close_kilometers?: IntFieldUpdateOperationsInput | number
    kilometers_traveled?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    logs_services?: logs_servicesUncheckedUpdateManyWithoutServicesNestedInput
  }

  export type servicesCreateManyInput = {
    id?: number
    user_id: number
    vehicle_id: number
    kilometers: number
    driver: number
    first_firefighter: string
    second_firefighter?: string | null
    third_firefighter?: string | null
    type_service: string
    folio?: string | null
    cologne: string
    stret: string
    crossing: string
    reporter: string
    phone_reporter: string
    close_type: string
    general_and_conclusion: string
    close_kilometers: number
    kilometers_traveled?: number | null
    status: string
  }

  export type servicesUpdateManyMutationInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    kilometers?: IntFieldUpdateOperationsInput | number
    driver?: IntFieldUpdateOperationsInput | number
    first_firefighter?: StringFieldUpdateOperationsInput | string
    second_firefighter?: NullableStringFieldUpdateOperationsInput | string | null
    third_firefighter?: NullableStringFieldUpdateOperationsInput | string | null
    type_service?: StringFieldUpdateOperationsInput | string
    folio?: NullableStringFieldUpdateOperationsInput | string | null
    cologne?: StringFieldUpdateOperationsInput | string
    stret?: StringFieldUpdateOperationsInput | string
    crossing?: StringFieldUpdateOperationsInput | string
    reporter?: StringFieldUpdateOperationsInput | string
    phone_reporter?: StringFieldUpdateOperationsInput | string
    close_type?: StringFieldUpdateOperationsInput | string
    general_and_conclusion?: StringFieldUpdateOperationsInput | string
    close_kilometers?: IntFieldUpdateOperationsInput | number
    kilometers_traveled?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type servicesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    vehicle_id?: IntFieldUpdateOperationsInput | number
    kilometers?: IntFieldUpdateOperationsInput | number
    driver?: IntFieldUpdateOperationsInput | number
    first_firefighter?: StringFieldUpdateOperationsInput | string
    second_firefighter?: NullableStringFieldUpdateOperationsInput | string | null
    third_firefighter?: NullableStringFieldUpdateOperationsInput | string | null
    type_service?: StringFieldUpdateOperationsInput | string
    folio?: NullableStringFieldUpdateOperationsInput | string | null
    cologne?: StringFieldUpdateOperationsInput | string
    stret?: StringFieldUpdateOperationsInput | string
    crossing?: StringFieldUpdateOperationsInput | string
    reporter?: StringFieldUpdateOperationsInput | string
    phone_reporter?: StringFieldUpdateOperationsInput | string
    close_type?: StringFieldUpdateOperationsInput | string
    general_and_conclusion?: StringFieldUpdateOperationsInput | string
    close_kilometers?: IntFieldUpdateOperationsInput | number
    kilometers_traveled?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type tipe_tool_equipmentCreateInput = {
    cover_image?: string | null
    name?: string | null
    type?: string | null
    on_inventory?: number | null
  }

  export type tipe_tool_equipmentUncheckedCreateInput = {
    id?: number
    cover_image?: string | null
    name?: string | null
    type?: string | null
    on_inventory?: number | null
  }

  export type tipe_tool_equipmentUpdateInput = {
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    on_inventory?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tipe_tool_equipmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    on_inventory?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tipe_tool_equipmentCreateManyInput = {
    id?: number
    cover_image?: string | null
    name?: string | null
    type?: string | null
    on_inventory?: number | null
  }

  export type tipe_tool_equipmentUpdateManyMutationInput = {
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    on_inventory?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tipe_tool_equipmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cover_image?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    on_inventory?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type type_to_vehicleCreateInput = {
    type?: string | null
    image?: string | null
    operative?: number | null
    in_operative?: number | null
  }

  export type type_to_vehicleUncheckedCreateInput = {
    id?: number
    type?: string | null
    image?: string | null
    operative?: number | null
    in_operative?: number | null
  }

  export type type_to_vehicleUpdateInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    operative?: NullableIntFieldUpdateOperationsInput | number | null
    in_operative?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type type_to_vehicleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    operative?: NullableIntFieldUpdateOperationsInput | number | null
    in_operative?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type type_to_vehicleCreateManyInput = {
    id?: number
    type?: string | null
    image?: string | null
    operative?: number | null
    in_operative?: number | null
  }

  export type type_to_vehicleUpdateManyMutationInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    operative?: NullableIntFieldUpdateOperationsInput | number | null
    in_operative?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type type_to_vehicleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    operative?: NullableIntFieldUpdateOperationsInput | number | null
    in_operative?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usersCreateInput = {
    first_name: string
    second_name?: string | null
    last_name: string
    second_last_name?: string | null
    status_now?: string | null
    blood_group?: string | null
    blood_rh_factor?: string | null
    social_security_number?: string | null
    type_position?: string | null
    position: string
    email: string
    phone: string
    employee_number: string
    work_shift: string
    birthdate: Date | string
    start_date: Date | string
    emergency_contact_name: string
    emergency_contact_phone: string
    emergency_contact_phone_alt?: string | null
  }

  export type usersUncheckedCreateInput = {
    id?: number
    first_name: string
    second_name?: string | null
    last_name: string
    second_last_name?: string | null
    status_now?: string | null
    blood_group?: string | null
    blood_rh_factor?: string | null
    social_security_number?: string | null
    type_position?: string | null
    position: string
    email: string
    phone: string
    employee_number: string
    work_shift: string
    birthdate: Date | string
    start_date: Date | string
    emergency_contact_name: string
    emergency_contact_phone: string
    emergency_contact_phone_alt?: string | null
  }

  export type usersUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    second_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    second_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    status_now?: NullableStringFieldUpdateOperationsInput | string | null
    blood_group?: NullableStringFieldUpdateOperationsInput | string | null
    blood_rh_factor?: NullableStringFieldUpdateOperationsInput | string | null
    social_security_number?: NullableStringFieldUpdateOperationsInput | string | null
    type_position?: NullableStringFieldUpdateOperationsInput | string | null
    position?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    employee_number?: StringFieldUpdateOperationsInput | string
    work_shift?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    emergency_contact_name?: StringFieldUpdateOperationsInput | string
    emergency_contact_phone?: StringFieldUpdateOperationsInput | string
    emergency_contact_phone_alt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    second_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    second_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    status_now?: NullableStringFieldUpdateOperationsInput | string | null
    blood_group?: NullableStringFieldUpdateOperationsInput | string | null
    blood_rh_factor?: NullableStringFieldUpdateOperationsInput | string | null
    social_security_number?: NullableStringFieldUpdateOperationsInput | string | null
    type_position?: NullableStringFieldUpdateOperationsInput | string | null
    position?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    employee_number?: StringFieldUpdateOperationsInput | string
    work_shift?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    emergency_contact_name?: StringFieldUpdateOperationsInput | string
    emergency_contact_phone?: StringFieldUpdateOperationsInput | string
    emergency_contact_phone_alt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersCreateManyInput = {
    id?: number
    first_name: string
    second_name?: string | null
    last_name: string
    second_last_name?: string | null
    status_now?: string | null
    blood_group?: string | null
    blood_rh_factor?: string | null
    social_security_number?: string | null
    type_position?: string | null
    position: string
    email: string
    phone: string
    employee_number: string
    work_shift: string
    birthdate: Date | string
    start_date: Date | string
    emergency_contact_name: string
    emergency_contact_phone: string
    emergency_contact_phone_alt?: string | null
  }

  export type usersUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    second_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    second_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    status_now?: NullableStringFieldUpdateOperationsInput | string | null
    blood_group?: NullableStringFieldUpdateOperationsInput | string | null
    blood_rh_factor?: NullableStringFieldUpdateOperationsInput | string | null
    social_security_number?: NullableStringFieldUpdateOperationsInput | string | null
    type_position?: NullableStringFieldUpdateOperationsInput | string | null
    position?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    employee_number?: StringFieldUpdateOperationsInput | string
    work_shift?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    emergency_contact_name?: StringFieldUpdateOperationsInput | string
    emergency_contact_phone?: StringFieldUpdateOperationsInput | string
    emergency_contact_phone_alt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    second_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    second_last_name?: NullableStringFieldUpdateOperationsInput | string | null
    status_now?: NullableStringFieldUpdateOperationsInput | string | null
    blood_group?: NullableStringFieldUpdateOperationsInput | string | null
    blood_rh_factor?: NullableStringFieldUpdateOperationsInput | string | null
    social_security_number?: NullableStringFieldUpdateOperationsInput | string | null
    type_position?: NullableStringFieldUpdateOperationsInput | string | null
    position?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    employee_number?: StringFieldUpdateOperationsInput | string
    work_shift?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    emergency_contact_name?: StringFieldUpdateOperationsInput | string
    emergency_contact_phone?: StringFieldUpdateOperationsInput | string
    emergency_contact_phone_alt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type vehicle_logsCreateInput = {
    driver_id: number
    luz_delantera_alta: string
    luz_delantera_baja: string
    luces_de_emergencia: string
    luces_neblineros: string
    luz_direccional: string
    luz_de_freno: string
    luz_de_reversa: string
    luces_del_tanque_cisterna: string
    luces_interior_cabina: string
    motor_adicional: string
    estado_de_tablero_indicadores: string
    elevadores_de_cristales: string
    espejos_lateral_derecho: string
    espejos_lateral_izquierdo: string
    espejo_retrovisor: string
    cristal_parabrisas: string
    cristal_medallon: string
    cristal_de_puertas: string
    gato_hidraulico: string
    herramientas_cambio_de_ruedas: string
    bocina_de_sonoros: string
    modulo_luminosos_sonoros: string
    torreta: string
    cinturones_de_seguridad: string
    limpia_parabrisas: string
    poliza_seguro: string
    tarjeta_circulacion: string
    tapon_tanque_combustible: string
    tapon_aceite: string
    tapon_agua: string
    nivel_aceite_motor: string
    nivel_aceite_transmision: string
    nivel_agua_radiador: string
    nivel_liquido_frenos: string
    llanta_delantera_derecha: string
    llanta_delantera_izquierda: string
    llanta_trasera_derecha: string
    llanta_trasera_izquierda: string
    llanta_repuesto: string
    fecha_registro?: Date | string | null
    llaves_encendido: string
    switch_encendido: string
    bateria: string
    postes_terminales_bateria: string
    vehicles: vehiclesCreateNestedOneWithoutVehicle_logsInput
  }

  export type vehicle_logsUncheckedCreateInput = {
    id?: number
    vehicle_id: number
    driver_id: number
    luz_delantera_alta: string
    luz_delantera_baja: string
    luces_de_emergencia: string
    luces_neblineros: string
    luz_direccional: string
    luz_de_freno: string
    luz_de_reversa: string
    luces_del_tanque_cisterna: string
    luces_interior_cabina: string
    motor_adicional: string
    estado_de_tablero_indicadores: string
    elevadores_de_cristales: string
    espejos_lateral_derecho: string
    espejos_lateral_izquierdo: string
    espejo_retrovisor: string
    cristal_parabrisas: string
    cristal_medallon: string
    cristal_de_puertas: string
    gato_hidraulico: string
    herramientas_cambio_de_ruedas: string
    bocina_de_sonoros: string
    modulo_luminosos_sonoros: string
    torreta: string
    cinturones_de_seguridad: string
    limpia_parabrisas: string
    poliza_seguro: string
    tarjeta_circulacion: string
    tapon_tanque_combustible: string
    tapon_aceite: string
    tapon_agua: string
    nivel_aceite_motor: string
    nivel_aceite_transmision: string
    nivel_agua_radiador: string
    nivel_liquido_frenos: string
    llanta_delantera_derecha: string
    llanta_delantera_izquierda: string
    llanta_trasera_derecha: string
    llanta_trasera_izquierda: string
    llanta_repuesto: string
    fecha_registro?: Date | string | null
    llaves_encendido: string
    switch_encendido: string
    bateria: string
    postes_terminales_bateria: string
  }

  export type vehicle_logsUpdateInput = {
    driver_id?: IntFieldUpdateOperationsInput | number
    luz_delantera_alta?: StringFieldUpdateOperationsInput | string
    luz_delantera_baja?: StringFieldUpdateOperationsInput | string
    luces_de_emergencia?: StringFieldUpdateOperationsInput | string
    luces_neblineros?: StringFieldUpdateOperationsInput | string
    luz_direccional?: StringFieldUpdateOperationsInput | string
    luz_de_freno?: StringFieldUpdateOperationsInput | string
    luz_de_reversa?: StringFieldUpdateOperationsInput | string
    luces_del_tanque_cisterna?: StringFieldUpdateOperationsInput | string
    luces_interior_cabina?: StringFieldUpdateOperationsInput | string
    motor_adicional?: StringFieldUpdateOperationsInput | string
    estado_de_tablero_indicadores?: StringFieldUpdateOperationsInput | string
    elevadores_de_cristales?: StringFieldUpdateOperationsInput | string
    espejos_lateral_derecho?: StringFieldUpdateOperationsInput | string
    espejos_lateral_izquierdo?: StringFieldUpdateOperationsInput | string
    espejo_retrovisor?: StringFieldUpdateOperationsInput | string
    cristal_parabrisas?: StringFieldUpdateOperationsInput | string
    cristal_medallon?: StringFieldUpdateOperationsInput | string
    cristal_de_puertas?: StringFieldUpdateOperationsInput | string
    gato_hidraulico?: StringFieldUpdateOperationsInput | string
    herramientas_cambio_de_ruedas?: StringFieldUpdateOperationsInput | string
    bocina_de_sonoros?: StringFieldUpdateOperationsInput | string
    modulo_luminosos_sonoros?: StringFieldUpdateOperationsInput | string
    torreta?: StringFieldUpdateOperationsInput | string
    cinturones_de_seguridad?: StringFieldUpdateOperationsInput | string
    limpia_parabrisas?: StringFieldUpdateOperationsInput | string
    poliza_seguro?: StringFieldUpdateOperationsInput | string
    tarjeta_circulacion?: StringFieldUpdateOperationsInput | string
    tapon_tanque_combustible?: StringFieldUpdateOperationsInput | string
    tapon_aceite?: StringFieldUpdateOperationsInput | string
    tapon_agua?: StringFieldUpdateOperationsInput | string
    nivel_aceite_motor?: StringFieldUpdateOperationsInput | string
    nivel_aceite_transmision?: StringFieldUpdateOperationsInput | string
    nivel_agua_radiador?: StringFieldUpdateOperationsInput | string
    nivel_liquido_frenos?: StringFieldUpdateOperationsInput | string
    llanta_delantera_derecha?: StringFieldUpdateOperationsInput | string
    llanta_delantera_izquierda?: StringFieldUpdateOperationsInput | string
    llanta_trasera_derecha?: StringFieldUpdateOperationsInput | string
    llanta_trasera_izquierda?: StringFieldUpdateOperationsInput | string
    llanta_repuesto?: StringFieldUpdateOperationsInput | string
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    llaves_encendido?: StringFieldUpdateOperationsInput | string
    switch_encendido?: StringFieldUpdateOperationsInput | string
    bateria?: StringFieldUpdateOperationsInput | string
    postes_terminales_bateria?: StringFieldUpdateOperationsInput | string
    vehicles?: vehiclesUpdateOneRequiredWithoutVehicle_logsNestedInput
  }

  export type vehicle_logsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    vehicle_id?: IntFieldUpdateOperationsInput | number
    driver_id?: IntFieldUpdateOperationsInput | number
    luz_delantera_alta?: StringFieldUpdateOperationsInput | string
    luz_delantera_baja?: StringFieldUpdateOperationsInput | string
    luces_de_emergencia?: StringFieldUpdateOperationsInput | string
    luces_neblineros?: StringFieldUpdateOperationsInput | string
    luz_direccional?: StringFieldUpdateOperationsInput | string
    luz_de_freno?: StringFieldUpdateOperationsInput | string
    luz_de_reversa?: StringFieldUpdateOperationsInput | string
    luces_del_tanque_cisterna?: StringFieldUpdateOperationsInput | string
    luces_interior_cabina?: StringFieldUpdateOperationsInput | string
    motor_adicional?: StringFieldUpdateOperationsInput | string
    estado_de_tablero_indicadores?: StringFieldUpdateOperationsInput | string
    elevadores_de_cristales?: StringFieldUpdateOperationsInput | string
    espejos_lateral_derecho?: StringFieldUpdateOperationsInput | string
    espejos_lateral_izquierdo?: StringFieldUpdateOperationsInput | string
    espejo_retrovisor?: StringFieldUpdateOperationsInput | string
    cristal_parabrisas?: StringFieldUpdateOperationsInput | string
    cristal_medallon?: StringFieldUpdateOperationsInput | string
    cristal_de_puertas?: StringFieldUpdateOperationsInput | string
    gato_hidraulico?: StringFieldUpdateOperationsInput | string
    herramientas_cambio_de_ruedas?: StringFieldUpdateOperationsInput | string
    bocina_de_sonoros?: StringFieldUpdateOperationsInput | string
    modulo_luminosos_sonoros?: StringFieldUpdateOperationsInput | string
    torreta?: StringFieldUpdateOperationsInput | string
    cinturones_de_seguridad?: StringFieldUpdateOperationsInput | string
    limpia_parabrisas?: StringFieldUpdateOperationsInput | string
    poliza_seguro?: StringFieldUpdateOperationsInput | string
    tarjeta_circulacion?: StringFieldUpdateOperationsInput | string
    tapon_tanque_combustible?: StringFieldUpdateOperationsInput | string
    tapon_aceite?: StringFieldUpdateOperationsInput | string
    tapon_agua?: StringFieldUpdateOperationsInput | string
    nivel_aceite_motor?: StringFieldUpdateOperationsInput | string
    nivel_aceite_transmision?: StringFieldUpdateOperationsInput | string
    nivel_agua_radiador?: StringFieldUpdateOperationsInput | string
    nivel_liquido_frenos?: StringFieldUpdateOperationsInput | string
    llanta_delantera_derecha?: StringFieldUpdateOperationsInput | string
    llanta_delantera_izquierda?: StringFieldUpdateOperationsInput | string
    llanta_trasera_derecha?: StringFieldUpdateOperationsInput | string
    llanta_trasera_izquierda?: StringFieldUpdateOperationsInput | string
    llanta_repuesto?: StringFieldUpdateOperationsInput | string
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    llaves_encendido?: StringFieldUpdateOperationsInput | string
    switch_encendido?: StringFieldUpdateOperationsInput | string
    bateria?: StringFieldUpdateOperationsInput | string
    postes_terminales_bateria?: StringFieldUpdateOperationsInput | string
  }

  export type vehicle_logsCreateManyInput = {
    id?: number
    vehicle_id: number
    driver_id: number
    luz_delantera_alta: string
    luz_delantera_baja: string
    luces_de_emergencia: string
    luces_neblineros: string
    luz_direccional: string
    luz_de_freno: string
    luz_de_reversa: string
    luces_del_tanque_cisterna: string
    luces_interior_cabina: string
    motor_adicional: string
    estado_de_tablero_indicadores: string
    elevadores_de_cristales: string
    espejos_lateral_derecho: string
    espejos_lateral_izquierdo: string
    espejo_retrovisor: string
    cristal_parabrisas: string
    cristal_medallon: string
    cristal_de_puertas: string
    gato_hidraulico: string
    herramientas_cambio_de_ruedas: string
    bocina_de_sonoros: string
    modulo_luminosos_sonoros: string
    torreta: string
    cinturones_de_seguridad: string
    limpia_parabrisas: string
    poliza_seguro: string
    tarjeta_circulacion: string
    tapon_tanque_combustible: string
    tapon_aceite: string
    tapon_agua: string
    nivel_aceite_motor: string
    nivel_aceite_transmision: string
    nivel_agua_radiador: string
    nivel_liquido_frenos: string
    llanta_delantera_derecha: string
    llanta_delantera_izquierda: string
    llanta_trasera_derecha: string
    llanta_trasera_izquierda: string
    llanta_repuesto: string
    fecha_registro?: Date | string | null
    llaves_encendido: string
    switch_encendido: string
    bateria: string
    postes_terminales_bateria: string
  }

  export type vehicle_logsUpdateManyMutationInput = {
    driver_id?: IntFieldUpdateOperationsInput | number
    luz_delantera_alta?: StringFieldUpdateOperationsInput | string
    luz_delantera_baja?: StringFieldUpdateOperationsInput | string
    luces_de_emergencia?: StringFieldUpdateOperationsInput | string
    luces_neblineros?: StringFieldUpdateOperationsInput | string
    luz_direccional?: StringFieldUpdateOperationsInput | string
    luz_de_freno?: StringFieldUpdateOperationsInput | string
    luz_de_reversa?: StringFieldUpdateOperationsInput | string
    luces_del_tanque_cisterna?: StringFieldUpdateOperationsInput | string
    luces_interior_cabina?: StringFieldUpdateOperationsInput | string
    motor_adicional?: StringFieldUpdateOperationsInput | string
    estado_de_tablero_indicadores?: StringFieldUpdateOperationsInput | string
    elevadores_de_cristales?: StringFieldUpdateOperationsInput | string
    espejos_lateral_derecho?: StringFieldUpdateOperationsInput | string
    espejos_lateral_izquierdo?: StringFieldUpdateOperationsInput | string
    espejo_retrovisor?: StringFieldUpdateOperationsInput | string
    cristal_parabrisas?: StringFieldUpdateOperationsInput | string
    cristal_medallon?: StringFieldUpdateOperationsInput | string
    cristal_de_puertas?: StringFieldUpdateOperationsInput | string
    gato_hidraulico?: StringFieldUpdateOperationsInput | string
    herramientas_cambio_de_ruedas?: StringFieldUpdateOperationsInput | string
    bocina_de_sonoros?: StringFieldUpdateOperationsInput | string
    modulo_luminosos_sonoros?: StringFieldUpdateOperationsInput | string
    torreta?: StringFieldUpdateOperationsInput | string
    cinturones_de_seguridad?: StringFieldUpdateOperationsInput | string
    limpia_parabrisas?: StringFieldUpdateOperationsInput | string
    poliza_seguro?: StringFieldUpdateOperationsInput | string
    tarjeta_circulacion?: StringFieldUpdateOperationsInput | string
    tapon_tanque_combustible?: StringFieldUpdateOperationsInput | string
    tapon_aceite?: StringFieldUpdateOperationsInput | string
    tapon_agua?: StringFieldUpdateOperationsInput | string
    nivel_aceite_motor?: StringFieldUpdateOperationsInput | string
    nivel_aceite_transmision?: StringFieldUpdateOperationsInput | string
    nivel_agua_radiador?: StringFieldUpdateOperationsInput | string
    nivel_liquido_frenos?: StringFieldUpdateOperationsInput | string
    llanta_delantera_derecha?: StringFieldUpdateOperationsInput | string
    llanta_delantera_izquierda?: StringFieldUpdateOperationsInput | string
    llanta_trasera_derecha?: StringFieldUpdateOperationsInput | string
    llanta_trasera_izquierda?: StringFieldUpdateOperationsInput | string
    llanta_repuesto?: StringFieldUpdateOperationsInput | string
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    llaves_encendido?: StringFieldUpdateOperationsInput | string
    switch_encendido?: StringFieldUpdateOperationsInput | string
    bateria?: StringFieldUpdateOperationsInput | string
    postes_terminales_bateria?: StringFieldUpdateOperationsInput | string
  }

  export type vehicle_logsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    vehicle_id?: IntFieldUpdateOperationsInput | number
    driver_id?: IntFieldUpdateOperationsInput | number
    luz_delantera_alta?: StringFieldUpdateOperationsInput | string
    luz_delantera_baja?: StringFieldUpdateOperationsInput | string
    luces_de_emergencia?: StringFieldUpdateOperationsInput | string
    luces_neblineros?: StringFieldUpdateOperationsInput | string
    luz_direccional?: StringFieldUpdateOperationsInput | string
    luz_de_freno?: StringFieldUpdateOperationsInput | string
    luz_de_reversa?: StringFieldUpdateOperationsInput | string
    luces_del_tanque_cisterna?: StringFieldUpdateOperationsInput | string
    luces_interior_cabina?: StringFieldUpdateOperationsInput | string
    motor_adicional?: StringFieldUpdateOperationsInput | string
    estado_de_tablero_indicadores?: StringFieldUpdateOperationsInput | string
    elevadores_de_cristales?: StringFieldUpdateOperationsInput | string
    espejos_lateral_derecho?: StringFieldUpdateOperationsInput | string
    espejos_lateral_izquierdo?: StringFieldUpdateOperationsInput | string
    espejo_retrovisor?: StringFieldUpdateOperationsInput | string
    cristal_parabrisas?: StringFieldUpdateOperationsInput | string
    cristal_medallon?: StringFieldUpdateOperationsInput | string
    cristal_de_puertas?: StringFieldUpdateOperationsInput | string
    gato_hidraulico?: StringFieldUpdateOperationsInput | string
    herramientas_cambio_de_ruedas?: StringFieldUpdateOperationsInput | string
    bocina_de_sonoros?: StringFieldUpdateOperationsInput | string
    modulo_luminosos_sonoros?: StringFieldUpdateOperationsInput | string
    torreta?: StringFieldUpdateOperationsInput | string
    cinturones_de_seguridad?: StringFieldUpdateOperationsInput | string
    limpia_parabrisas?: StringFieldUpdateOperationsInput | string
    poliza_seguro?: StringFieldUpdateOperationsInput | string
    tarjeta_circulacion?: StringFieldUpdateOperationsInput | string
    tapon_tanque_combustible?: StringFieldUpdateOperationsInput | string
    tapon_aceite?: StringFieldUpdateOperationsInput | string
    tapon_agua?: StringFieldUpdateOperationsInput | string
    nivel_aceite_motor?: StringFieldUpdateOperationsInput | string
    nivel_aceite_transmision?: StringFieldUpdateOperationsInput | string
    nivel_agua_radiador?: StringFieldUpdateOperationsInput | string
    nivel_liquido_frenos?: StringFieldUpdateOperationsInput | string
    llanta_delantera_derecha?: StringFieldUpdateOperationsInput | string
    llanta_delantera_izquierda?: StringFieldUpdateOperationsInput | string
    llanta_trasera_derecha?: StringFieldUpdateOperationsInput | string
    llanta_trasera_izquierda?: StringFieldUpdateOperationsInput | string
    llanta_repuesto?: StringFieldUpdateOperationsInput | string
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    llaves_encendido?: StringFieldUpdateOperationsInput | string
    switch_encendido?: StringFieldUpdateOperationsInput | string
    bateria?: StringFieldUpdateOperationsInput | string
    postes_terminales_bateria?: StringFieldUpdateOperationsInput | string
  }

  export type vehiclesCreateInput = {
    number_unit: number
    type: string
    cover_img: string
    left_img: string
    up_img: string
    front_img: string
    back_img: string
    kilometers: number
    kilometers_to_service: number
    date_register: Date | string
    vehicle_license_plates: string
    status: string
    model: string
    card_brand: string
    damages?: damagesCreateNestedManyWithoutVehiclesInput
    services?: servicesCreateNestedManyWithoutVehiclesInput
    vehicle_logs?: vehicle_logsCreateNestedManyWithoutVehiclesInput
    work_force?: work_forceCreateNestedManyWithoutVehiclesInput
  }

  export type vehiclesUncheckedCreateInput = {
    id?: number
    number_unit: number
    type: string
    cover_img: string
    left_img: string
    up_img: string
    front_img: string
    back_img: string
    kilometers: number
    kilometers_to_service: number
    date_register: Date | string
    vehicle_license_plates: string
    status: string
    model: string
    card_brand: string
    damages?: damagesUncheckedCreateNestedManyWithoutVehiclesInput
    services?: servicesUncheckedCreateNestedManyWithoutVehiclesInput
    vehicle_logs?: vehicle_logsUncheckedCreateNestedManyWithoutVehiclesInput
    work_force?: work_forceUncheckedCreateNestedManyWithoutVehiclesInput
  }

  export type vehiclesUpdateInput = {
    number_unit?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    cover_img?: StringFieldUpdateOperationsInput | string
    left_img?: StringFieldUpdateOperationsInput | string
    up_img?: StringFieldUpdateOperationsInput | string
    front_img?: StringFieldUpdateOperationsInput | string
    back_img?: StringFieldUpdateOperationsInput | string
    kilometers?: FloatFieldUpdateOperationsInput | number
    kilometers_to_service?: FloatFieldUpdateOperationsInput | number
    date_register?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle_license_plates?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    card_brand?: StringFieldUpdateOperationsInput | string
    damages?: damagesUpdateManyWithoutVehiclesNestedInput
    services?: servicesUpdateManyWithoutVehiclesNestedInput
    vehicle_logs?: vehicle_logsUpdateManyWithoutVehiclesNestedInput
    work_force?: work_forceUpdateManyWithoutVehiclesNestedInput
  }

  export type vehiclesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    number_unit?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    cover_img?: StringFieldUpdateOperationsInput | string
    left_img?: StringFieldUpdateOperationsInput | string
    up_img?: StringFieldUpdateOperationsInput | string
    front_img?: StringFieldUpdateOperationsInput | string
    back_img?: StringFieldUpdateOperationsInput | string
    kilometers?: FloatFieldUpdateOperationsInput | number
    kilometers_to_service?: FloatFieldUpdateOperationsInput | number
    date_register?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle_license_plates?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    card_brand?: StringFieldUpdateOperationsInput | string
    damages?: damagesUncheckedUpdateManyWithoutVehiclesNestedInput
    services?: servicesUncheckedUpdateManyWithoutVehiclesNestedInput
    vehicle_logs?: vehicle_logsUncheckedUpdateManyWithoutVehiclesNestedInput
    work_force?: work_forceUncheckedUpdateManyWithoutVehiclesNestedInput
  }

  export type vehiclesCreateManyInput = {
    id?: number
    number_unit: number
    type: string
    cover_img: string
    left_img: string
    up_img: string
    front_img: string
    back_img: string
    kilometers: number
    kilometers_to_service: number
    date_register: Date | string
    vehicle_license_plates: string
    status: string
    model: string
    card_brand: string
  }

  export type vehiclesUpdateManyMutationInput = {
    number_unit?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    cover_img?: StringFieldUpdateOperationsInput | string
    left_img?: StringFieldUpdateOperationsInput | string
    up_img?: StringFieldUpdateOperationsInput | string
    front_img?: StringFieldUpdateOperationsInput | string
    back_img?: StringFieldUpdateOperationsInput | string
    kilometers?: FloatFieldUpdateOperationsInput | number
    kilometers_to_service?: FloatFieldUpdateOperationsInput | number
    date_register?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle_license_plates?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    card_brand?: StringFieldUpdateOperationsInput | string
  }

  export type vehiclesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    number_unit?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    cover_img?: StringFieldUpdateOperationsInput | string
    left_img?: StringFieldUpdateOperationsInput | string
    up_img?: StringFieldUpdateOperationsInput | string
    front_img?: StringFieldUpdateOperationsInput | string
    back_img?: StringFieldUpdateOperationsInput | string
    kilometers?: FloatFieldUpdateOperationsInput | number
    kilometers_to_service?: FloatFieldUpdateOperationsInput | number
    date_register?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle_license_plates?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    card_brand?: StringFieldUpdateOperationsInput | string
  }

  export type work_forceCreateInput = {
    work_shift: string
    id_drive?: number | null
    id_persone_one: number
    id_persone_two?: number | null
    id_presone_trhee?: number | null
    extras_persone?: string | null
    date_work_shift: Date | string
    notes?: string | null
    base?: baseCreateNestedOneWithoutWork_forceInput
    vehicles?: vehiclesCreateNestedOneWithoutWork_forceInput
  }

  export type work_forceUncheckedCreateInput = {
    id?: number
    work_shift: string
    id_base?: number | null
    id_vehicle?: number | null
    id_drive?: number | null
    id_persone_one: number
    id_persone_two?: number | null
    id_presone_trhee?: number | null
    extras_persone?: string | null
    date_work_shift: Date | string
    notes?: string | null
  }

  export type work_forceUpdateInput = {
    work_shift?: StringFieldUpdateOperationsInput | string
    id_drive?: NullableIntFieldUpdateOperationsInput | number | null
    id_persone_one?: IntFieldUpdateOperationsInput | number
    id_persone_two?: NullableIntFieldUpdateOperationsInput | number | null
    id_presone_trhee?: NullableIntFieldUpdateOperationsInput | number | null
    extras_persone?: NullableStringFieldUpdateOperationsInput | string | null
    date_work_shift?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    base?: baseUpdateOneWithoutWork_forceNestedInput
    vehicles?: vehiclesUpdateOneWithoutWork_forceNestedInput
  }

  export type work_forceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    work_shift?: StringFieldUpdateOperationsInput | string
    id_base?: NullableIntFieldUpdateOperationsInput | number | null
    id_vehicle?: NullableIntFieldUpdateOperationsInput | number | null
    id_drive?: NullableIntFieldUpdateOperationsInput | number | null
    id_persone_one?: IntFieldUpdateOperationsInput | number
    id_persone_two?: NullableIntFieldUpdateOperationsInput | number | null
    id_presone_trhee?: NullableIntFieldUpdateOperationsInput | number | null
    extras_persone?: NullableStringFieldUpdateOperationsInput | string | null
    date_work_shift?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type work_forceCreateManyInput = {
    id?: number
    work_shift: string
    id_base?: number | null
    id_vehicle?: number | null
    id_drive?: number | null
    id_persone_one: number
    id_persone_two?: number | null
    id_presone_trhee?: number | null
    extras_persone?: string | null
    date_work_shift: Date | string
    notes?: string | null
  }

  export type work_forceUpdateManyMutationInput = {
    work_shift?: StringFieldUpdateOperationsInput | string
    id_drive?: NullableIntFieldUpdateOperationsInput | number | null
    id_persone_one?: IntFieldUpdateOperationsInput | number
    id_persone_two?: NullableIntFieldUpdateOperationsInput | number | null
    id_presone_trhee?: NullableIntFieldUpdateOperationsInput | number | null
    extras_persone?: NullableStringFieldUpdateOperationsInput | string | null
    date_work_shift?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type work_forceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    work_shift?: StringFieldUpdateOperationsInput | string
    id_base?: NullableIntFieldUpdateOperationsInput | number | null
    id_vehicle?: NullableIntFieldUpdateOperationsInput | number | null
    id_drive?: NullableIntFieldUpdateOperationsInput | number | null
    id_persone_one?: IntFieldUpdateOperationsInput | number
    id_persone_two?: NullableIntFieldUpdateOperationsInput | number | null
    id_presone_trhee?: NullableIntFieldUpdateOperationsInput | number | null
    extras_persone?: NullableStringFieldUpdateOperationsInput | string | null
    date_work_shift?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type work_shiftCreateInput = {
    name: string
    operative_personal?: number | null
    in_operative_personal?: number | null
    workday: string
    time_start: number
    working_time: number
  }

  export type work_shiftUncheckedCreateInput = {
    id?: number
    name: string
    operative_personal?: number | null
    in_operative_personal?: number | null
    workday: string
    time_start: number
    working_time: number
  }

  export type work_shiftUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    operative_personal?: NullableIntFieldUpdateOperationsInput | number | null
    in_operative_personal?: NullableIntFieldUpdateOperationsInput | number | null
    workday?: StringFieldUpdateOperationsInput | string
    time_start?: IntFieldUpdateOperationsInput | number
    working_time?: IntFieldUpdateOperationsInput | number
  }

  export type work_shiftUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    operative_personal?: NullableIntFieldUpdateOperationsInput | number | null
    in_operative_personal?: NullableIntFieldUpdateOperationsInput | number | null
    workday?: StringFieldUpdateOperationsInput | string
    time_start?: IntFieldUpdateOperationsInput | number
    working_time?: IntFieldUpdateOperationsInput | number
  }

  export type work_shiftCreateManyInput = {
    id?: number
    name: string
    operative_personal?: number | null
    in_operative_personal?: number | null
    workday: string
    time_start: number
    working_time: number
  }

  export type work_shiftUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    operative_personal?: NullableIntFieldUpdateOperationsInput | number | null
    in_operative_personal?: NullableIntFieldUpdateOperationsInput | number | null
    workday?: StringFieldUpdateOperationsInput | string
    time_start?: IntFieldUpdateOperationsInput | number
    working_time?: IntFieldUpdateOperationsInput | number
  }

  export type work_shiftUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    operative_personal?: NullableIntFieldUpdateOperationsInput | number | null
    in_operative_personal?: NullableIntFieldUpdateOperationsInput | number | null
    workday?: StringFieldUpdateOperationsInput | string
    time_start?: IntFieldUpdateOperationsInput | number
    working_time?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Work_forceListRelationFilter = {
    every?: work_forceWhereInput
    some?: work_forceWhereInput
    none?: work_forceWhereInput
  }

  export type work_forceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type baseCountOrderByAggregateInput = {
    id?: SortOrder
    cologne?: SortOrder
    street_and_number?: SortOrder
    crosse?: SortOrder
    status?: SortOrder
    image?: SortOrder
  }

  export type baseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type baseMaxOrderByAggregateInput = {
    id?: SortOrder
    cologne?: SortOrder
    street_and_number?: SortOrder
    crosse?: SortOrder
    status?: SortOrder
    image?: SortOrder
  }

  export type baseMinOrderByAggregateInput = {
    id?: SortOrder
    cologne?: SortOrder
    street_and_number?: SortOrder
    crosse?: SortOrder
    status?: SortOrder
    image?: SortOrder
  }

  export type baseSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type VehiclesScalarRelationFilter = {
    is?: vehiclesWhereInput
    isNot?: vehiclesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type damagesCountOrderByAggregateInput = {
    id?: SortOrder
    driver_id?: SortOrder
    vehicle_id?: SortOrder
    damage_event?: SortOrder
    where_is_damage?: SortOrder
    photo_damage?: SortOrder
    damage_description?: SortOrder
    type_to_damage?: SortOrder
  }

  export type damagesAvgOrderByAggregateInput = {
    id?: SortOrder
    driver_id?: SortOrder
    vehicle_id?: SortOrder
  }

  export type damagesMaxOrderByAggregateInput = {
    id?: SortOrder
    driver_id?: SortOrder
    vehicle_id?: SortOrder
    damage_event?: SortOrder
    where_is_damage?: SortOrder
    photo_damage?: SortOrder
    damage_description?: SortOrder
    type_to_damage?: SortOrder
  }

  export type damagesMinOrderByAggregateInput = {
    id?: SortOrder
    driver_id?: SortOrder
    vehicle_id?: SortOrder
    damage_event?: SortOrder
    where_is_damage?: SortOrder
    photo_damage?: SortOrder
    damage_description?: SortOrder
    type_to_damage?: SortOrder
  }

  export type damagesSumOrderByAggregateInput = {
    id?: SortOrder
    driver_id?: SortOrder
    vehicle_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ServicesScalarRelationFilter = {
    is?: servicesWhereInput
    isNot?: servicesWhereInput
  }

  export type logs_servicesCountOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    id_service?: SortOrder
    old_data?: SortOrder
    new_data?: SortOrder
    date_change?: SortOrder
  }

  export type logs_servicesAvgOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    id_service?: SortOrder
  }

  export type logs_servicesMaxOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    id_service?: SortOrder
    old_data?: SortOrder
    new_data?: SortOrder
    date_change?: SortOrder
  }

  export type logs_servicesMinOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    id_service?: SortOrder
    old_data?: SortOrder
    new_data?: SortOrder
    date_change?: SortOrder
  }

  export type logs_servicesSumOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    id_service?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type preferenceCountOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    name_s?: SortOrder
    last_name_s?: SortOrder
    style_colorimetry_app?: SortOrder
    sex_visibility?: SortOrder
  }

  export type preferenceAvgOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    style_colorimetry_app?: SortOrder
  }

  export type preferenceMaxOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    name_s?: SortOrder
    last_name_s?: SortOrder
    style_colorimetry_app?: SortOrder
    sex_visibility?: SortOrder
  }

  export type preferenceMinOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    name_s?: SortOrder
    last_name_s?: SortOrder
    style_colorimetry_app?: SortOrder
    sex_visibility?: SortOrder
  }

  export type preferenceSumOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
    style_colorimetry_app?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type Logs_servicesListRelationFilter = {
    every?: logs_servicesWhereInput
    some?: logs_servicesWhereInput
    none?: logs_servicesWhereInput
  }

  export type logs_servicesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type servicesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    vehicle_id?: SortOrder
    kilometers?: SortOrder
    driver?: SortOrder
    first_firefighter?: SortOrder
    second_firefighter?: SortOrder
    third_firefighter?: SortOrder
    type_service?: SortOrder
    folio?: SortOrder
    cologne?: SortOrder
    stret?: SortOrder
    crossing?: SortOrder
    reporter?: SortOrder
    phone_reporter?: SortOrder
    close_type?: SortOrder
    general_and_conclusion?: SortOrder
    close_kilometers?: SortOrder
    kilometers_traveled?: SortOrder
    status?: SortOrder
  }

  export type servicesAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    vehicle_id?: SortOrder
    kilometers?: SortOrder
    driver?: SortOrder
    close_kilometers?: SortOrder
    kilometers_traveled?: SortOrder
  }

  export type servicesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    vehicle_id?: SortOrder
    kilometers?: SortOrder
    driver?: SortOrder
    first_firefighter?: SortOrder
    second_firefighter?: SortOrder
    third_firefighter?: SortOrder
    type_service?: SortOrder
    folio?: SortOrder
    cologne?: SortOrder
    stret?: SortOrder
    crossing?: SortOrder
    reporter?: SortOrder
    phone_reporter?: SortOrder
    close_type?: SortOrder
    general_and_conclusion?: SortOrder
    close_kilometers?: SortOrder
    kilometers_traveled?: SortOrder
    status?: SortOrder
  }

  export type servicesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    vehicle_id?: SortOrder
    kilometers?: SortOrder
    driver?: SortOrder
    first_firefighter?: SortOrder
    second_firefighter?: SortOrder
    third_firefighter?: SortOrder
    type_service?: SortOrder
    folio?: SortOrder
    cologne?: SortOrder
    stret?: SortOrder
    crossing?: SortOrder
    reporter?: SortOrder
    phone_reporter?: SortOrder
    close_type?: SortOrder
    general_and_conclusion?: SortOrder
    close_kilometers?: SortOrder
    kilometers_traveled?: SortOrder
    status?: SortOrder
  }

  export type servicesSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    vehicle_id?: SortOrder
    kilometers?: SortOrder
    driver?: SortOrder
    close_kilometers?: SortOrder
    kilometers_traveled?: SortOrder
  }

  export type tipe_tool_equipmentCountOrderByAggregateInput = {
    id?: SortOrder
    cover_image?: SortOrder
    name?: SortOrder
    type?: SortOrder
    on_inventory?: SortOrder
  }

  export type tipe_tool_equipmentAvgOrderByAggregateInput = {
    id?: SortOrder
    on_inventory?: SortOrder
  }

  export type tipe_tool_equipmentMaxOrderByAggregateInput = {
    id?: SortOrder
    cover_image?: SortOrder
    name?: SortOrder
    type?: SortOrder
    on_inventory?: SortOrder
  }

  export type tipe_tool_equipmentMinOrderByAggregateInput = {
    id?: SortOrder
    cover_image?: SortOrder
    name?: SortOrder
    type?: SortOrder
    on_inventory?: SortOrder
  }

  export type tipe_tool_equipmentSumOrderByAggregateInput = {
    id?: SortOrder
    on_inventory?: SortOrder
  }

  export type type_to_vehicleCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    image?: SortOrder
    operative?: SortOrder
    in_operative?: SortOrder
  }

  export type type_to_vehicleAvgOrderByAggregateInput = {
    id?: SortOrder
    operative?: SortOrder
    in_operative?: SortOrder
  }

  export type type_to_vehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    image?: SortOrder
    operative?: SortOrder
    in_operative?: SortOrder
  }

  export type type_to_vehicleMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    image?: SortOrder
    operative?: SortOrder
    in_operative?: SortOrder
  }

  export type type_to_vehicleSumOrderByAggregateInput = {
    id?: SortOrder
    operative?: SortOrder
    in_operative?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    second_name?: SortOrder
    last_name?: SortOrder
    second_last_name?: SortOrder
    status_now?: SortOrder
    blood_group?: SortOrder
    blood_rh_factor?: SortOrder
    social_security_number?: SortOrder
    type_position?: SortOrder
    position?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    employee_number?: SortOrder
    work_shift?: SortOrder
    birthdate?: SortOrder
    start_date?: SortOrder
    emergency_contact_name?: SortOrder
    emergency_contact_phone?: SortOrder
    emergency_contact_phone_alt?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    second_name?: SortOrder
    last_name?: SortOrder
    second_last_name?: SortOrder
    status_now?: SortOrder
    blood_group?: SortOrder
    blood_rh_factor?: SortOrder
    social_security_number?: SortOrder
    type_position?: SortOrder
    position?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    employee_number?: SortOrder
    work_shift?: SortOrder
    birthdate?: SortOrder
    start_date?: SortOrder
    emergency_contact_name?: SortOrder
    emergency_contact_phone?: SortOrder
    emergency_contact_phone_alt?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    second_name?: SortOrder
    last_name?: SortOrder
    second_last_name?: SortOrder
    status_now?: SortOrder
    blood_group?: SortOrder
    blood_rh_factor?: SortOrder
    social_security_number?: SortOrder
    type_position?: SortOrder
    position?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    employee_number?: SortOrder
    work_shift?: SortOrder
    birthdate?: SortOrder
    start_date?: SortOrder
    emergency_contact_name?: SortOrder
    emergency_contact_phone?: SortOrder
    emergency_contact_phone_alt?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type vehicle_logsCountOrderByAggregateInput = {
    id?: SortOrder
    vehicle_id?: SortOrder
    driver_id?: SortOrder
    luz_delantera_alta?: SortOrder
    luz_delantera_baja?: SortOrder
    luces_de_emergencia?: SortOrder
    luces_neblineros?: SortOrder
    luz_direccional?: SortOrder
    luz_de_freno?: SortOrder
    luz_de_reversa?: SortOrder
    luces_del_tanque_cisterna?: SortOrder
    luces_interior_cabina?: SortOrder
    motor_adicional?: SortOrder
    estado_de_tablero_indicadores?: SortOrder
    elevadores_de_cristales?: SortOrder
    espejos_lateral_derecho?: SortOrder
    espejos_lateral_izquierdo?: SortOrder
    espejo_retrovisor?: SortOrder
    cristal_parabrisas?: SortOrder
    cristal_medallon?: SortOrder
    cristal_de_puertas?: SortOrder
    gato_hidraulico?: SortOrder
    herramientas_cambio_de_ruedas?: SortOrder
    bocina_de_sonoros?: SortOrder
    modulo_luminosos_sonoros?: SortOrder
    torreta?: SortOrder
    cinturones_de_seguridad?: SortOrder
    limpia_parabrisas?: SortOrder
    poliza_seguro?: SortOrder
    tarjeta_circulacion?: SortOrder
    tapon_tanque_combustible?: SortOrder
    tapon_aceite?: SortOrder
    tapon_agua?: SortOrder
    nivel_aceite_motor?: SortOrder
    nivel_aceite_transmision?: SortOrder
    nivel_agua_radiador?: SortOrder
    nivel_liquido_frenos?: SortOrder
    llanta_delantera_derecha?: SortOrder
    llanta_delantera_izquierda?: SortOrder
    llanta_trasera_derecha?: SortOrder
    llanta_trasera_izquierda?: SortOrder
    llanta_repuesto?: SortOrder
    fecha_registro?: SortOrder
    llaves_encendido?: SortOrder
    switch_encendido?: SortOrder
    bateria?: SortOrder
    postes_terminales_bateria?: SortOrder
  }

  export type vehicle_logsAvgOrderByAggregateInput = {
    id?: SortOrder
    vehicle_id?: SortOrder
    driver_id?: SortOrder
  }

  export type vehicle_logsMaxOrderByAggregateInput = {
    id?: SortOrder
    vehicle_id?: SortOrder
    driver_id?: SortOrder
    luz_delantera_alta?: SortOrder
    luz_delantera_baja?: SortOrder
    luces_de_emergencia?: SortOrder
    luces_neblineros?: SortOrder
    luz_direccional?: SortOrder
    luz_de_freno?: SortOrder
    luz_de_reversa?: SortOrder
    luces_del_tanque_cisterna?: SortOrder
    luces_interior_cabina?: SortOrder
    motor_adicional?: SortOrder
    estado_de_tablero_indicadores?: SortOrder
    elevadores_de_cristales?: SortOrder
    espejos_lateral_derecho?: SortOrder
    espejos_lateral_izquierdo?: SortOrder
    espejo_retrovisor?: SortOrder
    cristal_parabrisas?: SortOrder
    cristal_medallon?: SortOrder
    cristal_de_puertas?: SortOrder
    gato_hidraulico?: SortOrder
    herramientas_cambio_de_ruedas?: SortOrder
    bocina_de_sonoros?: SortOrder
    modulo_luminosos_sonoros?: SortOrder
    torreta?: SortOrder
    cinturones_de_seguridad?: SortOrder
    limpia_parabrisas?: SortOrder
    poliza_seguro?: SortOrder
    tarjeta_circulacion?: SortOrder
    tapon_tanque_combustible?: SortOrder
    tapon_aceite?: SortOrder
    tapon_agua?: SortOrder
    nivel_aceite_motor?: SortOrder
    nivel_aceite_transmision?: SortOrder
    nivel_agua_radiador?: SortOrder
    nivel_liquido_frenos?: SortOrder
    llanta_delantera_derecha?: SortOrder
    llanta_delantera_izquierda?: SortOrder
    llanta_trasera_derecha?: SortOrder
    llanta_trasera_izquierda?: SortOrder
    llanta_repuesto?: SortOrder
    fecha_registro?: SortOrder
    llaves_encendido?: SortOrder
    switch_encendido?: SortOrder
    bateria?: SortOrder
    postes_terminales_bateria?: SortOrder
  }

  export type vehicle_logsMinOrderByAggregateInput = {
    id?: SortOrder
    vehicle_id?: SortOrder
    driver_id?: SortOrder
    luz_delantera_alta?: SortOrder
    luz_delantera_baja?: SortOrder
    luces_de_emergencia?: SortOrder
    luces_neblineros?: SortOrder
    luz_direccional?: SortOrder
    luz_de_freno?: SortOrder
    luz_de_reversa?: SortOrder
    luces_del_tanque_cisterna?: SortOrder
    luces_interior_cabina?: SortOrder
    motor_adicional?: SortOrder
    estado_de_tablero_indicadores?: SortOrder
    elevadores_de_cristales?: SortOrder
    espejos_lateral_derecho?: SortOrder
    espejos_lateral_izquierdo?: SortOrder
    espejo_retrovisor?: SortOrder
    cristal_parabrisas?: SortOrder
    cristal_medallon?: SortOrder
    cristal_de_puertas?: SortOrder
    gato_hidraulico?: SortOrder
    herramientas_cambio_de_ruedas?: SortOrder
    bocina_de_sonoros?: SortOrder
    modulo_luminosos_sonoros?: SortOrder
    torreta?: SortOrder
    cinturones_de_seguridad?: SortOrder
    limpia_parabrisas?: SortOrder
    poliza_seguro?: SortOrder
    tarjeta_circulacion?: SortOrder
    tapon_tanque_combustible?: SortOrder
    tapon_aceite?: SortOrder
    tapon_agua?: SortOrder
    nivel_aceite_motor?: SortOrder
    nivel_aceite_transmision?: SortOrder
    nivel_agua_radiador?: SortOrder
    nivel_liquido_frenos?: SortOrder
    llanta_delantera_derecha?: SortOrder
    llanta_delantera_izquierda?: SortOrder
    llanta_trasera_derecha?: SortOrder
    llanta_trasera_izquierda?: SortOrder
    llanta_repuesto?: SortOrder
    fecha_registro?: SortOrder
    llaves_encendido?: SortOrder
    switch_encendido?: SortOrder
    bateria?: SortOrder
    postes_terminales_bateria?: SortOrder
  }

  export type vehicle_logsSumOrderByAggregateInput = {
    id?: SortOrder
    vehicle_id?: SortOrder
    driver_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DamagesListRelationFilter = {
    every?: damagesWhereInput
    some?: damagesWhereInput
    none?: damagesWhereInput
  }

  export type ServicesListRelationFilter = {
    every?: servicesWhereInput
    some?: servicesWhereInput
    none?: servicesWhereInput
  }

  export type Vehicle_logsListRelationFilter = {
    every?: vehicle_logsWhereInput
    some?: vehicle_logsWhereInput
    none?: vehicle_logsWhereInput
  }

  export type damagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type servicesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type vehicle_logsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type vehiclesCountOrderByAggregateInput = {
    id?: SortOrder
    number_unit?: SortOrder
    type?: SortOrder
    cover_img?: SortOrder
    left_img?: SortOrder
    up_img?: SortOrder
    front_img?: SortOrder
    back_img?: SortOrder
    kilometers?: SortOrder
    kilometers_to_service?: SortOrder
    date_register?: SortOrder
    vehicle_license_plates?: SortOrder
    status?: SortOrder
    model?: SortOrder
    card_brand?: SortOrder
  }

  export type vehiclesAvgOrderByAggregateInput = {
    id?: SortOrder
    number_unit?: SortOrder
    kilometers?: SortOrder
    kilometers_to_service?: SortOrder
  }

  export type vehiclesMaxOrderByAggregateInput = {
    id?: SortOrder
    number_unit?: SortOrder
    type?: SortOrder
    cover_img?: SortOrder
    left_img?: SortOrder
    up_img?: SortOrder
    front_img?: SortOrder
    back_img?: SortOrder
    kilometers?: SortOrder
    kilometers_to_service?: SortOrder
    date_register?: SortOrder
    vehicle_license_plates?: SortOrder
    status?: SortOrder
    model?: SortOrder
    card_brand?: SortOrder
  }

  export type vehiclesMinOrderByAggregateInput = {
    id?: SortOrder
    number_unit?: SortOrder
    type?: SortOrder
    cover_img?: SortOrder
    left_img?: SortOrder
    up_img?: SortOrder
    front_img?: SortOrder
    back_img?: SortOrder
    kilometers?: SortOrder
    kilometers_to_service?: SortOrder
    date_register?: SortOrder
    vehicle_license_plates?: SortOrder
    status?: SortOrder
    model?: SortOrder
    card_brand?: SortOrder
  }

  export type vehiclesSumOrderByAggregateInput = {
    id?: SortOrder
    number_unit?: SortOrder
    kilometers?: SortOrder
    kilometers_to_service?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BaseNullableScalarRelationFilter = {
    is?: baseWhereInput | null
    isNot?: baseWhereInput | null
  }

  export type VehiclesNullableScalarRelationFilter = {
    is?: vehiclesWhereInput | null
    isNot?: vehiclesWhereInput | null
  }

  export type work_forceCountOrderByAggregateInput = {
    id?: SortOrder
    work_shift?: SortOrder
    id_base?: SortOrder
    id_vehicle?: SortOrder
    id_drive?: SortOrder
    id_persone_one?: SortOrder
    id_persone_two?: SortOrder
    id_presone_trhee?: SortOrder
    extras_persone?: SortOrder
    date_work_shift?: SortOrder
    notes?: SortOrder
  }

  export type work_forceAvgOrderByAggregateInput = {
    id?: SortOrder
    id_base?: SortOrder
    id_vehicle?: SortOrder
    id_drive?: SortOrder
    id_persone_one?: SortOrder
    id_persone_two?: SortOrder
    id_presone_trhee?: SortOrder
  }

  export type work_forceMaxOrderByAggregateInput = {
    id?: SortOrder
    work_shift?: SortOrder
    id_base?: SortOrder
    id_vehicle?: SortOrder
    id_drive?: SortOrder
    id_persone_one?: SortOrder
    id_persone_two?: SortOrder
    id_presone_trhee?: SortOrder
    extras_persone?: SortOrder
    date_work_shift?: SortOrder
    notes?: SortOrder
  }

  export type work_forceMinOrderByAggregateInput = {
    id?: SortOrder
    work_shift?: SortOrder
    id_base?: SortOrder
    id_vehicle?: SortOrder
    id_drive?: SortOrder
    id_persone_one?: SortOrder
    id_persone_two?: SortOrder
    id_presone_trhee?: SortOrder
    extras_persone?: SortOrder
    date_work_shift?: SortOrder
    notes?: SortOrder
  }

  export type work_forceSumOrderByAggregateInput = {
    id?: SortOrder
    id_base?: SortOrder
    id_vehicle?: SortOrder
    id_drive?: SortOrder
    id_persone_one?: SortOrder
    id_persone_two?: SortOrder
    id_presone_trhee?: SortOrder
  }

  export type work_shiftCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    operative_personal?: SortOrder
    in_operative_personal?: SortOrder
    workday?: SortOrder
    time_start?: SortOrder
    working_time?: SortOrder
  }

  export type work_shiftAvgOrderByAggregateInput = {
    id?: SortOrder
    operative_personal?: SortOrder
    in_operative_personal?: SortOrder
    time_start?: SortOrder
    working_time?: SortOrder
  }

  export type work_shiftMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    operative_personal?: SortOrder
    in_operative_personal?: SortOrder
    workday?: SortOrder
    time_start?: SortOrder
    working_time?: SortOrder
  }

  export type work_shiftMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    operative_personal?: SortOrder
    in_operative_personal?: SortOrder
    workday?: SortOrder
    time_start?: SortOrder
    working_time?: SortOrder
  }

  export type work_shiftSumOrderByAggregateInput = {
    id?: SortOrder
    operative_personal?: SortOrder
    in_operative_personal?: SortOrder
    time_start?: SortOrder
    working_time?: SortOrder
  }

  export type work_forceCreateNestedManyWithoutBaseInput = {
    create?: XOR<work_forceCreateWithoutBaseInput, work_forceUncheckedCreateWithoutBaseInput> | work_forceCreateWithoutBaseInput[] | work_forceUncheckedCreateWithoutBaseInput[]
    connectOrCreate?: work_forceCreateOrConnectWithoutBaseInput | work_forceCreateOrConnectWithoutBaseInput[]
    createMany?: work_forceCreateManyBaseInputEnvelope
    connect?: work_forceWhereUniqueInput | work_forceWhereUniqueInput[]
  }

  export type work_forceUncheckedCreateNestedManyWithoutBaseInput = {
    create?: XOR<work_forceCreateWithoutBaseInput, work_forceUncheckedCreateWithoutBaseInput> | work_forceCreateWithoutBaseInput[] | work_forceUncheckedCreateWithoutBaseInput[]
    connectOrCreate?: work_forceCreateOrConnectWithoutBaseInput | work_forceCreateOrConnectWithoutBaseInput[]
    createMany?: work_forceCreateManyBaseInputEnvelope
    connect?: work_forceWhereUniqueInput | work_forceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type work_forceUpdateManyWithoutBaseNestedInput = {
    create?: XOR<work_forceCreateWithoutBaseInput, work_forceUncheckedCreateWithoutBaseInput> | work_forceCreateWithoutBaseInput[] | work_forceUncheckedCreateWithoutBaseInput[]
    connectOrCreate?: work_forceCreateOrConnectWithoutBaseInput | work_forceCreateOrConnectWithoutBaseInput[]
    upsert?: work_forceUpsertWithWhereUniqueWithoutBaseInput | work_forceUpsertWithWhereUniqueWithoutBaseInput[]
    createMany?: work_forceCreateManyBaseInputEnvelope
    set?: work_forceWhereUniqueInput | work_forceWhereUniqueInput[]
    disconnect?: work_forceWhereUniqueInput | work_forceWhereUniqueInput[]
    delete?: work_forceWhereUniqueInput | work_forceWhereUniqueInput[]
    connect?: work_forceWhereUniqueInput | work_forceWhereUniqueInput[]
    update?: work_forceUpdateWithWhereUniqueWithoutBaseInput | work_forceUpdateWithWhereUniqueWithoutBaseInput[]
    updateMany?: work_forceUpdateManyWithWhereWithoutBaseInput | work_forceUpdateManyWithWhereWithoutBaseInput[]
    deleteMany?: work_forceScalarWhereInput | work_forceScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type work_forceUncheckedUpdateManyWithoutBaseNestedInput = {
    create?: XOR<work_forceCreateWithoutBaseInput, work_forceUncheckedCreateWithoutBaseInput> | work_forceCreateWithoutBaseInput[] | work_forceUncheckedCreateWithoutBaseInput[]
    connectOrCreate?: work_forceCreateOrConnectWithoutBaseInput | work_forceCreateOrConnectWithoutBaseInput[]
    upsert?: work_forceUpsertWithWhereUniqueWithoutBaseInput | work_forceUpsertWithWhereUniqueWithoutBaseInput[]
    createMany?: work_forceCreateManyBaseInputEnvelope
    set?: work_forceWhereUniqueInput | work_forceWhereUniqueInput[]
    disconnect?: work_forceWhereUniqueInput | work_forceWhereUniqueInput[]
    delete?: work_forceWhereUniqueInput | work_forceWhereUniqueInput[]
    connect?: work_forceWhereUniqueInput | work_forceWhereUniqueInput[]
    update?: work_forceUpdateWithWhereUniqueWithoutBaseInput | work_forceUpdateWithWhereUniqueWithoutBaseInput[]
    updateMany?: work_forceUpdateManyWithWhereWithoutBaseInput | work_forceUpdateManyWithWhereWithoutBaseInput[]
    deleteMany?: work_forceScalarWhereInput | work_forceScalarWhereInput[]
  }

  export type vehiclesCreateNestedOneWithoutDamagesInput = {
    create?: XOR<vehiclesCreateWithoutDamagesInput, vehiclesUncheckedCreateWithoutDamagesInput>
    connectOrCreate?: vehiclesCreateOrConnectWithoutDamagesInput
    connect?: vehiclesWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type vehiclesUpdateOneRequiredWithoutDamagesNestedInput = {
    create?: XOR<vehiclesCreateWithoutDamagesInput, vehiclesUncheckedCreateWithoutDamagesInput>
    connectOrCreate?: vehiclesCreateOrConnectWithoutDamagesInput
    upsert?: vehiclesUpsertWithoutDamagesInput
    connect?: vehiclesWhereUniqueInput
    update?: XOR<XOR<vehiclesUpdateToOneWithWhereWithoutDamagesInput, vehiclesUpdateWithoutDamagesInput>, vehiclesUncheckedUpdateWithoutDamagesInput>
  }

  export type servicesCreateNestedOneWithoutLogs_servicesInput = {
    create?: XOR<servicesCreateWithoutLogs_servicesInput, servicesUncheckedCreateWithoutLogs_servicesInput>
    connectOrCreate?: servicesCreateOrConnectWithoutLogs_servicesInput
    connect?: servicesWhereUniqueInput
  }

  export type servicesUpdateOneRequiredWithoutLogs_servicesNestedInput = {
    create?: XOR<servicesCreateWithoutLogs_servicesInput, servicesUncheckedCreateWithoutLogs_servicesInput>
    connectOrCreate?: servicesCreateOrConnectWithoutLogs_servicesInput
    upsert?: servicesUpsertWithoutLogs_servicesInput
    connect?: servicesWhereUniqueInput
    update?: XOR<XOR<servicesUpdateToOneWithWhereWithoutLogs_servicesInput, servicesUpdateWithoutLogs_servicesInput>, servicesUncheckedUpdateWithoutLogs_servicesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type logs_servicesCreateNestedManyWithoutServicesInput = {
    create?: XOR<logs_servicesCreateWithoutServicesInput, logs_servicesUncheckedCreateWithoutServicesInput> | logs_servicesCreateWithoutServicesInput[] | logs_servicesUncheckedCreateWithoutServicesInput[]
    connectOrCreate?: logs_servicesCreateOrConnectWithoutServicesInput | logs_servicesCreateOrConnectWithoutServicesInput[]
    createMany?: logs_servicesCreateManyServicesInputEnvelope
    connect?: logs_servicesWhereUniqueInput | logs_servicesWhereUniqueInput[]
  }

  export type vehiclesCreateNestedOneWithoutServicesInput = {
    create?: XOR<vehiclesCreateWithoutServicesInput, vehiclesUncheckedCreateWithoutServicesInput>
    connectOrCreate?: vehiclesCreateOrConnectWithoutServicesInput
    connect?: vehiclesWhereUniqueInput
  }

  export type logs_servicesUncheckedCreateNestedManyWithoutServicesInput = {
    create?: XOR<logs_servicesCreateWithoutServicesInput, logs_servicesUncheckedCreateWithoutServicesInput> | logs_servicesCreateWithoutServicesInput[] | logs_servicesUncheckedCreateWithoutServicesInput[]
    connectOrCreate?: logs_servicesCreateOrConnectWithoutServicesInput | logs_servicesCreateOrConnectWithoutServicesInput[]
    createMany?: logs_servicesCreateManyServicesInputEnvelope
    connect?: logs_servicesWhereUniqueInput | logs_servicesWhereUniqueInput[]
  }

  export type logs_servicesUpdateManyWithoutServicesNestedInput = {
    create?: XOR<logs_servicesCreateWithoutServicesInput, logs_servicesUncheckedCreateWithoutServicesInput> | logs_servicesCreateWithoutServicesInput[] | logs_servicesUncheckedCreateWithoutServicesInput[]
    connectOrCreate?: logs_servicesCreateOrConnectWithoutServicesInput | logs_servicesCreateOrConnectWithoutServicesInput[]
    upsert?: logs_servicesUpsertWithWhereUniqueWithoutServicesInput | logs_servicesUpsertWithWhereUniqueWithoutServicesInput[]
    createMany?: logs_servicesCreateManyServicesInputEnvelope
    set?: logs_servicesWhereUniqueInput | logs_servicesWhereUniqueInput[]
    disconnect?: logs_servicesWhereUniqueInput | logs_servicesWhereUniqueInput[]
    delete?: logs_servicesWhereUniqueInput | logs_servicesWhereUniqueInput[]
    connect?: logs_servicesWhereUniqueInput | logs_servicesWhereUniqueInput[]
    update?: logs_servicesUpdateWithWhereUniqueWithoutServicesInput | logs_servicesUpdateWithWhereUniqueWithoutServicesInput[]
    updateMany?: logs_servicesUpdateManyWithWhereWithoutServicesInput | logs_servicesUpdateManyWithWhereWithoutServicesInput[]
    deleteMany?: logs_servicesScalarWhereInput | logs_servicesScalarWhereInput[]
  }

  export type vehiclesUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<vehiclesCreateWithoutServicesInput, vehiclesUncheckedCreateWithoutServicesInput>
    connectOrCreate?: vehiclesCreateOrConnectWithoutServicesInput
    upsert?: vehiclesUpsertWithoutServicesInput
    connect?: vehiclesWhereUniqueInput
    update?: XOR<XOR<vehiclesUpdateToOneWithWhereWithoutServicesInput, vehiclesUpdateWithoutServicesInput>, vehiclesUncheckedUpdateWithoutServicesInput>
  }

  export type logs_servicesUncheckedUpdateManyWithoutServicesNestedInput = {
    create?: XOR<logs_servicesCreateWithoutServicesInput, logs_servicesUncheckedCreateWithoutServicesInput> | logs_servicesCreateWithoutServicesInput[] | logs_servicesUncheckedCreateWithoutServicesInput[]
    connectOrCreate?: logs_servicesCreateOrConnectWithoutServicesInput | logs_servicesCreateOrConnectWithoutServicesInput[]
    upsert?: logs_servicesUpsertWithWhereUniqueWithoutServicesInput | logs_servicesUpsertWithWhereUniqueWithoutServicesInput[]
    createMany?: logs_servicesCreateManyServicesInputEnvelope
    set?: logs_servicesWhereUniqueInput | logs_servicesWhereUniqueInput[]
    disconnect?: logs_servicesWhereUniqueInput | logs_servicesWhereUniqueInput[]
    delete?: logs_servicesWhereUniqueInput | logs_servicesWhereUniqueInput[]
    connect?: logs_servicesWhereUniqueInput | logs_servicesWhereUniqueInput[]
    update?: logs_servicesUpdateWithWhereUniqueWithoutServicesInput | logs_servicesUpdateWithWhereUniqueWithoutServicesInput[]
    updateMany?: logs_servicesUpdateManyWithWhereWithoutServicesInput | logs_servicesUpdateManyWithWhereWithoutServicesInput[]
    deleteMany?: logs_servicesScalarWhereInput | logs_servicesScalarWhereInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type vehiclesCreateNestedOneWithoutVehicle_logsInput = {
    create?: XOR<vehiclesCreateWithoutVehicle_logsInput, vehiclesUncheckedCreateWithoutVehicle_logsInput>
    connectOrCreate?: vehiclesCreateOrConnectWithoutVehicle_logsInput
    connect?: vehiclesWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type vehiclesUpdateOneRequiredWithoutVehicle_logsNestedInput = {
    create?: XOR<vehiclesCreateWithoutVehicle_logsInput, vehiclesUncheckedCreateWithoutVehicle_logsInput>
    connectOrCreate?: vehiclesCreateOrConnectWithoutVehicle_logsInput
    upsert?: vehiclesUpsertWithoutVehicle_logsInput
    connect?: vehiclesWhereUniqueInput
    update?: XOR<XOR<vehiclesUpdateToOneWithWhereWithoutVehicle_logsInput, vehiclesUpdateWithoutVehicle_logsInput>, vehiclesUncheckedUpdateWithoutVehicle_logsInput>
  }

  export type damagesCreateNestedManyWithoutVehiclesInput = {
    create?: XOR<damagesCreateWithoutVehiclesInput, damagesUncheckedCreateWithoutVehiclesInput> | damagesCreateWithoutVehiclesInput[] | damagesUncheckedCreateWithoutVehiclesInput[]
    connectOrCreate?: damagesCreateOrConnectWithoutVehiclesInput | damagesCreateOrConnectWithoutVehiclesInput[]
    createMany?: damagesCreateManyVehiclesInputEnvelope
    connect?: damagesWhereUniqueInput | damagesWhereUniqueInput[]
  }

  export type servicesCreateNestedManyWithoutVehiclesInput = {
    create?: XOR<servicesCreateWithoutVehiclesInput, servicesUncheckedCreateWithoutVehiclesInput> | servicesCreateWithoutVehiclesInput[] | servicesUncheckedCreateWithoutVehiclesInput[]
    connectOrCreate?: servicesCreateOrConnectWithoutVehiclesInput | servicesCreateOrConnectWithoutVehiclesInput[]
    createMany?: servicesCreateManyVehiclesInputEnvelope
    connect?: servicesWhereUniqueInput | servicesWhereUniqueInput[]
  }

  export type vehicle_logsCreateNestedManyWithoutVehiclesInput = {
    create?: XOR<vehicle_logsCreateWithoutVehiclesInput, vehicle_logsUncheckedCreateWithoutVehiclesInput> | vehicle_logsCreateWithoutVehiclesInput[] | vehicle_logsUncheckedCreateWithoutVehiclesInput[]
    connectOrCreate?: vehicle_logsCreateOrConnectWithoutVehiclesInput | vehicle_logsCreateOrConnectWithoutVehiclesInput[]
    createMany?: vehicle_logsCreateManyVehiclesInputEnvelope
    connect?: vehicle_logsWhereUniqueInput | vehicle_logsWhereUniqueInput[]
  }

  export type work_forceCreateNestedManyWithoutVehiclesInput = {
    create?: XOR<work_forceCreateWithoutVehiclesInput, work_forceUncheckedCreateWithoutVehiclesInput> | work_forceCreateWithoutVehiclesInput[] | work_forceUncheckedCreateWithoutVehiclesInput[]
    connectOrCreate?: work_forceCreateOrConnectWithoutVehiclesInput | work_forceCreateOrConnectWithoutVehiclesInput[]
    createMany?: work_forceCreateManyVehiclesInputEnvelope
    connect?: work_forceWhereUniqueInput | work_forceWhereUniqueInput[]
  }

  export type damagesUncheckedCreateNestedManyWithoutVehiclesInput = {
    create?: XOR<damagesCreateWithoutVehiclesInput, damagesUncheckedCreateWithoutVehiclesInput> | damagesCreateWithoutVehiclesInput[] | damagesUncheckedCreateWithoutVehiclesInput[]
    connectOrCreate?: damagesCreateOrConnectWithoutVehiclesInput | damagesCreateOrConnectWithoutVehiclesInput[]
    createMany?: damagesCreateManyVehiclesInputEnvelope
    connect?: damagesWhereUniqueInput | damagesWhereUniqueInput[]
  }

  export type servicesUncheckedCreateNestedManyWithoutVehiclesInput = {
    create?: XOR<servicesCreateWithoutVehiclesInput, servicesUncheckedCreateWithoutVehiclesInput> | servicesCreateWithoutVehiclesInput[] | servicesUncheckedCreateWithoutVehiclesInput[]
    connectOrCreate?: servicesCreateOrConnectWithoutVehiclesInput | servicesCreateOrConnectWithoutVehiclesInput[]
    createMany?: servicesCreateManyVehiclesInputEnvelope
    connect?: servicesWhereUniqueInput | servicesWhereUniqueInput[]
  }

  export type vehicle_logsUncheckedCreateNestedManyWithoutVehiclesInput = {
    create?: XOR<vehicle_logsCreateWithoutVehiclesInput, vehicle_logsUncheckedCreateWithoutVehiclesInput> | vehicle_logsCreateWithoutVehiclesInput[] | vehicle_logsUncheckedCreateWithoutVehiclesInput[]
    connectOrCreate?: vehicle_logsCreateOrConnectWithoutVehiclesInput | vehicle_logsCreateOrConnectWithoutVehiclesInput[]
    createMany?: vehicle_logsCreateManyVehiclesInputEnvelope
    connect?: vehicle_logsWhereUniqueInput | vehicle_logsWhereUniqueInput[]
  }

  export type work_forceUncheckedCreateNestedManyWithoutVehiclesInput = {
    create?: XOR<work_forceCreateWithoutVehiclesInput, work_forceUncheckedCreateWithoutVehiclesInput> | work_forceCreateWithoutVehiclesInput[] | work_forceUncheckedCreateWithoutVehiclesInput[]
    connectOrCreate?: work_forceCreateOrConnectWithoutVehiclesInput | work_forceCreateOrConnectWithoutVehiclesInput[]
    createMany?: work_forceCreateManyVehiclesInputEnvelope
    connect?: work_forceWhereUniqueInput | work_forceWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type damagesUpdateManyWithoutVehiclesNestedInput = {
    create?: XOR<damagesCreateWithoutVehiclesInput, damagesUncheckedCreateWithoutVehiclesInput> | damagesCreateWithoutVehiclesInput[] | damagesUncheckedCreateWithoutVehiclesInput[]
    connectOrCreate?: damagesCreateOrConnectWithoutVehiclesInput | damagesCreateOrConnectWithoutVehiclesInput[]
    upsert?: damagesUpsertWithWhereUniqueWithoutVehiclesInput | damagesUpsertWithWhereUniqueWithoutVehiclesInput[]
    createMany?: damagesCreateManyVehiclesInputEnvelope
    set?: damagesWhereUniqueInput | damagesWhereUniqueInput[]
    disconnect?: damagesWhereUniqueInput | damagesWhereUniqueInput[]
    delete?: damagesWhereUniqueInput | damagesWhereUniqueInput[]
    connect?: damagesWhereUniqueInput | damagesWhereUniqueInput[]
    update?: damagesUpdateWithWhereUniqueWithoutVehiclesInput | damagesUpdateWithWhereUniqueWithoutVehiclesInput[]
    updateMany?: damagesUpdateManyWithWhereWithoutVehiclesInput | damagesUpdateManyWithWhereWithoutVehiclesInput[]
    deleteMany?: damagesScalarWhereInput | damagesScalarWhereInput[]
  }

  export type servicesUpdateManyWithoutVehiclesNestedInput = {
    create?: XOR<servicesCreateWithoutVehiclesInput, servicesUncheckedCreateWithoutVehiclesInput> | servicesCreateWithoutVehiclesInput[] | servicesUncheckedCreateWithoutVehiclesInput[]
    connectOrCreate?: servicesCreateOrConnectWithoutVehiclesInput | servicesCreateOrConnectWithoutVehiclesInput[]
    upsert?: servicesUpsertWithWhereUniqueWithoutVehiclesInput | servicesUpsertWithWhereUniqueWithoutVehiclesInput[]
    createMany?: servicesCreateManyVehiclesInputEnvelope
    set?: servicesWhereUniqueInput | servicesWhereUniqueInput[]
    disconnect?: servicesWhereUniqueInput | servicesWhereUniqueInput[]
    delete?: servicesWhereUniqueInput | servicesWhereUniqueInput[]
    connect?: servicesWhereUniqueInput | servicesWhereUniqueInput[]
    update?: servicesUpdateWithWhereUniqueWithoutVehiclesInput | servicesUpdateWithWhereUniqueWithoutVehiclesInput[]
    updateMany?: servicesUpdateManyWithWhereWithoutVehiclesInput | servicesUpdateManyWithWhereWithoutVehiclesInput[]
    deleteMany?: servicesScalarWhereInput | servicesScalarWhereInput[]
  }

  export type vehicle_logsUpdateManyWithoutVehiclesNestedInput = {
    create?: XOR<vehicle_logsCreateWithoutVehiclesInput, vehicle_logsUncheckedCreateWithoutVehiclesInput> | vehicle_logsCreateWithoutVehiclesInput[] | vehicle_logsUncheckedCreateWithoutVehiclesInput[]
    connectOrCreate?: vehicle_logsCreateOrConnectWithoutVehiclesInput | vehicle_logsCreateOrConnectWithoutVehiclesInput[]
    upsert?: vehicle_logsUpsertWithWhereUniqueWithoutVehiclesInput | vehicle_logsUpsertWithWhereUniqueWithoutVehiclesInput[]
    createMany?: vehicle_logsCreateManyVehiclesInputEnvelope
    set?: vehicle_logsWhereUniqueInput | vehicle_logsWhereUniqueInput[]
    disconnect?: vehicle_logsWhereUniqueInput | vehicle_logsWhereUniqueInput[]
    delete?: vehicle_logsWhereUniqueInput | vehicle_logsWhereUniqueInput[]
    connect?: vehicle_logsWhereUniqueInput | vehicle_logsWhereUniqueInput[]
    update?: vehicle_logsUpdateWithWhereUniqueWithoutVehiclesInput | vehicle_logsUpdateWithWhereUniqueWithoutVehiclesInput[]
    updateMany?: vehicle_logsUpdateManyWithWhereWithoutVehiclesInput | vehicle_logsUpdateManyWithWhereWithoutVehiclesInput[]
    deleteMany?: vehicle_logsScalarWhereInput | vehicle_logsScalarWhereInput[]
  }

  export type work_forceUpdateManyWithoutVehiclesNestedInput = {
    create?: XOR<work_forceCreateWithoutVehiclesInput, work_forceUncheckedCreateWithoutVehiclesInput> | work_forceCreateWithoutVehiclesInput[] | work_forceUncheckedCreateWithoutVehiclesInput[]
    connectOrCreate?: work_forceCreateOrConnectWithoutVehiclesInput | work_forceCreateOrConnectWithoutVehiclesInput[]
    upsert?: work_forceUpsertWithWhereUniqueWithoutVehiclesInput | work_forceUpsertWithWhereUniqueWithoutVehiclesInput[]
    createMany?: work_forceCreateManyVehiclesInputEnvelope
    set?: work_forceWhereUniqueInput | work_forceWhereUniqueInput[]
    disconnect?: work_forceWhereUniqueInput | work_forceWhereUniqueInput[]
    delete?: work_forceWhereUniqueInput | work_forceWhereUniqueInput[]
    connect?: work_forceWhereUniqueInput | work_forceWhereUniqueInput[]
    update?: work_forceUpdateWithWhereUniqueWithoutVehiclesInput | work_forceUpdateWithWhereUniqueWithoutVehiclesInput[]
    updateMany?: work_forceUpdateManyWithWhereWithoutVehiclesInput | work_forceUpdateManyWithWhereWithoutVehiclesInput[]
    deleteMany?: work_forceScalarWhereInput | work_forceScalarWhereInput[]
  }

  export type damagesUncheckedUpdateManyWithoutVehiclesNestedInput = {
    create?: XOR<damagesCreateWithoutVehiclesInput, damagesUncheckedCreateWithoutVehiclesInput> | damagesCreateWithoutVehiclesInput[] | damagesUncheckedCreateWithoutVehiclesInput[]
    connectOrCreate?: damagesCreateOrConnectWithoutVehiclesInput | damagesCreateOrConnectWithoutVehiclesInput[]
    upsert?: damagesUpsertWithWhereUniqueWithoutVehiclesInput | damagesUpsertWithWhereUniqueWithoutVehiclesInput[]
    createMany?: damagesCreateManyVehiclesInputEnvelope
    set?: damagesWhereUniqueInput | damagesWhereUniqueInput[]
    disconnect?: damagesWhereUniqueInput | damagesWhereUniqueInput[]
    delete?: damagesWhereUniqueInput | damagesWhereUniqueInput[]
    connect?: damagesWhereUniqueInput | damagesWhereUniqueInput[]
    update?: damagesUpdateWithWhereUniqueWithoutVehiclesInput | damagesUpdateWithWhereUniqueWithoutVehiclesInput[]
    updateMany?: damagesUpdateManyWithWhereWithoutVehiclesInput | damagesUpdateManyWithWhereWithoutVehiclesInput[]
    deleteMany?: damagesScalarWhereInput | damagesScalarWhereInput[]
  }

  export type servicesUncheckedUpdateManyWithoutVehiclesNestedInput = {
    create?: XOR<servicesCreateWithoutVehiclesInput, servicesUncheckedCreateWithoutVehiclesInput> | servicesCreateWithoutVehiclesInput[] | servicesUncheckedCreateWithoutVehiclesInput[]
    connectOrCreate?: servicesCreateOrConnectWithoutVehiclesInput | servicesCreateOrConnectWithoutVehiclesInput[]
    upsert?: servicesUpsertWithWhereUniqueWithoutVehiclesInput | servicesUpsertWithWhereUniqueWithoutVehiclesInput[]
    createMany?: servicesCreateManyVehiclesInputEnvelope
    set?: servicesWhereUniqueInput | servicesWhereUniqueInput[]
    disconnect?: servicesWhereUniqueInput | servicesWhereUniqueInput[]
    delete?: servicesWhereUniqueInput | servicesWhereUniqueInput[]
    connect?: servicesWhereUniqueInput | servicesWhereUniqueInput[]
    update?: servicesUpdateWithWhereUniqueWithoutVehiclesInput | servicesUpdateWithWhereUniqueWithoutVehiclesInput[]
    updateMany?: servicesUpdateManyWithWhereWithoutVehiclesInput | servicesUpdateManyWithWhereWithoutVehiclesInput[]
    deleteMany?: servicesScalarWhereInput | servicesScalarWhereInput[]
  }

  export type vehicle_logsUncheckedUpdateManyWithoutVehiclesNestedInput = {
    create?: XOR<vehicle_logsCreateWithoutVehiclesInput, vehicle_logsUncheckedCreateWithoutVehiclesInput> | vehicle_logsCreateWithoutVehiclesInput[] | vehicle_logsUncheckedCreateWithoutVehiclesInput[]
    connectOrCreate?: vehicle_logsCreateOrConnectWithoutVehiclesInput | vehicle_logsCreateOrConnectWithoutVehiclesInput[]
    upsert?: vehicle_logsUpsertWithWhereUniqueWithoutVehiclesInput | vehicle_logsUpsertWithWhereUniqueWithoutVehiclesInput[]
    createMany?: vehicle_logsCreateManyVehiclesInputEnvelope
    set?: vehicle_logsWhereUniqueInput | vehicle_logsWhereUniqueInput[]
    disconnect?: vehicle_logsWhereUniqueInput | vehicle_logsWhereUniqueInput[]
    delete?: vehicle_logsWhereUniqueInput | vehicle_logsWhereUniqueInput[]
    connect?: vehicle_logsWhereUniqueInput | vehicle_logsWhereUniqueInput[]
    update?: vehicle_logsUpdateWithWhereUniqueWithoutVehiclesInput | vehicle_logsUpdateWithWhereUniqueWithoutVehiclesInput[]
    updateMany?: vehicle_logsUpdateManyWithWhereWithoutVehiclesInput | vehicle_logsUpdateManyWithWhereWithoutVehiclesInput[]
    deleteMany?: vehicle_logsScalarWhereInput | vehicle_logsScalarWhereInput[]
  }

  export type work_forceUncheckedUpdateManyWithoutVehiclesNestedInput = {
    create?: XOR<work_forceCreateWithoutVehiclesInput, work_forceUncheckedCreateWithoutVehiclesInput> | work_forceCreateWithoutVehiclesInput[] | work_forceUncheckedCreateWithoutVehiclesInput[]
    connectOrCreate?: work_forceCreateOrConnectWithoutVehiclesInput | work_forceCreateOrConnectWithoutVehiclesInput[]
    upsert?: work_forceUpsertWithWhereUniqueWithoutVehiclesInput | work_forceUpsertWithWhereUniqueWithoutVehiclesInput[]
    createMany?: work_forceCreateManyVehiclesInputEnvelope
    set?: work_forceWhereUniqueInput | work_forceWhereUniqueInput[]
    disconnect?: work_forceWhereUniqueInput | work_forceWhereUniqueInput[]
    delete?: work_forceWhereUniqueInput | work_forceWhereUniqueInput[]
    connect?: work_forceWhereUniqueInput | work_forceWhereUniqueInput[]
    update?: work_forceUpdateWithWhereUniqueWithoutVehiclesInput | work_forceUpdateWithWhereUniqueWithoutVehiclesInput[]
    updateMany?: work_forceUpdateManyWithWhereWithoutVehiclesInput | work_forceUpdateManyWithWhereWithoutVehiclesInput[]
    deleteMany?: work_forceScalarWhereInput | work_forceScalarWhereInput[]
  }

  export type baseCreateNestedOneWithoutWork_forceInput = {
    create?: XOR<baseCreateWithoutWork_forceInput, baseUncheckedCreateWithoutWork_forceInput>
    connectOrCreate?: baseCreateOrConnectWithoutWork_forceInput
    connect?: baseWhereUniqueInput
  }

  export type vehiclesCreateNestedOneWithoutWork_forceInput = {
    create?: XOR<vehiclesCreateWithoutWork_forceInput, vehiclesUncheckedCreateWithoutWork_forceInput>
    connectOrCreate?: vehiclesCreateOrConnectWithoutWork_forceInput
    connect?: vehiclesWhereUniqueInput
  }

  export type baseUpdateOneWithoutWork_forceNestedInput = {
    create?: XOR<baseCreateWithoutWork_forceInput, baseUncheckedCreateWithoutWork_forceInput>
    connectOrCreate?: baseCreateOrConnectWithoutWork_forceInput
    upsert?: baseUpsertWithoutWork_forceInput
    disconnect?: baseWhereInput | boolean
    delete?: baseWhereInput | boolean
    connect?: baseWhereUniqueInput
    update?: XOR<XOR<baseUpdateToOneWithWhereWithoutWork_forceInput, baseUpdateWithoutWork_forceInput>, baseUncheckedUpdateWithoutWork_forceInput>
  }

  export type vehiclesUpdateOneWithoutWork_forceNestedInput = {
    create?: XOR<vehiclesCreateWithoutWork_forceInput, vehiclesUncheckedCreateWithoutWork_forceInput>
    connectOrCreate?: vehiclesCreateOrConnectWithoutWork_forceInput
    upsert?: vehiclesUpsertWithoutWork_forceInput
    disconnect?: vehiclesWhereInput | boolean
    delete?: vehiclesWhereInput | boolean
    connect?: vehiclesWhereUniqueInput
    update?: XOR<XOR<vehiclesUpdateToOneWithWhereWithoutWork_forceInput, vehiclesUpdateWithoutWork_forceInput>, vehiclesUncheckedUpdateWithoutWork_forceInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type work_forceCreateWithoutBaseInput = {
    work_shift: string
    id_drive?: number | null
    id_persone_one: number
    id_persone_two?: number | null
    id_presone_trhee?: number | null
    extras_persone?: string | null
    date_work_shift: Date | string
    notes?: string | null
    vehicles?: vehiclesCreateNestedOneWithoutWork_forceInput
  }

  export type work_forceUncheckedCreateWithoutBaseInput = {
    id?: number
    work_shift: string
    id_vehicle?: number | null
    id_drive?: number | null
    id_persone_one: number
    id_persone_two?: number | null
    id_presone_trhee?: number | null
    extras_persone?: string | null
    date_work_shift: Date | string
    notes?: string | null
  }

  export type work_forceCreateOrConnectWithoutBaseInput = {
    where: work_forceWhereUniqueInput
    create: XOR<work_forceCreateWithoutBaseInput, work_forceUncheckedCreateWithoutBaseInput>
  }

  export type work_forceCreateManyBaseInputEnvelope = {
    data: work_forceCreateManyBaseInput | work_forceCreateManyBaseInput[]
    skipDuplicates?: boolean
  }

  export type work_forceUpsertWithWhereUniqueWithoutBaseInput = {
    where: work_forceWhereUniqueInput
    update: XOR<work_forceUpdateWithoutBaseInput, work_forceUncheckedUpdateWithoutBaseInput>
    create: XOR<work_forceCreateWithoutBaseInput, work_forceUncheckedCreateWithoutBaseInput>
  }

  export type work_forceUpdateWithWhereUniqueWithoutBaseInput = {
    where: work_forceWhereUniqueInput
    data: XOR<work_forceUpdateWithoutBaseInput, work_forceUncheckedUpdateWithoutBaseInput>
  }

  export type work_forceUpdateManyWithWhereWithoutBaseInput = {
    where: work_forceScalarWhereInput
    data: XOR<work_forceUpdateManyMutationInput, work_forceUncheckedUpdateManyWithoutBaseInput>
  }

  export type work_forceScalarWhereInput = {
    AND?: work_forceScalarWhereInput | work_forceScalarWhereInput[]
    OR?: work_forceScalarWhereInput[]
    NOT?: work_forceScalarWhereInput | work_forceScalarWhereInput[]
    id?: IntFilter<"work_force"> | number
    work_shift?: StringFilter<"work_force"> | string
    id_base?: IntNullableFilter<"work_force"> | number | null
    id_vehicle?: IntNullableFilter<"work_force"> | number | null
    id_drive?: IntNullableFilter<"work_force"> | number | null
    id_persone_one?: IntFilter<"work_force"> | number
    id_persone_two?: IntNullableFilter<"work_force"> | number | null
    id_presone_trhee?: IntNullableFilter<"work_force"> | number | null
    extras_persone?: StringNullableFilter<"work_force"> | string | null
    date_work_shift?: DateTimeFilter<"work_force"> | Date | string
    notes?: StringNullableFilter<"work_force"> | string | null
  }

  export type vehiclesCreateWithoutDamagesInput = {
    number_unit: number
    type: string
    cover_img: string
    left_img: string
    up_img: string
    front_img: string
    back_img: string
    kilometers: number
    kilometers_to_service: number
    date_register: Date | string
    vehicle_license_plates: string
    status: string
    model: string
    card_brand: string
    services?: servicesCreateNestedManyWithoutVehiclesInput
    vehicle_logs?: vehicle_logsCreateNestedManyWithoutVehiclesInput
    work_force?: work_forceCreateNestedManyWithoutVehiclesInput
  }

  export type vehiclesUncheckedCreateWithoutDamagesInput = {
    id?: number
    number_unit: number
    type: string
    cover_img: string
    left_img: string
    up_img: string
    front_img: string
    back_img: string
    kilometers: number
    kilometers_to_service: number
    date_register: Date | string
    vehicle_license_plates: string
    status: string
    model: string
    card_brand: string
    services?: servicesUncheckedCreateNestedManyWithoutVehiclesInput
    vehicle_logs?: vehicle_logsUncheckedCreateNestedManyWithoutVehiclesInput
    work_force?: work_forceUncheckedCreateNestedManyWithoutVehiclesInput
  }

  export type vehiclesCreateOrConnectWithoutDamagesInput = {
    where: vehiclesWhereUniqueInput
    create: XOR<vehiclesCreateWithoutDamagesInput, vehiclesUncheckedCreateWithoutDamagesInput>
  }

  export type vehiclesUpsertWithoutDamagesInput = {
    update: XOR<vehiclesUpdateWithoutDamagesInput, vehiclesUncheckedUpdateWithoutDamagesInput>
    create: XOR<vehiclesCreateWithoutDamagesInput, vehiclesUncheckedCreateWithoutDamagesInput>
    where?: vehiclesWhereInput
  }

  export type vehiclesUpdateToOneWithWhereWithoutDamagesInput = {
    where?: vehiclesWhereInput
    data: XOR<vehiclesUpdateWithoutDamagesInput, vehiclesUncheckedUpdateWithoutDamagesInput>
  }

  export type vehiclesUpdateWithoutDamagesInput = {
    number_unit?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    cover_img?: StringFieldUpdateOperationsInput | string
    left_img?: StringFieldUpdateOperationsInput | string
    up_img?: StringFieldUpdateOperationsInput | string
    front_img?: StringFieldUpdateOperationsInput | string
    back_img?: StringFieldUpdateOperationsInput | string
    kilometers?: FloatFieldUpdateOperationsInput | number
    kilometers_to_service?: FloatFieldUpdateOperationsInput | number
    date_register?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle_license_plates?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    card_brand?: StringFieldUpdateOperationsInput | string
    services?: servicesUpdateManyWithoutVehiclesNestedInput
    vehicle_logs?: vehicle_logsUpdateManyWithoutVehiclesNestedInput
    work_force?: work_forceUpdateManyWithoutVehiclesNestedInput
  }

  export type vehiclesUncheckedUpdateWithoutDamagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    number_unit?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    cover_img?: StringFieldUpdateOperationsInput | string
    left_img?: StringFieldUpdateOperationsInput | string
    up_img?: StringFieldUpdateOperationsInput | string
    front_img?: StringFieldUpdateOperationsInput | string
    back_img?: StringFieldUpdateOperationsInput | string
    kilometers?: FloatFieldUpdateOperationsInput | number
    kilometers_to_service?: FloatFieldUpdateOperationsInput | number
    date_register?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle_license_plates?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    card_brand?: StringFieldUpdateOperationsInput | string
    services?: servicesUncheckedUpdateManyWithoutVehiclesNestedInput
    vehicle_logs?: vehicle_logsUncheckedUpdateManyWithoutVehiclesNestedInput
    work_force?: work_forceUncheckedUpdateManyWithoutVehiclesNestedInput
  }

  export type servicesCreateWithoutLogs_servicesInput = {
    user_id: number
    kilometers: number
    driver: number
    first_firefighter: string
    second_firefighter?: string | null
    third_firefighter?: string | null
    type_service: string
    folio?: string | null
    cologne: string
    stret: string
    crossing: string
    reporter: string
    phone_reporter: string
    close_type: string
    general_and_conclusion: string
    close_kilometers: number
    kilometers_traveled?: number | null
    status: string
    vehicles: vehiclesCreateNestedOneWithoutServicesInput
  }

  export type servicesUncheckedCreateWithoutLogs_servicesInput = {
    id?: number
    user_id: number
    vehicle_id: number
    kilometers: number
    driver: number
    first_firefighter: string
    second_firefighter?: string | null
    third_firefighter?: string | null
    type_service: string
    folio?: string | null
    cologne: string
    stret: string
    crossing: string
    reporter: string
    phone_reporter: string
    close_type: string
    general_and_conclusion: string
    close_kilometers: number
    kilometers_traveled?: number | null
    status: string
  }

  export type servicesCreateOrConnectWithoutLogs_servicesInput = {
    where: servicesWhereUniqueInput
    create: XOR<servicesCreateWithoutLogs_servicesInput, servicesUncheckedCreateWithoutLogs_servicesInput>
  }

  export type servicesUpsertWithoutLogs_servicesInput = {
    update: XOR<servicesUpdateWithoutLogs_servicesInput, servicesUncheckedUpdateWithoutLogs_servicesInput>
    create: XOR<servicesCreateWithoutLogs_servicesInput, servicesUncheckedCreateWithoutLogs_servicesInput>
    where?: servicesWhereInput
  }

  export type servicesUpdateToOneWithWhereWithoutLogs_servicesInput = {
    where?: servicesWhereInput
    data: XOR<servicesUpdateWithoutLogs_servicesInput, servicesUncheckedUpdateWithoutLogs_servicesInput>
  }

  export type servicesUpdateWithoutLogs_servicesInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    kilometers?: IntFieldUpdateOperationsInput | number
    driver?: IntFieldUpdateOperationsInput | number
    first_firefighter?: StringFieldUpdateOperationsInput | string
    second_firefighter?: NullableStringFieldUpdateOperationsInput | string | null
    third_firefighter?: NullableStringFieldUpdateOperationsInput | string | null
    type_service?: StringFieldUpdateOperationsInput | string
    folio?: NullableStringFieldUpdateOperationsInput | string | null
    cologne?: StringFieldUpdateOperationsInput | string
    stret?: StringFieldUpdateOperationsInput | string
    crossing?: StringFieldUpdateOperationsInput | string
    reporter?: StringFieldUpdateOperationsInput | string
    phone_reporter?: StringFieldUpdateOperationsInput | string
    close_type?: StringFieldUpdateOperationsInput | string
    general_and_conclusion?: StringFieldUpdateOperationsInput | string
    close_kilometers?: IntFieldUpdateOperationsInput | number
    kilometers_traveled?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    vehicles?: vehiclesUpdateOneRequiredWithoutServicesNestedInput
  }

  export type servicesUncheckedUpdateWithoutLogs_servicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    vehicle_id?: IntFieldUpdateOperationsInput | number
    kilometers?: IntFieldUpdateOperationsInput | number
    driver?: IntFieldUpdateOperationsInput | number
    first_firefighter?: StringFieldUpdateOperationsInput | string
    second_firefighter?: NullableStringFieldUpdateOperationsInput | string | null
    third_firefighter?: NullableStringFieldUpdateOperationsInput | string | null
    type_service?: StringFieldUpdateOperationsInput | string
    folio?: NullableStringFieldUpdateOperationsInput | string | null
    cologne?: StringFieldUpdateOperationsInput | string
    stret?: StringFieldUpdateOperationsInput | string
    crossing?: StringFieldUpdateOperationsInput | string
    reporter?: StringFieldUpdateOperationsInput | string
    phone_reporter?: StringFieldUpdateOperationsInput | string
    close_type?: StringFieldUpdateOperationsInput | string
    general_and_conclusion?: StringFieldUpdateOperationsInput | string
    close_kilometers?: IntFieldUpdateOperationsInput | number
    kilometers_traveled?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type logs_servicesCreateWithoutServicesInput = {
    id_user: number
    old_data?: string | null
    new_data: string
    date_change: string
  }

  export type logs_servicesUncheckedCreateWithoutServicesInput = {
    id?: number
    id_user: number
    old_data?: string | null
    new_data: string
    date_change: string
  }

  export type logs_servicesCreateOrConnectWithoutServicesInput = {
    where: logs_servicesWhereUniqueInput
    create: XOR<logs_servicesCreateWithoutServicesInput, logs_servicesUncheckedCreateWithoutServicesInput>
  }

  export type logs_servicesCreateManyServicesInputEnvelope = {
    data: logs_servicesCreateManyServicesInput | logs_servicesCreateManyServicesInput[]
    skipDuplicates?: boolean
  }

  export type vehiclesCreateWithoutServicesInput = {
    number_unit: number
    type: string
    cover_img: string
    left_img: string
    up_img: string
    front_img: string
    back_img: string
    kilometers: number
    kilometers_to_service: number
    date_register: Date | string
    vehicle_license_plates: string
    status: string
    model: string
    card_brand: string
    damages?: damagesCreateNestedManyWithoutVehiclesInput
    vehicle_logs?: vehicle_logsCreateNestedManyWithoutVehiclesInput
    work_force?: work_forceCreateNestedManyWithoutVehiclesInput
  }

  export type vehiclesUncheckedCreateWithoutServicesInput = {
    id?: number
    number_unit: number
    type: string
    cover_img: string
    left_img: string
    up_img: string
    front_img: string
    back_img: string
    kilometers: number
    kilometers_to_service: number
    date_register: Date | string
    vehicle_license_plates: string
    status: string
    model: string
    card_brand: string
    damages?: damagesUncheckedCreateNestedManyWithoutVehiclesInput
    vehicle_logs?: vehicle_logsUncheckedCreateNestedManyWithoutVehiclesInput
    work_force?: work_forceUncheckedCreateNestedManyWithoutVehiclesInput
  }

  export type vehiclesCreateOrConnectWithoutServicesInput = {
    where: vehiclesWhereUniqueInput
    create: XOR<vehiclesCreateWithoutServicesInput, vehiclesUncheckedCreateWithoutServicesInput>
  }

  export type logs_servicesUpsertWithWhereUniqueWithoutServicesInput = {
    where: logs_servicesWhereUniqueInput
    update: XOR<logs_servicesUpdateWithoutServicesInput, logs_servicesUncheckedUpdateWithoutServicesInput>
    create: XOR<logs_servicesCreateWithoutServicesInput, logs_servicesUncheckedCreateWithoutServicesInput>
  }

  export type logs_servicesUpdateWithWhereUniqueWithoutServicesInput = {
    where: logs_servicesWhereUniqueInput
    data: XOR<logs_servicesUpdateWithoutServicesInput, logs_servicesUncheckedUpdateWithoutServicesInput>
  }

  export type logs_servicesUpdateManyWithWhereWithoutServicesInput = {
    where: logs_servicesScalarWhereInput
    data: XOR<logs_servicesUpdateManyMutationInput, logs_servicesUncheckedUpdateManyWithoutServicesInput>
  }

  export type logs_servicesScalarWhereInput = {
    AND?: logs_servicesScalarWhereInput | logs_servicesScalarWhereInput[]
    OR?: logs_servicesScalarWhereInput[]
    NOT?: logs_servicesScalarWhereInput | logs_servicesScalarWhereInput[]
    id?: IntFilter<"logs_services"> | number
    id_user?: IntFilter<"logs_services"> | number
    id_service?: IntFilter<"logs_services"> | number
    old_data?: StringNullableFilter<"logs_services"> | string | null
    new_data?: StringFilter<"logs_services"> | string
    date_change?: StringFilter<"logs_services"> | string
  }

  export type vehiclesUpsertWithoutServicesInput = {
    update: XOR<vehiclesUpdateWithoutServicesInput, vehiclesUncheckedUpdateWithoutServicesInput>
    create: XOR<vehiclesCreateWithoutServicesInput, vehiclesUncheckedCreateWithoutServicesInput>
    where?: vehiclesWhereInput
  }

  export type vehiclesUpdateToOneWithWhereWithoutServicesInput = {
    where?: vehiclesWhereInput
    data: XOR<vehiclesUpdateWithoutServicesInput, vehiclesUncheckedUpdateWithoutServicesInput>
  }

  export type vehiclesUpdateWithoutServicesInput = {
    number_unit?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    cover_img?: StringFieldUpdateOperationsInput | string
    left_img?: StringFieldUpdateOperationsInput | string
    up_img?: StringFieldUpdateOperationsInput | string
    front_img?: StringFieldUpdateOperationsInput | string
    back_img?: StringFieldUpdateOperationsInput | string
    kilometers?: FloatFieldUpdateOperationsInput | number
    kilometers_to_service?: FloatFieldUpdateOperationsInput | number
    date_register?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle_license_plates?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    card_brand?: StringFieldUpdateOperationsInput | string
    damages?: damagesUpdateManyWithoutVehiclesNestedInput
    vehicle_logs?: vehicle_logsUpdateManyWithoutVehiclesNestedInput
    work_force?: work_forceUpdateManyWithoutVehiclesNestedInput
  }

  export type vehiclesUncheckedUpdateWithoutServicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    number_unit?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    cover_img?: StringFieldUpdateOperationsInput | string
    left_img?: StringFieldUpdateOperationsInput | string
    up_img?: StringFieldUpdateOperationsInput | string
    front_img?: StringFieldUpdateOperationsInput | string
    back_img?: StringFieldUpdateOperationsInput | string
    kilometers?: FloatFieldUpdateOperationsInput | number
    kilometers_to_service?: FloatFieldUpdateOperationsInput | number
    date_register?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle_license_plates?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    card_brand?: StringFieldUpdateOperationsInput | string
    damages?: damagesUncheckedUpdateManyWithoutVehiclesNestedInput
    vehicle_logs?: vehicle_logsUncheckedUpdateManyWithoutVehiclesNestedInput
    work_force?: work_forceUncheckedUpdateManyWithoutVehiclesNestedInput
  }

  export type vehiclesCreateWithoutVehicle_logsInput = {
    number_unit: number
    type: string
    cover_img: string
    left_img: string
    up_img: string
    front_img: string
    back_img: string
    kilometers: number
    kilometers_to_service: number
    date_register: Date | string
    vehicle_license_plates: string
    status: string
    model: string
    card_brand: string
    damages?: damagesCreateNestedManyWithoutVehiclesInput
    services?: servicesCreateNestedManyWithoutVehiclesInput
    work_force?: work_forceCreateNestedManyWithoutVehiclesInput
  }

  export type vehiclesUncheckedCreateWithoutVehicle_logsInput = {
    id?: number
    number_unit: number
    type: string
    cover_img: string
    left_img: string
    up_img: string
    front_img: string
    back_img: string
    kilometers: number
    kilometers_to_service: number
    date_register: Date | string
    vehicle_license_plates: string
    status: string
    model: string
    card_brand: string
    damages?: damagesUncheckedCreateNestedManyWithoutVehiclesInput
    services?: servicesUncheckedCreateNestedManyWithoutVehiclesInput
    work_force?: work_forceUncheckedCreateNestedManyWithoutVehiclesInput
  }

  export type vehiclesCreateOrConnectWithoutVehicle_logsInput = {
    where: vehiclesWhereUniqueInput
    create: XOR<vehiclesCreateWithoutVehicle_logsInput, vehiclesUncheckedCreateWithoutVehicle_logsInput>
  }

  export type vehiclesUpsertWithoutVehicle_logsInput = {
    update: XOR<vehiclesUpdateWithoutVehicle_logsInput, vehiclesUncheckedUpdateWithoutVehicle_logsInput>
    create: XOR<vehiclesCreateWithoutVehicle_logsInput, vehiclesUncheckedCreateWithoutVehicle_logsInput>
    where?: vehiclesWhereInput
  }

  export type vehiclesUpdateToOneWithWhereWithoutVehicle_logsInput = {
    where?: vehiclesWhereInput
    data: XOR<vehiclesUpdateWithoutVehicle_logsInput, vehiclesUncheckedUpdateWithoutVehicle_logsInput>
  }

  export type vehiclesUpdateWithoutVehicle_logsInput = {
    number_unit?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    cover_img?: StringFieldUpdateOperationsInput | string
    left_img?: StringFieldUpdateOperationsInput | string
    up_img?: StringFieldUpdateOperationsInput | string
    front_img?: StringFieldUpdateOperationsInput | string
    back_img?: StringFieldUpdateOperationsInput | string
    kilometers?: FloatFieldUpdateOperationsInput | number
    kilometers_to_service?: FloatFieldUpdateOperationsInput | number
    date_register?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle_license_plates?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    card_brand?: StringFieldUpdateOperationsInput | string
    damages?: damagesUpdateManyWithoutVehiclesNestedInput
    services?: servicesUpdateManyWithoutVehiclesNestedInput
    work_force?: work_forceUpdateManyWithoutVehiclesNestedInput
  }

  export type vehiclesUncheckedUpdateWithoutVehicle_logsInput = {
    id?: IntFieldUpdateOperationsInput | number
    number_unit?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    cover_img?: StringFieldUpdateOperationsInput | string
    left_img?: StringFieldUpdateOperationsInput | string
    up_img?: StringFieldUpdateOperationsInput | string
    front_img?: StringFieldUpdateOperationsInput | string
    back_img?: StringFieldUpdateOperationsInput | string
    kilometers?: FloatFieldUpdateOperationsInput | number
    kilometers_to_service?: FloatFieldUpdateOperationsInput | number
    date_register?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle_license_plates?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    card_brand?: StringFieldUpdateOperationsInput | string
    damages?: damagesUncheckedUpdateManyWithoutVehiclesNestedInput
    services?: servicesUncheckedUpdateManyWithoutVehiclesNestedInput
    work_force?: work_forceUncheckedUpdateManyWithoutVehiclesNestedInput
  }

  export type damagesCreateWithoutVehiclesInput = {
    driver_id: number
    damage_event: string
    where_is_damage: string
    photo_damage?: string | null
    damage_description: string
    type_to_damage: string
  }

  export type damagesUncheckedCreateWithoutVehiclesInput = {
    id?: number
    driver_id: number
    damage_event: string
    where_is_damage: string
    photo_damage?: string | null
    damage_description: string
    type_to_damage: string
  }

  export type damagesCreateOrConnectWithoutVehiclesInput = {
    where: damagesWhereUniqueInput
    create: XOR<damagesCreateWithoutVehiclesInput, damagesUncheckedCreateWithoutVehiclesInput>
  }

  export type damagesCreateManyVehiclesInputEnvelope = {
    data: damagesCreateManyVehiclesInput | damagesCreateManyVehiclesInput[]
    skipDuplicates?: boolean
  }

  export type servicesCreateWithoutVehiclesInput = {
    user_id: number
    kilometers: number
    driver: number
    first_firefighter: string
    second_firefighter?: string | null
    third_firefighter?: string | null
    type_service: string
    folio?: string | null
    cologne: string
    stret: string
    crossing: string
    reporter: string
    phone_reporter: string
    close_type: string
    general_and_conclusion: string
    close_kilometers: number
    kilometers_traveled?: number | null
    status: string
    logs_services?: logs_servicesCreateNestedManyWithoutServicesInput
  }

  export type servicesUncheckedCreateWithoutVehiclesInput = {
    id?: number
    user_id: number
    kilometers: number
    driver: number
    first_firefighter: string
    second_firefighter?: string | null
    third_firefighter?: string | null
    type_service: string
    folio?: string | null
    cologne: string
    stret: string
    crossing: string
    reporter: string
    phone_reporter: string
    close_type: string
    general_and_conclusion: string
    close_kilometers: number
    kilometers_traveled?: number | null
    status: string
    logs_services?: logs_servicesUncheckedCreateNestedManyWithoutServicesInput
  }

  export type servicesCreateOrConnectWithoutVehiclesInput = {
    where: servicesWhereUniqueInput
    create: XOR<servicesCreateWithoutVehiclesInput, servicesUncheckedCreateWithoutVehiclesInput>
  }

  export type servicesCreateManyVehiclesInputEnvelope = {
    data: servicesCreateManyVehiclesInput | servicesCreateManyVehiclesInput[]
    skipDuplicates?: boolean
  }

  export type vehicle_logsCreateWithoutVehiclesInput = {
    driver_id: number
    luz_delantera_alta: string
    luz_delantera_baja: string
    luces_de_emergencia: string
    luces_neblineros: string
    luz_direccional: string
    luz_de_freno: string
    luz_de_reversa: string
    luces_del_tanque_cisterna: string
    luces_interior_cabina: string
    motor_adicional: string
    estado_de_tablero_indicadores: string
    elevadores_de_cristales: string
    espejos_lateral_derecho: string
    espejos_lateral_izquierdo: string
    espejo_retrovisor: string
    cristal_parabrisas: string
    cristal_medallon: string
    cristal_de_puertas: string
    gato_hidraulico: string
    herramientas_cambio_de_ruedas: string
    bocina_de_sonoros: string
    modulo_luminosos_sonoros: string
    torreta: string
    cinturones_de_seguridad: string
    limpia_parabrisas: string
    poliza_seguro: string
    tarjeta_circulacion: string
    tapon_tanque_combustible: string
    tapon_aceite: string
    tapon_agua: string
    nivel_aceite_motor: string
    nivel_aceite_transmision: string
    nivel_agua_radiador: string
    nivel_liquido_frenos: string
    llanta_delantera_derecha: string
    llanta_delantera_izquierda: string
    llanta_trasera_derecha: string
    llanta_trasera_izquierda: string
    llanta_repuesto: string
    fecha_registro?: Date | string | null
    llaves_encendido: string
    switch_encendido: string
    bateria: string
    postes_terminales_bateria: string
  }

  export type vehicle_logsUncheckedCreateWithoutVehiclesInput = {
    id?: number
    driver_id: number
    luz_delantera_alta: string
    luz_delantera_baja: string
    luces_de_emergencia: string
    luces_neblineros: string
    luz_direccional: string
    luz_de_freno: string
    luz_de_reversa: string
    luces_del_tanque_cisterna: string
    luces_interior_cabina: string
    motor_adicional: string
    estado_de_tablero_indicadores: string
    elevadores_de_cristales: string
    espejos_lateral_derecho: string
    espejos_lateral_izquierdo: string
    espejo_retrovisor: string
    cristal_parabrisas: string
    cristal_medallon: string
    cristal_de_puertas: string
    gato_hidraulico: string
    herramientas_cambio_de_ruedas: string
    bocina_de_sonoros: string
    modulo_luminosos_sonoros: string
    torreta: string
    cinturones_de_seguridad: string
    limpia_parabrisas: string
    poliza_seguro: string
    tarjeta_circulacion: string
    tapon_tanque_combustible: string
    tapon_aceite: string
    tapon_agua: string
    nivel_aceite_motor: string
    nivel_aceite_transmision: string
    nivel_agua_radiador: string
    nivel_liquido_frenos: string
    llanta_delantera_derecha: string
    llanta_delantera_izquierda: string
    llanta_trasera_derecha: string
    llanta_trasera_izquierda: string
    llanta_repuesto: string
    fecha_registro?: Date | string | null
    llaves_encendido: string
    switch_encendido: string
    bateria: string
    postes_terminales_bateria: string
  }

  export type vehicle_logsCreateOrConnectWithoutVehiclesInput = {
    where: vehicle_logsWhereUniqueInput
    create: XOR<vehicle_logsCreateWithoutVehiclesInput, vehicle_logsUncheckedCreateWithoutVehiclesInput>
  }

  export type vehicle_logsCreateManyVehiclesInputEnvelope = {
    data: vehicle_logsCreateManyVehiclesInput | vehicle_logsCreateManyVehiclesInput[]
    skipDuplicates?: boolean
  }

  export type work_forceCreateWithoutVehiclesInput = {
    work_shift: string
    id_drive?: number | null
    id_persone_one: number
    id_persone_two?: number | null
    id_presone_trhee?: number | null
    extras_persone?: string | null
    date_work_shift: Date | string
    notes?: string | null
    base?: baseCreateNestedOneWithoutWork_forceInput
  }

  export type work_forceUncheckedCreateWithoutVehiclesInput = {
    id?: number
    work_shift: string
    id_base?: number | null
    id_drive?: number | null
    id_persone_one: number
    id_persone_two?: number | null
    id_presone_trhee?: number | null
    extras_persone?: string | null
    date_work_shift: Date | string
    notes?: string | null
  }

  export type work_forceCreateOrConnectWithoutVehiclesInput = {
    where: work_forceWhereUniqueInput
    create: XOR<work_forceCreateWithoutVehiclesInput, work_forceUncheckedCreateWithoutVehiclesInput>
  }

  export type work_forceCreateManyVehiclesInputEnvelope = {
    data: work_forceCreateManyVehiclesInput | work_forceCreateManyVehiclesInput[]
    skipDuplicates?: boolean
  }

  export type damagesUpsertWithWhereUniqueWithoutVehiclesInput = {
    where: damagesWhereUniqueInput
    update: XOR<damagesUpdateWithoutVehiclesInput, damagesUncheckedUpdateWithoutVehiclesInput>
    create: XOR<damagesCreateWithoutVehiclesInput, damagesUncheckedCreateWithoutVehiclesInput>
  }

  export type damagesUpdateWithWhereUniqueWithoutVehiclesInput = {
    where: damagesWhereUniqueInput
    data: XOR<damagesUpdateWithoutVehiclesInput, damagesUncheckedUpdateWithoutVehiclesInput>
  }

  export type damagesUpdateManyWithWhereWithoutVehiclesInput = {
    where: damagesScalarWhereInput
    data: XOR<damagesUpdateManyMutationInput, damagesUncheckedUpdateManyWithoutVehiclesInput>
  }

  export type damagesScalarWhereInput = {
    AND?: damagesScalarWhereInput | damagesScalarWhereInput[]
    OR?: damagesScalarWhereInput[]
    NOT?: damagesScalarWhereInput | damagesScalarWhereInput[]
    id?: IntFilter<"damages"> | number
    driver_id?: IntFilter<"damages"> | number
    vehicle_id?: IntFilter<"damages"> | number
    damage_event?: StringFilter<"damages"> | string
    where_is_damage?: StringFilter<"damages"> | string
    photo_damage?: StringNullableFilter<"damages"> | string | null
    damage_description?: StringFilter<"damages"> | string
    type_to_damage?: StringFilter<"damages"> | string
  }

  export type servicesUpsertWithWhereUniqueWithoutVehiclesInput = {
    where: servicesWhereUniqueInput
    update: XOR<servicesUpdateWithoutVehiclesInput, servicesUncheckedUpdateWithoutVehiclesInput>
    create: XOR<servicesCreateWithoutVehiclesInput, servicesUncheckedCreateWithoutVehiclesInput>
  }

  export type servicesUpdateWithWhereUniqueWithoutVehiclesInput = {
    where: servicesWhereUniqueInput
    data: XOR<servicesUpdateWithoutVehiclesInput, servicesUncheckedUpdateWithoutVehiclesInput>
  }

  export type servicesUpdateManyWithWhereWithoutVehiclesInput = {
    where: servicesScalarWhereInput
    data: XOR<servicesUpdateManyMutationInput, servicesUncheckedUpdateManyWithoutVehiclesInput>
  }

  export type servicesScalarWhereInput = {
    AND?: servicesScalarWhereInput | servicesScalarWhereInput[]
    OR?: servicesScalarWhereInput[]
    NOT?: servicesScalarWhereInput | servicesScalarWhereInput[]
    id?: IntFilter<"services"> | number
    user_id?: IntFilter<"services"> | number
    vehicle_id?: IntFilter<"services"> | number
    kilometers?: IntFilter<"services"> | number
    driver?: IntFilter<"services"> | number
    first_firefighter?: StringFilter<"services"> | string
    second_firefighter?: StringNullableFilter<"services"> | string | null
    third_firefighter?: StringNullableFilter<"services"> | string | null
    type_service?: StringFilter<"services"> | string
    folio?: StringNullableFilter<"services"> | string | null
    cologne?: StringFilter<"services"> | string
    stret?: StringFilter<"services"> | string
    crossing?: StringFilter<"services"> | string
    reporter?: StringFilter<"services"> | string
    phone_reporter?: StringFilter<"services"> | string
    close_type?: StringFilter<"services"> | string
    general_and_conclusion?: StringFilter<"services"> | string
    close_kilometers?: IntFilter<"services"> | number
    kilometers_traveled?: IntNullableFilter<"services"> | number | null
    status?: StringFilter<"services"> | string
  }

  export type vehicle_logsUpsertWithWhereUniqueWithoutVehiclesInput = {
    where: vehicle_logsWhereUniqueInput
    update: XOR<vehicle_logsUpdateWithoutVehiclesInput, vehicle_logsUncheckedUpdateWithoutVehiclesInput>
    create: XOR<vehicle_logsCreateWithoutVehiclesInput, vehicle_logsUncheckedCreateWithoutVehiclesInput>
  }

  export type vehicle_logsUpdateWithWhereUniqueWithoutVehiclesInput = {
    where: vehicle_logsWhereUniqueInput
    data: XOR<vehicle_logsUpdateWithoutVehiclesInput, vehicle_logsUncheckedUpdateWithoutVehiclesInput>
  }

  export type vehicle_logsUpdateManyWithWhereWithoutVehiclesInput = {
    where: vehicle_logsScalarWhereInput
    data: XOR<vehicle_logsUpdateManyMutationInput, vehicle_logsUncheckedUpdateManyWithoutVehiclesInput>
  }

  export type vehicle_logsScalarWhereInput = {
    AND?: vehicle_logsScalarWhereInput | vehicle_logsScalarWhereInput[]
    OR?: vehicle_logsScalarWhereInput[]
    NOT?: vehicle_logsScalarWhereInput | vehicle_logsScalarWhereInput[]
    id?: IntFilter<"vehicle_logs"> | number
    vehicle_id?: IntFilter<"vehicle_logs"> | number
    driver_id?: IntFilter<"vehicle_logs"> | number
    luz_delantera_alta?: StringFilter<"vehicle_logs"> | string
    luz_delantera_baja?: StringFilter<"vehicle_logs"> | string
    luces_de_emergencia?: StringFilter<"vehicle_logs"> | string
    luces_neblineros?: StringFilter<"vehicle_logs"> | string
    luz_direccional?: StringFilter<"vehicle_logs"> | string
    luz_de_freno?: StringFilter<"vehicle_logs"> | string
    luz_de_reversa?: StringFilter<"vehicle_logs"> | string
    luces_del_tanque_cisterna?: StringFilter<"vehicle_logs"> | string
    luces_interior_cabina?: StringFilter<"vehicle_logs"> | string
    motor_adicional?: StringFilter<"vehicle_logs"> | string
    estado_de_tablero_indicadores?: StringFilter<"vehicle_logs"> | string
    elevadores_de_cristales?: StringFilter<"vehicle_logs"> | string
    espejos_lateral_derecho?: StringFilter<"vehicle_logs"> | string
    espejos_lateral_izquierdo?: StringFilter<"vehicle_logs"> | string
    espejo_retrovisor?: StringFilter<"vehicle_logs"> | string
    cristal_parabrisas?: StringFilter<"vehicle_logs"> | string
    cristal_medallon?: StringFilter<"vehicle_logs"> | string
    cristal_de_puertas?: StringFilter<"vehicle_logs"> | string
    gato_hidraulico?: StringFilter<"vehicle_logs"> | string
    herramientas_cambio_de_ruedas?: StringFilter<"vehicle_logs"> | string
    bocina_de_sonoros?: StringFilter<"vehicle_logs"> | string
    modulo_luminosos_sonoros?: StringFilter<"vehicle_logs"> | string
    torreta?: StringFilter<"vehicle_logs"> | string
    cinturones_de_seguridad?: StringFilter<"vehicle_logs"> | string
    limpia_parabrisas?: StringFilter<"vehicle_logs"> | string
    poliza_seguro?: StringFilter<"vehicle_logs"> | string
    tarjeta_circulacion?: StringFilter<"vehicle_logs"> | string
    tapon_tanque_combustible?: StringFilter<"vehicle_logs"> | string
    tapon_aceite?: StringFilter<"vehicle_logs"> | string
    tapon_agua?: StringFilter<"vehicle_logs"> | string
    nivel_aceite_motor?: StringFilter<"vehicle_logs"> | string
    nivel_aceite_transmision?: StringFilter<"vehicle_logs"> | string
    nivel_agua_radiador?: StringFilter<"vehicle_logs"> | string
    nivel_liquido_frenos?: StringFilter<"vehicle_logs"> | string
    llanta_delantera_derecha?: StringFilter<"vehicle_logs"> | string
    llanta_delantera_izquierda?: StringFilter<"vehicle_logs"> | string
    llanta_trasera_derecha?: StringFilter<"vehicle_logs"> | string
    llanta_trasera_izquierda?: StringFilter<"vehicle_logs"> | string
    llanta_repuesto?: StringFilter<"vehicle_logs"> | string
    fecha_registro?: DateTimeNullableFilter<"vehicle_logs"> | Date | string | null
    llaves_encendido?: StringFilter<"vehicle_logs"> | string
    switch_encendido?: StringFilter<"vehicle_logs"> | string
    bateria?: StringFilter<"vehicle_logs"> | string
    postes_terminales_bateria?: StringFilter<"vehicle_logs"> | string
  }

  export type work_forceUpsertWithWhereUniqueWithoutVehiclesInput = {
    where: work_forceWhereUniqueInput
    update: XOR<work_forceUpdateWithoutVehiclesInput, work_forceUncheckedUpdateWithoutVehiclesInput>
    create: XOR<work_forceCreateWithoutVehiclesInput, work_forceUncheckedCreateWithoutVehiclesInput>
  }

  export type work_forceUpdateWithWhereUniqueWithoutVehiclesInput = {
    where: work_forceWhereUniqueInput
    data: XOR<work_forceUpdateWithoutVehiclesInput, work_forceUncheckedUpdateWithoutVehiclesInput>
  }

  export type work_forceUpdateManyWithWhereWithoutVehiclesInput = {
    where: work_forceScalarWhereInput
    data: XOR<work_forceUpdateManyMutationInput, work_forceUncheckedUpdateManyWithoutVehiclesInput>
  }

  export type baseCreateWithoutWork_forceInput = {
    cologne: string
    street_and_number: string
    crosse: string
    status: string
    image: string
  }

  export type baseUncheckedCreateWithoutWork_forceInput = {
    id?: number
    cologne: string
    street_and_number: string
    crosse: string
    status: string
    image: string
  }

  export type baseCreateOrConnectWithoutWork_forceInput = {
    where: baseWhereUniqueInput
    create: XOR<baseCreateWithoutWork_forceInput, baseUncheckedCreateWithoutWork_forceInput>
  }

  export type vehiclesCreateWithoutWork_forceInput = {
    number_unit: number
    type: string
    cover_img: string
    left_img: string
    up_img: string
    front_img: string
    back_img: string
    kilometers: number
    kilometers_to_service: number
    date_register: Date | string
    vehicle_license_plates: string
    status: string
    model: string
    card_brand: string
    damages?: damagesCreateNestedManyWithoutVehiclesInput
    services?: servicesCreateNestedManyWithoutVehiclesInput
    vehicle_logs?: vehicle_logsCreateNestedManyWithoutVehiclesInput
  }

  export type vehiclesUncheckedCreateWithoutWork_forceInput = {
    id?: number
    number_unit: number
    type: string
    cover_img: string
    left_img: string
    up_img: string
    front_img: string
    back_img: string
    kilometers: number
    kilometers_to_service: number
    date_register: Date | string
    vehicle_license_plates: string
    status: string
    model: string
    card_brand: string
    damages?: damagesUncheckedCreateNestedManyWithoutVehiclesInput
    services?: servicesUncheckedCreateNestedManyWithoutVehiclesInput
    vehicle_logs?: vehicle_logsUncheckedCreateNestedManyWithoutVehiclesInput
  }

  export type vehiclesCreateOrConnectWithoutWork_forceInput = {
    where: vehiclesWhereUniqueInput
    create: XOR<vehiclesCreateWithoutWork_forceInput, vehiclesUncheckedCreateWithoutWork_forceInput>
  }

  export type baseUpsertWithoutWork_forceInput = {
    update: XOR<baseUpdateWithoutWork_forceInput, baseUncheckedUpdateWithoutWork_forceInput>
    create: XOR<baseCreateWithoutWork_forceInput, baseUncheckedCreateWithoutWork_forceInput>
    where?: baseWhereInput
  }

  export type baseUpdateToOneWithWhereWithoutWork_forceInput = {
    where?: baseWhereInput
    data: XOR<baseUpdateWithoutWork_forceInput, baseUncheckedUpdateWithoutWork_forceInput>
  }

  export type baseUpdateWithoutWork_forceInput = {
    cologne?: StringFieldUpdateOperationsInput | string
    street_and_number?: StringFieldUpdateOperationsInput | string
    crosse?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type baseUncheckedUpdateWithoutWork_forceInput = {
    id?: IntFieldUpdateOperationsInput | number
    cologne?: StringFieldUpdateOperationsInput | string
    street_and_number?: StringFieldUpdateOperationsInput | string
    crosse?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type vehiclesUpsertWithoutWork_forceInput = {
    update: XOR<vehiclesUpdateWithoutWork_forceInput, vehiclesUncheckedUpdateWithoutWork_forceInput>
    create: XOR<vehiclesCreateWithoutWork_forceInput, vehiclesUncheckedCreateWithoutWork_forceInput>
    where?: vehiclesWhereInput
  }

  export type vehiclesUpdateToOneWithWhereWithoutWork_forceInput = {
    where?: vehiclesWhereInput
    data: XOR<vehiclesUpdateWithoutWork_forceInput, vehiclesUncheckedUpdateWithoutWork_forceInput>
  }

  export type vehiclesUpdateWithoutWork_forceInput = {
    number_unit?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    cover_img?: StringFieldUpdateOperationsInput | string
    left_img?: StringFieldUpdateOperationsInput | string
    up_img?: StringFieldUpdateOperationsInput | string
    front_img?: StringFieldUpdateOperationsInput | string
    back_img?: StringFieldUpdateOperationsInput | string
    kilometers?: FloatFieldUpdateOperationsInput | number
    kilometers_to_service?: FloatFieldUpdateOperationsInput | number
    date_register?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle_license_plates?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    card_brand?: StringFieldUpdateOperationsInput | string
    damages?: damagesUpdateManyWithoutVehiclesNestedInput
    services?: servicesUpdateManyWithoutVehiclesNestedInput
    vehicle_logs?: vehicle_logsUpdateManyWithoutVehiclesNestedInput
  }

  export type vehiclesUncheckedUpdateWithoutWork_forceInput = {
    id?: IntFieldUpdateOperationsInput | number
    number_unit?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    cover_img?: StringFieldUpdateOperationsInput | string
    left_img?: StringFieldUpdateOperationsInput | string
    up_img?: StringFieldUpdateOperationsInput | string
    front_img?: StringFieldUpdateOperationsInput | string
    back_img?: StringFieldUpdateOperationsInput | string
    kilometers?: FloatFieldUpdateOperationsInput | number
    kilometers_to_service?: FloatFieldUpdateOperationsInput | number
    date_register?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle_license_plates?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    card_brand?: StringFieldUpdateOperationsInput | string
    damages?: damagesUncheckedUpdateManyWithoutVehiclesNestedInput
    services?: servicesUncheckedUpdateManyWithoutVehiclesNestedInput
    vehicle_logs?: vehicle_logsUncheckedUpdateManyWithoutVehiclesNestedInput
  }

  export type work_forceCreateManyBaseInput = {
    id?: number
    work_shift: string
    id_vehicle?: number | null
    id_drive?: number | null
    id_persone_one: number
    id_persone_two?: number | null
    id_presone_trhee?: number | null
    extras_persone?: string | null
    date_work_shift: Date | string
    notes?: string | null
  }

  export type work_forceUpdateWithoutBaseInput = {
    work_shift?: StringFieldUpdateOperationsInput | string
    id_drive?: NullableIntFieldUpdateOperationsInput | number | null
    id_persone_one?: IntFieldUpdateOperationsInput | number
    id_persone_two?: NullableIntFieldUpdateOperationsInput | number | null
    id_presone_trhee?: NullableIntFieldUpdateOperationsInput | number | null
    extras_persone?: NullableStringFieldUpdateOperationsInput | string | null
    date_work_shift?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    vehicles?: vehiclesUpdateOneWithoutWork_forceNestedInput
  }

  export type work_forceUncheckedUpdateWithoutBaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    work_shift?: StringFieldUpdateOperationsInput | string
    id_vehicle?: NullableIntFieldUpdateOperationsInput | number | null
    id_drive?: NullableIntFieldUpdateOperationsInput | number | null
    id_persone_one?: IntFieldUpdateOperationsInput | number
    id_persone_two?: NullableIntFieldUpdateOperationsInput | number | null
    id_presone_trhee?: NullableIntFieldUpdateOperationsInput | number | null
    extras_persone?: NullableStringFieldUpdateOperationsInput | string | null
    date_work_shift?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type work_forceUncheckedUpdateManyWithoutBaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    work_shift?: StringFieldUpdateOperationsInput | string
    id_vehicle?: NullableIntFieldUpdateOperationsInput | number | null
    id_drive?: NullableIntFieldUpdateOperationsInput | number | null
    id_persone_one?: IntFieldUpdateOperationsInput | number
    id_persone_two?: NullableIntFieldUpdateOperationsInput | number | null
    id_presone_trhee?: NullableIntFieldUpdateOperationsInput | number | null
    extras_persone?: NullableStringFieldUpdateOperationsInput | string | null
    date_work_shift?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type logs_servicesCreateManyServicesInput = {
    id?: number
    id_user: number
    old_data?: string | null
    new_data: string
    date_change: string
  }

  export type logs_servicesUpdateWithoutServicesInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    old_data?: NullableStringFieldUpdateOperationsInput | string | null
    new_data?: StringFieldUpdateOperationsInput | string
    date_change?: StringFieldUpdateOperationsInput | string
  }

  export type logs_servicesUncheckedUpdateWithoutServicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    old_data?: NullableStringFieldUpdateOperationsInput | string | null
    new_data?: StringFieldUpdateOperationsInput | string
    date_change?: StringFieldUpdateOperationsInput | string
  }

  export type logs_servicesUncheckedUpdateManyWithoutServicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_user?: IntFieldUpdateOperationsInput | number
    old_data?: NullableStringFieldUpdateOperationsInput | string | null
    new_data?: StringFieldUpdateOperationsInput | string
    date_change?: StringFieldUpdateOperationsInput | string
  }

  export type damagesCreateManyVehiclesInput = {
    id?: number
    driver_id: number
    damage_event: string
    where_is_damage: string
    photo_damage?: string | null
    damage_description: string
    type_to_damage: string
  }

  export type servicesCreateManyVehiclesInput = {
    id?: number
    user_id: number
    kilometers: number
    driver: number
    first_firefighter: string
    second_firefighter?: string | null
    third_firefighter?: string | null
    type_service: string
    folio?: string | null
    cologne: string
    stret: string
    crossing: string
    reporter: string
    phone_reporter: string
    close_type: string
    general_and_conclusion: string
    close_kilometers: number
    kilometers_traveled?: number | null
    status: string
  }

  export type vehicle_logsCreateManyVehiclesInput = {
    id?: number
    driver_id: number
    luz_delantera_alta: string
    luz_delantera_baja: string
    luces_de_emergencia: string
    luces_neblineros: string
    luz_direccional: string
    luz_de_freno: string
    luz_de_reversa: string
    luces_del_tanque_cisterna: string
    luces_interior_cabina: string
    motor_adicional: string
    estado_de_tablero_indicadores: string
    elevadores_de_cristales: string
    espejos_lateral_derecho: string
    espejos_lateral_izquierdo: string
    espejo_retrovisor: string
    cristal_parabrisas: string
    cristal_medallon: string
    cristal_de_puertas: string
    gato_hidraulico: string
    herramientas_cambio_de_ruedas: string
    bocina_de_sonoros: string
    modulo_luminosos_sonoros: string
    torreta: string
    cinturones_de_seguridad: string
    limpia_parabrisas: string
    poliza_seguro: string
    tarjeta_circulacion: string
    tapon_tanque_combustible: string
    tapon_aceite: string
    tapon_agua: string
    nivel_aceite_motor: string
    nivel_aceite_transmision: string
    nivel_agua_radiador: string
    nivel_liquido_frenos: string
    llanta_delantera_derecha: string
    llanta_delantera_izquierda: string
    llanta_trasera_derecha: string
    llanta_trasera_izquierda: string
    llanta_repuesto: string
    fecha_registro?: Date | string | null
    llaves_encendido: string
    switch_encendido: string
    bateria: string
    postes_terminales_bateria: string
  }

  export type work_forceCreateManyVehiclesInput = {
    id?: number
    work_shift: string
    id_base?: number | null
    id_drive?: number | null
    id_persone_one: number
    id_persone_two?: number | null
    id_presone_trhee?: number | null
    extras_persone?: string | null
    date_work_shift: Date | string
    notes?: string | null
  }

  export type damagesUpdateWithoutVehiclesInput = {
    driver_id?: IntFieldUpdateOperationsInput | number
    damage_event?: StringFieldUpdateOperationsInput | string
    where_is_damage?: StringFieldUpdateOperationsInput | string
    photo_damage?: NullableStringFieldUpdateOperationsInput | string | null
    damage_description?: StringFieldUpdateOperationsInput | string
    type_to_damage?: StringFieldUpdateOperationsInput | string
  }

  export type damagesUncheckedUpdateWithoutVehiclesInput = {
    id?: IntFieldUpdateOperationsInput | number
    driver_id?: IntFieldUpdateOperationsInput | number
    damage_event?: StringFieldUpdateOperationsInput | string
    where_is_damage?: StringFieldUpdateOperationsInput | string
    photo_damage?: NullableStringFieldUpdateOperationsInput | string | null
    damage_description?: StringFieldUpdateOperationsInput | string
    type_to_damage?: StringFieldUpdateOperationsInput | string
  }

  export type damagesUncheckedUpdateManyWithoutVehiclesInput = {
    id?: IntFieldUpdateOperationsInput | number
    driver_id?: IntFieldUpdateOperationsInput | number
    damage_event?: StringFieldUpdateOperationsInput | string
    where_is_damage?: StringFieldUpdateOperationsInput | string
    photo_damage?: NullableStringFieldUpdateOperationsInput | string | null
    damage_description?: StringFieldUpdateOperationsInput | string
    type_to_damage?: StringFieldUpdateOperationsInput | string
  }

  export type servicesUpdateWithoutVehiclesInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    kilometers?: IntFieldUpdateOperationsInput | number
    driver?: IntFieldUpdateOperationsInput | number
    first_firefighter?: StringFieldUpdateOperationsInput | string
    second_firefighter?: NullableStringFieldUpdateOperationsInput | string | null
    third_firefighter?: NullableStringFieldUpdateOperationsInput | string | null
    type_service?: StringFieldUpdateOperationsInput | string
    folio?: NullableStringFieldUpdateOperationsInput | string | null
    cologne?: StringFieldUpdateOperationsInput | string
    stret?: StringFieldUpdateOperationsInput | string
    crossing?: StringFieldUpdateOperationsInput | string
    reporter?: StringFieldUpdateOperationsInput | string
    phone_reporter?: StringFieldUpdateOperationsInput | string
    close_type?: StringFieldUpdateOperationsInput | string
    general_and_conclusion?: StringFieldUpdateOperationsInput | string
    close_kilometers?: IntFieldUpdateOperationsInput | number
    kilometers_traveled?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    logs_services?: logs_servicesUpdateManyWithoutServicesNestedInput
  }

  export type servicesUncheckedUpdateWithoutVehiclesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    kilometers?: IntFieldUpdateOperationsInput | number
    driver?: IntFieldUpdateOperationsInput | number
    first_firefighter?: StringFieldUpdateOperationsInput | string
    second_firefighter?: NullableStringFieldUpdateOperationsInput | string | null
    third_firefighter?: NullableStringFieldUpdateOperationsInput | string | null
    type_service?: StringFieldUpdateOperationsInput | string
    folio?: NullableStringFieldUpdateOperationsInput | string | null
    cologne?: StringFieldUpdateOperationsInput | string
    stret?: StringFieldUpdateOperationsInput | string
    crossing?: StringFieldUpdateOperationsInput | string
    reporter?: StringFieldUpdateOperationsInput | string
    phone_reporter?: StringFieldUpdateOperationsInput | string
    close_type?: StringFieldUpdateOperationsInput | string
    general_and_conclusion?: StringFieldUpdateOperationsInput | string
    close_kilometers?: IntFieldUpdateOperationsInput | number
    kilometers_traveled?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    logs_services?: logs_servicesUncheckedUpdateManyWithoutServicesNestedInput
  }

  export type servicesUncheckedUpdateManyWithoutVehiclesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    kilometers?: IntFieldUpdateOperationsInput | number
    driver?: IntFieldUpdateOperationsInput | number
    first_firefighter?: StringFieldUpdateOperationsInput | string
    second_firefighter?: NullableStringFieldUpdateOperationsInput | string | null
    third_firefighter?: NullableStringFieldUpdateOperationsInput | string | null
    type_service?: StringFieldUpdateOperationsInput | string
    folio?: NullableStringFieldUpdateOperationsInput | string | null
    cologne?: StringFieldUpdateOperationsInput | string
    stret?: StringFieldUpdateOperationsInput | string
    crossing?: StringFieldUpdateOperationsInput | string
    reporter?: StringFieldUpdateOperationsInput | string
    phone_reporter?: StringFieldUpdateOperationsInput | string
    close_type?: StringFieldUpdateOperationsInput | string
    general_and_conclusion?: StringFieldUpdateOperationsInput | string
    close_kilometers?: IntFieldUpdateOperationsInput | number
    kilometers_traveled?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type vehicle_logsUpdateWithoutVehiclesInput = {
    driver_id?: IntFieldUpdateOperationsInput | number
    luz_delantera_alta?: StringFieldUpdateOperationsInput | string
    luz_delantera_baja?: StringFieldUpdateOperationsInput | string
    luces_de_emergencia?: StringFieldUpdateOperationsInput | string
    luces_neblineros?: StringFieldUpdateOperationsInput | string
    luz_direccional?: StringFieldUpdateOperationsInput | string
    luz_de_freno?: StringFieldUpdateOperationsInput | string
    luz_de_reversa?: StringFieldUpdateOperationsInput | string
    luces_del_tanque_cisterna?: StringFieldUpdateOperationsInput | string
    luces_interior_cabina?: StringFieldUpdateOperationsInput | string
    motor_adicional?: StringFieldUpdateOperationsInput | string
    estado_de_tablero_indicadores?: StringFieldUpdateOperationsInput | string
    elevadores_de_cristales?: StringFieldUpdateOperationsInput | string
    espejos_lateral_derecho?: StringFieldUpdateOperationsInput | string
    espejos_lateral_izquierdo?: StringFieldUpdateOperationsInput | string
    espejo_retrovisor?: StringFieldUpdateOperationsInput | string
    cristal_parabrisas?: StringFieldUpdateOperationsInput | string
    cristal_medallon?: StringFieldUpdateOperationsInput | string
    cristal_de_puertas?: StringFieldUpdateOperationsInput | string
    gato_hidraulico?: StringFieldUpdateOperationsInput | string
    herramientas_cambio_de_ruedas?: StringFieldUpdateOperationsInput | string
    bocina_de_sonoros?: StringFieldUpdateOperationsInput | string
    modulo_luminosos_sonoros?: StringFieldUpdateOperationsInput | string
    torreta?: StringFieldUpdateOperationsInput | string
    cinturones_de_seguridad?: StringFieldUpdateOperationsInput | string
    limpia_parabrisas?: StringFieldUpdateOperationsInput | string
    poliza_seguro?: StringFieldUpdateOperationsInput | string
    tarjeta_circulacion?: StringFieldUpdateOperationsInput | string
    tapon_tanque_combustible?: StringFieldUpdateOperationsInput | string
    tapon_aceite?: StringFieldUpdateOperationsInput | string
    tapon_agua?: StringFieldUpdateOperationsInput | string
    nivel_aceite_motor?: StringFieldUpdateOperationsInput | string
    nivel_aceite_transmision?: StringFieldUpdateOperationsInput | string
    nivel_agua_radiador?: StringFieldUpdateOperationsInput | string
    nivel_liquido_frenos?: StringFieldUpdateOperationsInput | string
    llanta_delantera_derecha?: StringFieldUpdateOperationsInput | string
    llanta_delantera_izquierda?: StringFieldUpdateOperationsInput | string
    llanta_trasera_derecha?: StringFieldUpdateOperationsInput | string
    llanta_trasera_izquierda?: StringFieldUpdateOperationsInput | string
    llanta_repuesto?: StringFieldUpdateOperationsInput | string
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    llaves_encendido?: StringFieldUpdateOperationsInput | string
    switch_encendido?: StringFieldUpdateOperationsInput | string
    bateria?: StringFieldUpdateOperationsInput | string
    postes_terminales_bateria?: StringFieldUpdateOperationsInput | string
  }

  export type vehicle_logsUncheckedUpdateWithoutVehiclesInput = {
    id?: IntFieldUpdateOperationsInput | number
    driver_id?: IntFieldUpdateOperationsInput | number
    luz_delantera_alta?: StringFieldUpdateOperationsInput | string
    luz_delantera_baja?: StringFieldUpdateOperationsInput | string
    luces_de_emergencia?: StringFieldUpdateOperationsInput | string
    luces_neblineros?: StringFieldUpdateOperationsInput | string
    luz_direccional?: StringFieldUpdateOperationsInput | string
    luz_de_freno?: StringFieldUpdateOperationsInput | string
    luz_de_reversa?: StringFieldUpdateOperationsInput | string
    luces_del_tanque_cisterna?: StringFieldUpdateOperationsInput | string
    luces_interior_cabina?: StringFieldUpdateOperationsInput | string
    motor_adicional?: StringFieldUpdateOperationsInput | string
    estado_de_tablero_indicadores?: StringFieldUpdateOperationsInput | string
    elevadores_de_cristales?: StringFieldUpdateOperationsInput | string
    espejos_lateral_derecho?: StringFieldUpdateOperationsInput | string
    espejos_lateral_izquierdo?: StringFieldUpdateOperationsInput | string
    espejo_retrovisor?: StringFieldUpdateOperationsInput | string
    cristal_parabrisas?: StringFieldUpdateOperationsInput | string
    cristal_medallon?: StringFieldUpdateOperationsInput | string
    cristal_de_puertas?: StringFieldUpdateOperationsInput | string
    gato_hidraulico?: StringFieldUpdateOperationsInput | string
    herramientas_cambio_de_ruedas?: StringFieldUpdateOperationsInput | string
    bocina_de_sonoros?: StringFieldUpdateOperationsInput | string
    modulo_luminosos_sonoros?: StringFieldUpdateOperationsInput | string
    torreta?: StringFieldUpdateOperationsInput | string
    cinturones_de_seguridad?: StringFieldUpdateOperationsInput | string
    limpia_parabrisas?: StringFieldUpdateOperationsInput | string
    poliza_seguro?: StringFieldUpdateOperationsInput | string
    tarjeta_circulacion?: StringFieldUpdateOperationsInput | string
    tapon_tanque_combustible?: StringFieldUpdateOperationsInput | string
    tapon_aceite?: StringFieldUpdateOperationsInput | string
    tapon_agua?: StringFieldUpdateOperationsInput | string
    nivel_aceite_motor?: StringFieldUpdateOperationsInput | string
    nivel_aceite_transmision?: StringFieldUpdateOperationsInput | string
    nivel_agua_radiador?: StringFieldUpdateOperationsInput | string
    nivel_liquido_frenos?: StringFieldUpdateOperationsInput | string
    llanta_delantera_derecha?: StringFieldUpdateOperationsInput | string
    llanta_delantera_izquierda?: StringFieldUpdateOperationsInput | string
    llanta_trasera_derecha?: StringFieldUpdateOperationsInput | string
    llanta_trasera_izquierda?: StringFieldUpdateOperationsInput | string
    llanta_repuesto?: StringFieldUpdateOperationsInput | string
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    llaves_encendido?: StringFieldUpdateOperationsInput | string
    switch_encendido?: StringFieldUpdateOperationsInput | string
    bateria?: StringFieldUpdateOperationsInput | string
    postes_terminales_bateria?: StringFieldUpdateOperationsInput | string
  }

  export type vehicle_logsUncheckedUpdateManyWithoutVehiclesInput = {
    id?: IntFieldUpdateOperationsInput | number
    driver_id?: IntFieldUpdateOperationsInput | number
    luz_delantera_alta?: StringFieldUpdateOperationsInput | string
    luz_delantera_baja?: StringFieldUpdateOperationsInput | string
    luces_de_emergencia?: StringFieldUpdateOperationsInput | string
    luces_neblineros?: StringFieldUpdateOperationsInput | string
    luz_direccional?: StringFieldUpdateOperationsInput | string
    luz_de_freno?: StringFieldUpdateOperationsInput | string
    luz_de_reversa?: StringFieldUpdateOperationsInput | string
    luces_del_tanque_cisterna?: StringFieldUpdateOperationsInput | string
    luces_interior_cabina?: StringFieldUpdateOperationsInput | string
    motor_adicional?: StringFieldUpdateOperationsInput | string
    estado_de_tablero_indicadores?: StringFieldUpdateOperationsInput | string
    elevadores_de_cristales?: StringFieldUpdateOperationsInput | string
    espejos_lateral_derecho?: StringFieldUpdateOperationsInput | string
    espejos_lateral_izquierdo?: StringFieldUpdateOperationsInput | string
    espejo_retrovisor?: StringFieldUpdateOperationsInput | string
    cristal_parabrisas?: StringFieldUpdateOperationsInput | string
    cristal_medallon?: StringFieldUpdateOperationsInput | string
    cristal_de_puertas?: StringFieldUpdateOperationsInput | string
    gato_hidraulico?: StringFieldUpdateOperationsInput | string
    herramientas_cambio_de_ruedas?: StringFieldUpdateOperationsInput | string
    bocina_de_sonoros?: StringFieldUpdateOperationsInput | string
    modulo_luminosos_sonoros?: StringFieldUpdateOperationsInput | string
    torreta?: StringFieldUpdateOperationsInput | string
    cinturones_de_seguridad?: StringFieldUpdateOperationsInput | string
    limpia_parabrisas?: StringFieldUpdateOperationsInput | string
    poliza_seguro?: StringFieldUpdateOperationsInput | string
    tarjeta_circulacion?: StringFieldUpdateOperationsInput | string
    tapon_tanque_combustible?: StringFieldUpdateOperationsInput | string
    tapon_aceite?: StringFieldUpdateOperationsInput | string
    tapon_agua?: StringFieldUpdateOperationsInput | string
    nivel_aceite_motor?: StringFieldUpdateOperationsInput | string
    nivel_aceite_transmision?: StringFieldUpdateOperationsInput | string
    nivel_agua_radiador?: StringFieldUpdateOperationsInput | string
    nivel_liquido_frenos?: StringFieldUpdateOperationsInput | string
    llanta_delantera_derecha?: StringFieldUpdateOperationsInput | string
    llanta_delantera_izquierda?: StringFieldUpdateOperationsInput | string
    llanta_trasera_derecha?: StringFieldUpdateOperationsInput | string
    llanta_trasera_izquierda?: StringFieldUpdateOperationsInput | string
    llanta_repuesto?: StringFieldUpdateOperationsInput | string
    fecha_registro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    llaves_encendido?: StringFieldUpdateOperationsInput | string
    switch_encendido?: StringFieldUpdateOperationsInput | string
    bateria?: StringFieldUpdateOperationsInput | string
    postes_terminales_bateria?: StringFieldUpdateOperationsInput | string
  }

  export type work_forceUpdateWithoutVehiclesInput = {
    work_shift?: StringFieldUpdateOperationsInput | string
    id_drive?: NullableIntFieldUpdateOperationsInput | number | null
    id_persone_one?: IntFieldUpdateOperationsInput | number
    id_persone_two?: NullableIntFieldUpdateOperationsInput | number | null
    id_presone_trhee?: NullableIntFieldUpdateOperationsInput | number | null
    extras_persone?: NullableStringFieldUpdateOperationsInput | string | null
    date_work_shift?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    base?: baseUpdateOneWithoutWork_forceNestedInput
  }

  export type work_forceUncheckedUpdateWithoutVehiclesInput = {
    id?: IntFieldUpdateOperationsInput | number
    work_shift?: StringFieldUpdateOperationsInput | string
    id_base?: NullableIntFieldUpdateOperationsInput | number | null
    id_drive?: NullableIntFieldUpdateOperationsInput | number | null
    id_persone_one?: IntFieldUpdateOperationsInput | number
    id_persone_two?: NullableIntFieldUpdateOperationsInput | number | null
    id_presone_trhee?: NullableIntFieldUpdateOperationsInput | number | null
    extras_persone?: NullableStringFieldUpdateOperationsInput | string | null
    date_work_shift?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type work_forceUncheckedUpdateManyWithoutVehiclesInput = {
    id?: IntFieldUpdateOperationsInput | number
    work_shift?: StringFieldUpdateOperationsInput | string
    id_base?: NullableIntFieldUpdateOperationsInput | number | null
    id_drive?: NullableIntFieldUpdateOperationsInput | number | null
    id_persone_one?: IntFieldUpdateOperationsInput | number
    id_persone_two?: NullableIntFieldUpdateOperationsInput | number | null
    id_presone_trhee?: NullableIntFieldUpdateOperationsInput | number | null
    extras_persone?: NullableStringFieldUpdateOperationsInput | string | null
    date_work_shift?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}