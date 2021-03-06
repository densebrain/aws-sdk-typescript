// Type definitions for aws-sdk - Amazon DynamoDB
// Project: https://github.com/aws/aws-sdk-js
// Definitions by: https://github.com/ingenieux/aws-sdk-typescript
// GENERATED CODE - DO NOT EDIT

// COMMENTED <reference path="./aws-sdk.d.ts" />

declare module "aws-sdk" {

 /**
   * apiVersion: 2012-08-10
   * endpointPrefix: dynamodb
   * serviceAbbreviation: DynamoDB
   * signatureVersion: v4
   * protocol: json
   *
   * Amazon DynamoDBThis is the Amazon DynamoDB API Reference. This guide provides
descriptions of the low-level DynamoDB API.

This guide is intended for use with the following DynamoDB documentation:

 &amp;#42; Amazon DynamoDB Getting Started Guide
   [http://docs.aws.amazon.com/amazondynamodb/latest/gettingstartedguide/] -
   provides hands-on exercises that help you learn the basics of working with
   DynamoDB. If you are new to DynamoDB, we recommend that you begin with the
   Getting Started Guide.
   
   
 * Amazon DynamoDB Developer Guide
   [http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/] - contains
   detailed information about DynamoDB concepts, usage, and best practices.
   
   
 * Amazon DynamoDB Streams API Reference
   [http://docs.aws.amazon.com/dynamodbstreams/latest/APIReference/] - provides
   descriptions and samples of the DynamoDB Streams API. (For more information,
   see Capturing Table Activity with DynamoDB Streams
   [http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.html] 
   in the Amazon DynamoDB Developer Guide.)
   
   

Instead of making the requests to the low-level DynamoDB API directly from your
application, we recommend that you use the AWS Software Development Kits (SDKs).
The easy-to-use libraries in the AWS SDKs make it unnecessary to call the
low-level DynamoDB API directly from your application. The libraries take care
of request authentication, serialization, and connection management. For more
information, see Using the AWS SDKs with DynamoDB
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/UsingAWSSDK.html] 
in the Amazon DynamoDB Developer Guide.

If you decide to code against the low-level DynamoDB API directly, you will need
to write the necessary code to authenticate your requests. For more information
on signing your requests, see Using the DynamoDB API
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/API.html] in
the Amazon DynamoDB Developer Guide .

The following are short descriptions of each low-level API action, organized by
function.

Managing Tables

 * CreateTable - Creates a table with user-specified provisioned throughput
   settings. You must define a primary key for the table - either a simple
   primary key (partition key), or a composite primary key (partition key and
   sort key). Optionally, you can create one or more secondary indexes, which
   provide fast data access using non-key attributes.
   
   
 * DescribeTable - Returns metadata for a table, such as table size, status, and
   index information.
   
   
 * UpdateTable - Modifies the provisioned throughput settings for a table.
   Optionally, you can modify the provisioned throughput settings for global
   secondary indexes on the table.
   
   
 * ListTables - Returns a list of all tables associated with the current AWS
   account and endpoint.
   
   
 * DeleteTable - Deletes a table and all of its indexes.
   
   

For conceptual information about managing tables, see Working with Tables
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html] 
in the Amazon DynamoDB Developer Guide .

Reading Data

 * GetItem - Returns a set of attributes for the item that has a given primary
   key. By default, GetItem performs an eventually consistent read; however,
   applications can request a strongly consistent read instead.
   
   
 * BatchGetItem - Performs multiple GetItem requests for data items using their
   primary keys, from one table or multiple tables. The response from 
   BatchGetItem has a size limit of 16 MB and returns a maximum of 100 items.
   Both eventually consistent and strongly consistent reads can be used.
   
   
 * Query - Returns one or more items from a table or a secondary index. You must
   provide a specific value for the partition key. You can narrow the scope of
   the query using comparison operators against a sort key value, or on the
   index key. Query supports either eventual or strong consistency. A single
   response has a size limit of 1 MB.
   
   
 * Scan - Reads every item in a table; the result set is eventually consistent.
   You can limit the number of items returned by filtering the data attributes,
   using conditional expressions. Scan can be used to enable ad-hoc querying of
   a table against non-key attributes; however, since this is a full table scan
   without using an index, Scan should not be used for any application query use
   case that requires predictable performance.
   
   

For conceptual information about reading data, see Working with Items
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithItems.html] 
and Query and Scan Operations
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/QueryAndScan.html] 
in the Amazon DynamoDB Developer Guide .

Modifying Data

 * PutItem - Creates a new item, or replaces an existing item with a new item
   (including all the attributes). By default, if an item in the table already
   exists with the same primary key, the new item completely replaces the
   existing item. You can use conditional operators to replace an item only if
   its attribute values match certain conditions, or to insert a new item only
   if that item doesn&#x27;t already exist.
   
   
 * UpdateItem - Modifies the attributes of an existing item. You can also use
   conditional operators to perform an update only if the item&#x27;s attribute
   values match certain conditions.
   
   
 * DeleteItem - Deletes an item in a table by primary key. You can use
   conditional operators to perform a delete an item only if the item&#x27;s
   attribute values match certain conditions.
   
   
 * BatchWriteItem - Performs multiple PutItem and DeleteItem requests across
   multiple tables in a single request. A failure of any request(s) in the batch
   will not cause the entire BatchWriteItem operation to fail. Supports batches
   of up to 25 items to put or delete, with a maximum total request size of 16
   MB.
   
   

For conceptual information about modifying data, see Working with Items
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithItems.html] 
and Query and Scan Operations
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/QueryAndScan.html] 
in the Amazon DynamoDB Developer Guide .
   *
   */
  export class DynamoDB extends Service {
    constructor(options?: any);
    endpoint: Endpoint;
    /**
     * The BatchGetItem operation returns the attributes of one or more items from one
or more tables. You identify requested items by primary key.

A single operation can retrieve up to 16 MB of data, which can contain as many
as 100 items. BatchGetItem will return a partial result if the response size
limit is exceeded, the table&#x27;s provisioned throughput is exceeded, or an
internal processing failure occurs. If a partial result is returned, the
operation returns a value for UnprocessedKeys . You can use this value to retry
the operation starting with the next item to get.

If you request more than 100 items BatchGetItem will return a 
ValidationException with the message &quot;Too many items requested for the
BatchGetItem call&quot;.

For example, if you ask to retrieve 100 items, but each individual item is 300
KB in size, the system returns 52 items (so as not to exceed the 16 MB limit).
It also returns an appropriate UnprocessedKeys value so you can get the next
page of results. If desired, your application can include its own logic to
assemble the pages of results into one data set.

If none of the items can be processed due to insufficient provisioned throughput
on all of the tables in the request, then BatchGetItem will return a 
ProvisionedThroughputExceededException . If at least one of the items is
successfully processed, then BatchGetItem completes successfully, while
returning the keys of the unread items in UnprocessedKeys .

If DynamoDB returns any unprocessed items, you should retry the batch operation
on those items. However, we strongly recommend that you use an exponential
backoff algorithm . If you retry the batch operation immediately, the underlying
read or write requests can still fail due to throttling on the individual
tables. If you delay the batch operation using exponential backoff, the
individual requests in the batch are much more likely to succeed.

For more information, see Batch Operations and Error Handling
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ErrorHandling.html#BatchOperations] 
in the Amazon DynamoDB Developer Guide .

By default, BatchGetItem performs eventually consistent reads on every table in
the request. If you want strongly consistent reads instead, you can set 
ConsistentRead to true for any or all tables.

In order to minimize response latency, BatchGetItem retrieves items in parallel.

When designing your application, keep in mind that DynamoDB does not return
attributes in any particular order. To help parse the response by item, include
the primary key values for the items in your request in the AttributesToGet 
parameter.

If a requested item does not exist, it is not returned in the result. Requests
for nonexistent items consume the minimum read capacity units according to the
type of read. For more information, see Capacity Units Calculations
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html#CapacityUnitCalculations] 
in the Amazon DynamoDB Developer Guide .
     *
     * @error ProvisionedThroughputExceededException   
     * @error ResourceNotFoundException   
     * @error InternalServerError   
     */
    batchGetItem(params: DynamoDB.BatchGetItemInput, callback?: (err: DynamoDB.ProvisionedThroughputExceededException|DynamoDB.ResourceNotFoundException|DynamoDB.InternalServerError|any, data: DynamoDB.BatchGetItemOutput|any) => void): Request<DynamoDB.BatchGetItemOutput|any,DynamoDB.ProvisionedThroughputExceededException|DynamoDB.ResourceNotFoundException|DynamoDB.InternalServerError|any>;
    /**
     * The BatchWriteItem operation puts or deletes multiple items in one or more
tables. A single call to BatchWriteItem can write up to 16 MB of data, which can
comprise as many as 25 put or delete requests. Individual items to be written
can be as large as 400 KB.

BatchWriteItem cannot update items. To update items, use the UpdateItem API.

The individual PutItem and DeleteItem operations specified in BatchWriteItem are
atomic; however BatchWriteItem as a whole is not. If any requested operations
fail because the table&#x27;s provisioned throughput is exceeded or an internal
processing failure occurs, the failed operations are returned in the 
UnprocessedItems response parameter. You can investigate and optionally resend
the requests. Typically, you would call BatchWriteItem in a loop. Each iteration
would check for unprocessed items and submit a new BatchWriteItem request with
those unprocessed items until all items have been processed.

Note that if none of the items can be processed due to insufficient provisioned
throughput on all of the tables in the request, then BatchWriteItem will return
a ProvisionedThroughputExceededException .

If DynamoDB returns any unprocessed items, you should retry the batch operation
on those items. However, we strongly recommend that you use an exponential
backoff algorithm . If you retry the batch operation immediately, the underlying
read or write requests can still fail due to throttling on the individual
tables. If you delay the batch operation using exponential backoff, the
individual requests in the batch are much more likely to succeed.

For more information, see Batch Operations and Error Handling
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ErrorHandling.html#BatchOperations] 
in the Amazon DynamoDB Developer Guide .

With BatchWriteItem , you can efficiently write or delete large amounts of data,
such as from Amazon Elastic MapReduce (EMR), or copy data from another database
into DynamoDB. In order to improve performance with these large-scale
operations, BatchWriteItem does not behave in the same way as individual PutItem 
and DeleteItem calls would. For example, you cannot specify conditions on
individual put and delete requests, and BatchWriteItem does not return deleted
items in the response.

If you use a programming language that supports concurrency, you can use threads
to write items in parallel. Your application must include the necessary logic to
manage the threads. With languages that don&#x27;t support threading, you must update
or delete the specified items one at a time. In both situations, BatchWriteItem 
provides an alternative where the API performs the specified put and delete
operations in parallel, giving you the power of the thread pool approach without
having to introduce complexity into your application.

Parallel processing reduces latency, but each specified put and delete request
consumes the same number of write capacity units whether it is processed in
parallel or not. Delete operations on nonexistent items consume one write
capacity unit.

If one or more of the following is true, DynamoDB rejects the entire batch write
operation:

 &amp;#42; One or more tables specified in the BatchWriteItem request does not exist.
   
   
 * Primary key attributes specified on an item in the request do not match those
   in the corresponding table&#x27;s primary key schema.
   
   
 * You try to perform multiple operations on the same item in the same 
   BatchWriteItem request. For example, you cannot put and delete the same item
   in the same BatchWriteItem request.
   
   
 * There are more than 25 requests in the batch.
   
   
 * Any individual item in a batch exceeds 400 KB.
   
   
 * The total request size exceeds 16 MB.
     *
     * @error ProvisionedThroughputExceededException   
     * @error ResourceNotFoundException   
     * @error ItemCollectionSizeLimitExceededException   
     * @error InternalServerError   
     */
    batchWriteItem(params: DynamoDB.BatchWriteItemInput, callback?: (err: DynamoDB.ProvisionedThroughputExceededException|DynamoDB.ResourceNotFoundException|DynamoDB.ItemCollectionSizeLimitExceededException|DynamoDB.InternalServerError|any, data: DynamoDB.BatchWriteItemOutput|any) => void): Request<DynamoDB.BatchWriteItemOutput|any,DynamoDB.ProvisionedThroughputExceededException|DynamoDB.ResourceNotFoundException|DynamoDB.ItemCollectionSizeLimitExceededException|DynamoDB.InternalServerError|any>;
    /**
     * The CreateTable operation adds a new table to your account. In an AWS account,
table names must be unique within each region. That is, you can have two tables
with same name if you create the tables in different regions.

CreateTable is an asynchronous operation. Upon receiving a CreateTable request,
DynamoDB immediately returns a response with a TableStatus of CREATING . After
the table is created, DynamoDB sets the TableStatus to ACTIVE . You can perform
read and write operations only on an ACTIVE table.

You can optionally define secondary indexes on the new table, as part of the 
CreateTable operation. If you want to create multiple tables with secondary
indexes on them, you must create the tables sequentially. Only one table with
secondary indexes can be in the CREATING state at any given time.

You can use the DescribeTable API to check the table status.
     *
     * @error ResourceInUseException   
     * @error LimitExceededException   
     * @error InternalServerError   
     */
    createTable(params: DynamoDB.CreateTableInput, callback?: (err: DynamoDB.ResourceInUseException|DynamoDB.LimitExceededException|DynamoDB.InternalServerError|any, data: DynamoDB.CreateTableOutput|any) => void): Request<DynamoDB.CreateTableOutput|any,DynamoDB.ResourceInUseException|DynamoDB.LimitExceededException|DynamoDB.InternalServerError|any>;
    /**
     * Deletes a single item in a table by primary key. You can perform a conditional
delete operation that deletes the item if it exists, or if it has an expected
attribute value.

In addition to deleting an item, you can also return the item&#x27;s attribute values
in the same operation, using the ReturnValues parameter.

Unless you specify conditions, the DeleteItem is an idempotent operation;
running it multiple times on the same item or attribute does not result in an
error response.

Conditional deletes are useful for deleting items only if specific conditions
are met. If those conditions are met, DynamoDB performs the delete. Otherwise,
the item is not deleted.
     *
     * @error ConditionalCheckFailedException   
     * @error ProvisionedThroughputExceededException   
     * @error ResourceNotFoundException   
     * @error ItemCollectionSizeLimitExceededException   
     * @error InternalServerError   
     */
    deleteItem(params: DynamoDB.DeleteItemInput, callback?: (err: DynamoDB.ConditionalCheckFailedException|DynamoDB.ProvisionedThroughputExceededException|DynamoDB.ResourceNotFoundException|DynamoDB.ItemCollectionSizeLimitExceededException|DynamoDB.InternalServerError|any, data: DynamoDB.DeleteItemOutput|any) => void): Request<DynamoDB.DeleteItemOutput|any,DynamoDB.ConditionalCheckFailedException|DynamoDB.ProvisionedThroughputExceededException|DynamoDB.ResourceNotFoundException|DynamoDB.ItemCollectionSizeLimitExceededException|DynamoDB.InternalServerError|any>;
    /**
     * The DeleteTable operation deletes a table and all of its items. After a 
DeleteTable request, the specified table is in the DELETING state until DynamoDB
completes the deletion. If the table is in the ACTIVE state, you can delete it.
If a table is in CREATING or UPDATING states, then DynamoDB returns a 
ResourceInUseException . If the specified table does not exist, DynamoDB returns
a ResourceNotFoundException . If table is already in the DELETING state, no
error is returned.

DynamoDB might continue to accept data read and write operations, such as 
GetItem and PutItem , on a table in the DELETING state until the table deletion
is complete.

When you delete a table, any indexes on that table are also deleted.

If you have DynamoDB Streams enabled on the table, then the corresponding stream
on that table goes into the DISABLED state, and the stream is automatically
deleted after 24 hours.

Use the DescribeTable API to check the status of the table.
     *
     * @error ResourceInUseException   
     * @error ResourceNotFoundException   
     * @error LimitExceededException   
     * @error InternalServerError   
     */
    deleteTable(params: DynamoDB.DeleteTableInput, callback?: (err: DynamoDB.ResourceInUseException|DynamoDB.ResourceNotFoundException|DynamoDB.LimitExceededException|DynamoDB.InternalServerError|any, data: DynamoDB.DeleteTableOutput|any) => void): Request<DynamoDB.DeleteTableOutput|any,DynamoDB.ResourceInUseException|DynamoDB.ResourceNotFoundException|DynamoDB.LimitExceededException|DynamoDB.InternalServerError|any>;
    /**
     * Returns the current provisioned-capacity limits for your AWS account in a
region, both for the region as a whole and for any one DynamoDB table that you
create there.

When you establish an AWS account, the account has initial limits on the maximum
read capacity units and write capacity units that you can provision across all
of your DynamoDB tables in a given region. Also, there are per-table limits that
apply when you create a table there. For more information, see Limits
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html] 
page in the Amazon DynamoDB Developer Guide .

Although you can increase these limits by filing a case at AWS Support Center
[https://console.aws.amazon.com/support/home#/] , obtaining the increase is not
instantaneous. The DescribeLimits API lets you write code to compare the
capacity you are currently using to those limits imposed by your account so that
you have enough time to apply for an increase before you hit a limit.

For example, you could use one of the AWS SDKs to do the following:

 1. Call DescribeLimits for a particular region to obtain your current account
    limits on provisioned capacity there.
 2. Create a variable to hold the aggregate read capacity units provisioned for
    all your tables in that region, and one to hold the aggregate write capacity
    units. Zero them both.
 3. Call ListTables to obtain a list of all your DynamoDB tables.
 4. For each table name listed by ListTables , do the following:
    
     &amp;#42; Call DescribeTable with the table name.
     * Use the data returned by DescribeTable to add the read capacity units and
       write capacity units provisioned for the table itself to your variables.
     * If the table has one or more global secondary indexes (GSIs), loop over
       these GSIs and add their provisioned capacity values to your variables as
       well.
    
    
 5. Report the account limits for that region returned by DescribeLimits , along
    with the total current provisioned capacity levels you have calculated.

This will let you see whether you are getting close to your account-level
limits.

The per-table limits apply only when you are creating a new table. They restrict
the sum of the provisioned capacity of the new table itself and all its global
secondary indexes.

For existing tables and their GSIs, DynamoDB will not let you increase
provisioned capacity extremely rapidly, but the only upper limit that applies is
that the aggregate provisioned capacity over all your tables and GSIs cannot
exceed either of the per-account limits.

DescribeLimits should only be called periodically. You can expect throttling
errors if you call it more than once in a minute.

The DescribeLimits Request element has no content.
     *
     * @error InternalServerError   
     */
    describeLimits(params: DynamoDB.DescribeLimitsInput, callback?: (err: DynamoDB.InternalServerError|any, data: DynamoDB.DescribeLimitsOutput|any) => void): Request<DynamoDB.DescribeLimitsOutput|any,DynamoDB.InternalServerError|any>;
    /**
     * Returns information about the table, including the current status of the table,
when it was created, the primary key schema, and any indexes on the table.

If you issue a DescribeTable request immediately after a CreateTable request,
DynamoDB might return a ResourceNotFoundException . This is because 
DescribeTable uses an eventually consistent query, and the metadata for your
table might not be available at that moment. Wait for a few seconds, and then
try the DescribeTable request again.
     *
     * @error ResourceNotFoundException   
     * @error InternalServerError   
     */
    describeTable(params: DynamoDB.DescribeTableInput, callback?: (err: DynamoDB.ResourceNotFoundException|DynamoDB.InternalServerError|any, data: DynamoDB.DescribeTableOutput|any) => void): Request<DynamoDB.DescribeTableOutput|any,DynamoDB.ResourceNotFoundException|DynamoDB.InternalServerError|any>;
    /**
     * The GetItem operation returns a set of attributes for the item with the given
primary key. If there is no matching item, GetItem does not return any data.

GetItem provides an eventually consistent read by default. If your application
requires a strongly consistent read, set ConsistentRead to true . Although a
strongly consistent read might take more time than an eventually consistent
read, it always returns the last updated value.
     *
     * @error ProvisionedThroughputExceededException   
     * @error ResourceNotFoundException   
     * @error InternalServerError   
     */
    getItem(params: DynamoDB.GetItemInput, callback?: (err: DynamoDB.ProvisionedThroughputExceededException|DynamoDB.ResourceNotFoundException|DynamoDB.InternalServerError|any, data: DynamoDB.GetItemOutput|any) => void): Request<DynamoDB.GetItemOutput|any,DynamoDB.ProvisionedThroughputExceededException|DynamoDB.ResourceNotFoundException|DynamoDB.InternalServerError|any>;
    /**
     * Returns an array of table names associated with the current account and
endpoint. The output from ListTables is paginated, with each page returning a
maximum of 100 table names.
     *
     * @error InternalServerError   
     */
    listTables(params: DynamoDB.ListTablesInput, callback?: (err: DynamoDB.InternalServerError|any, data: DynamoDB.ListTablesOutput|any) => void): Request<DynamoDB.ListTablesOutput|any,DynamoDB.InternalServerError|any>;
    /**
     * Creates a new item, or replaces an old item with a new item. If an item that has
the same primary key as the new item already exists in the specified table, the
new item completely replaces the existing item. You can perform a conditional
put operation (add a new item if one with the specified primary key doesn&#x27;t
exist), or replace an existing item if it has certain attribute values.

In addition to putting an item, you can also return the item&#x27;s attribute values
in the same operation, using the ReturnValues parameter.

When you add an item, the primary key attribute(s) are the only required
attributes. Attribute values cannot be null. String and Binary type attributes
must have lengths greater than zero. Set type attributes cannot be empty.
Requests with empty values will be rejected with a ValidationException 
exception.

You can request that PutItem return either a copy of the original item (before
the update) or a copy of the updated item (after the update). For more
information, see the ReturnValues description below.

To prevent a new item from replacing an existing item, use a conditional
expression that contains the attribute_not_exists function with the name of the
attribute being used as the partition key for the table. Since every record must
contain that attribute, the attribute_not_exists function will only succeed if
no matching item exists.

For more information about using this API, see Working with Items
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithItems.html] 
in the Amazon DynamoDB Developer Guide .
     *
     * @error ConditionalCheckFailedException   
     * @error ProvisionedThroughputExceededException   
     * @error ResourceNotFoundException   
     * @error ItemCollectionSizeLimitExceededException   
     * @error InternalServerError   
     */
    putItem(params: DynamoDB.PutItemInput, callback?: (err: DynamoDB.ConditionalCheckFailedException|DynamoDB.ProvisionedThroughputExceededException|DynamoDB.ResourceNotFoundException|DynamoDB.ItemCollectionSizeLimitExceededException|DynamoDB.InternalServerError|any, data: DynamoDB.PutItemOutput|any) => void): Request<DynamoDB.PutItemOutput|any,DynamoDB.ConditionalCheckFailedException|DynamoDB.ProvisionedThroughputExceededException|DynamoDB.ResourceNotFoundException|DynamoDB.ItemCollectionSizeLimitExceededException|DynamoDB.InternalServerError|any>;
    /**
     * A Query operation uses the primary key of a table or a secondary index to
directly access items from that table or index.

Use the KeyConditionExpression parameter to provide a specific value for the
partition key. The Query operation will return all of the items from the table
or index with that partition key value. You can optionally narrow the scope of
the Query operation by specifying a sort key value and a comparison operator in 
KeyConditionExpression . You can use the ScanIndexForward parameter to get
results in forward or reverse order, by sort key.

Queries that do not return results consume the minimum number of read capacity
units for that type of read operation.

If the total number of items meeting the query criteria exceeds the result set
size limit of 1 MB, the query stops and results are returned to the user with
the LastEvaluatedKey element to continue the query in a subsequent operation.
Unlike a Scan operation, a Query operation never returns both an empty result
set and a LastEvaluatedKey value. LastEvaluatedKey is only provided if the
results exceed 1 MB, or if you have used the Limit parameter.

You can query a table, a local secondary index, or a global secondary index. For
a query on a table or on a local secondary index, you can set the ConsistentRead 
parameter to true and obtain a strongly consistent result. Global secondary
indexes support eventually consistent reads only, so do not specify 
ConsistentRead when querying a global secondary index.
     *
     * @error ProvisionedThroughputExceededException   
     * @error ResourceNotFoundException   
     * @error InternalServerError   
     */
    query(params: DynamoDB.QueryInput, callback?: (err: DynamoDB.ProvisionedThroughputExceededException|DynamoDB.ResourceNotFoundException|DynamoDB.InternalServerError|any, data: DynamoDB.QueryOutput|any) => void): Request<DynamoDB.QueryOutput|any,DynamoDB.ProvisionedThroughputExceededException|DynamoDB.ResourceNotFoundException|DynamoDB.InternalServerError|any>;
    /**
     * The Scan operation returns one or more items and item attributes by accessing
every item in a table or a secondary index. To have DynamoDB return fewer items,
you can provide a ScanFilter operation.

If the total number of scanned items exceeds the maximum data set size limit of
1 MB, the scan stops and results are returned to the user as a LastEvaluatedKey 
value to continue the scan in a subsequent operation. The results also include
the number of items exceeding the limit. A scan can result in no table data
meeting the filter criteria.

By default, Scan operations proceed sequentially; however, for faster
performance on a large table or secondary index, applications can request a
parallel Scan operation by providing the Segment and TotalSegments parameters.
For more information, see Parallel Scan
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/QueryAndScan.html#QueryAndScanParallelScan] 
in the Amazon DynamoDB Developer Guide .

By default, Scan uses eventually consistent reads when accessing the data in a
table; therefore, the result set might not include the changes to data in the
table immediately before the operation began. If you need a consistent copy of
the data, as of the time that the Scan begins, you can set the ConsistentRead 
parameter to true .
     *
     * @error ProvisionedThroughputExceededException   
     * @error ResourceNotFoundException   
     * @error InternalServerError   
     */
    scan(params: DynamoDB.ScanInput, callback?: (err: DynamoDB.ProvisionedThroughputExceededException|DynamoDB.ResourceNotFoundException|DynamoDB.InternalServerError|any, data: DynamoDB.ScanOutput|any) => void): Request<DynamoDB.ScanOutput|any,DynamoDB.ProvisionedThroughputExceededException|DynamoDB.ResourceNotFoundException|DynamoDB.InternalServerError|any>;
    /**
     * Edits an existing item&#x27;s attributes, or adds a new item to the table if it does
not already exist. You can put, delete, or add attribute values. You can also
perform a conditional update on an existing item (insert a new attribute
name-value pair if it doesn&#x27;t exist, or replace an existing name-value pair if
it has certain expected attribute values).

You can also return the item&#x27;s attribute values in the same UpdateItem operation
using the ReturnValues parameter.
     *
     * @error ConditionalCheckFailedException   
     * @error ProvisionedThroughputExceededException   
     * @error ResourceNotFoundException   
     * @error ItemCollectionSizeLimitExceededException   
     * @error InternalServerError   
     */
    updateItem(params: DynamoDB.UpdateItemInput, callback?: (err: DynamoDB.ConditionalCheckFailedException|DynamoDB.ProvisionedThroughputExceededException|DynamoDB.ResourceNotFoundException|DynamoDB.ItemCollectionSizeLimitExceededException|DynamoDB.InternalServerError|any, data: DynamoDB.UpdateItemOutput|any) => void): Request<DynamoDB.UpdateItemOutput|any,DynamoDB.ConditionalCheckFailedException|DynamoDB.ProvisionedThroughputExceededException|DynamoDB.ResourceNotFoundException|DynamoDB.ItemCollectionSizeLimitExceededException|DynamoDB.InternalServerError|any>;
    /**
     * Modifies the provisioned throughput settings, global secondary indexes, or
DynamoDB Streams settings for a given table.

You can only perform one of the following operations at once:

 &amp;#42; Modify the provisioned throughput settings of the table.
   
   
 * Enable or disable Streams on the table.
   
   
 * Remove a global secondary index from the table.
   
   
 * Create a new global secondary index on the table. Once the index begins
   backfilling, you can use UpdateTable to perform other operations.
   
   

UpdateTable is an asynchronous operation; while it is executing, the table
status changes from ACTIVE to UPDATING . While it is UPDATING , you cannot issue
another UpdateTable request. When the table returns to the ACTIVE state, the 
UpdateTable operation is complete.
     *
     * @error ResourceInUseException   
     * @error ResourceNotFoundException   
     * @error LimitExceededException   
     * @error InternalServerError   
     */
    updateTable(params: DynamoDB.UpdateTableInput, callback?: (err: DynamoDB.ResourceInUseException|DynamoDB.ResourceNotFoundException|DynamoDB.LimitExceededException|DynamoDB.InternalServerError|any, data: DynamoDB.UpdateTableOutput|any) => void): Request<DynamoDB.UpdateTableOutput|any,DynamoDB.ResourceInUseException|DynamoDB.ResourceNotFoundException|DynamoDB.LimitExceededException|DynamoDB.InternalServerError|any>;

  }

  export module DynamoDB {
    
    export type AttributeAction = string;
    
    export type AttributeDefinitions = AttributeDefinition[];
    
    export type AttributeMap = {[key:string]: AttributeValue};
    
    export type AttributeName = string;
    
    export type AttributeNameList = AttributeName[];
    
    export type AttributeUpdates = {[key:string]: AttributeValueUpdate};
    
    export type AttributeValueList = AttributeValue[];
    
    export type Backfilling = boolean;
    
    export type BatchGetRequestMap = {[key:string]: KeysAndAttributes};
    
    export type BatchGetResponseMap = {[key:string]: ItemList};
    
    export type BatchWriteItemRequestMap = {[key:string]: WriteRequests};
    
    export type BinaryAttributeValue = any;
    
    export type BinarySetAttributeValue = BinaryAttributeValue[];
    
    export type BooleanAttributeValue = boolean;
    
    export type BooleanObject = boolean;
    
    export type ComparisonOperator = string;
    
    export type ConditionExpression = string;
    
    export type ConditionalOperator = string;
    
    export type ConsistentRead = boolean;
    
    export type ConsumedCapacityMultiple = ConsumedCapacity[];
    
    export type ConsumedCapacityUnits = number;
    
    export type Date = number;
    
    export type ErrorMessage = string;
    
    export type ExpectedAttributeMap = {[key:string]: ExpectedAttributeValue};
    
    export type ExpressionAttributeNameMap = {[key:string]: AttributeName};
    
    export type ExpressionAttributeNameVariable = string;
    
    export type ExpressionAttributeValueMap = {[key:string]: AttributeValue};
    
    export type ExpressionAttributeValueVariable = string;
    
    export type FilterConditionMap = {[key:string]: Condition};
    
    export type GlobalSecondaryIndexDescriptionList = GlobalSecondaryIndexDescription[];
    
    export type GlobalSecondaryIndexList = GlobalSecondaryIndex[];
    
    export type GlobalSecondaryIndexUpdateList = GlobalSecondaryIndexUpdate[];
    
    export type IndexName = string;
    
    export type IndexStatus = string;
    
    export type Integer = number;
    
    export type ItemCollectionKeyAttributeMap = {[key:string]: AttributeValue};
    
    export type ItemCollectionMetricsMultiple = ItemCollectionMetrics[];
    
    export type ItemCollectionMetricsPerTable = {[key:string]: ItemCollectionMetricsMultiple};
    
    export type ItemCollectionSizeEstimateBound = number;
    
    export type ItemCollectionSizeEstimateRange = ItemCollectionSizeEstimateBound[];
    
    export type ItemList = AttributeMap[];
    
    export type Key = {[key:string]: AttributeValue};
    
    export type KeyConditions = {[key:string]: Condition};
    
    export type KeyExpression = string;
    
    export type KeyList = Key[];
    
    export type KeySchema = KeySchemaElement[];
    
    export type KeySchemaAttributeName = string;
    
    export type KeyType = string;
    
    export type ListAttributeValue = AttributeValue[];
    
    export type ListTablesInputLimit = number;
    
    export type LocalSecondaryIndexDescriptionList = LocalSecondaryIndexDescription[];
    
    export type LocalSecondaryIndexList = LocalSecondaryIndex[];
    
    export type Long = number;
    
    export type MapAttributeValue = {[key:string]: AttributeValue};
    
    export type NonKeyAttributeName = string;
    
    export type NonKeyAttributeNameList = NonKeyAttributeName[];
    
    export type NullAttributeValue = boolean;
    
    export type NumberAttributeValue = string;
    
    export type NumberSetAttributeValue = NumberAttributeValue[];
    
    export type PositiveIntegerObject = number;
    
    export type PositiveLongObject = number;
    
    export type ProjectionExpression = string;
    
    export type ProjectionType = string;
    
    export type PutItemInputAttributeMap = {[key:string]: AttributeValue};
    
    export type ReturnConsumedCapacity = string;
    
    export type ReturnItemCollectionMetrics = string;
    
    export type ReturnValue = string;
    
    export type ScalarAttributeType = string;
    
    export type ScanSegment = number;
    
    export type ScanTotalSegments = number;
    
    export type SecondaryIndexesCapacityMap = {[key:string]: Capacity};
    
    export type Select = string;
    
    export type StreamArn = string;
    
    export type StreamEnabled = boolean;
    
    export type StreamViewType = string;
    
    export type String = string;
    
    export type StringAttributeValue = string;
    
    export type StringSetAttributeValue = StringAttributeValue[];
    
    export type TableName = string;
    
    export type TableNameList = TableName[];
    
    export type TableStatus = string;
    
    export type UpdateExpression = string;
    
    export type WriteRequests = WriteRequest[];

    export interface AttributeDefinition {
        /** A name for the attribute. **/
        AttributeName: KeySchemaAttributeName;
        /** The data type for the attribute, where:

 &amp;#42; S - the attribute is of type String
 * N - the attribute is of type Number
 * B - the attribute is of type Binary **/
        AttributeType: ScalarAttributeType;
    }
    export interface AttributeValue {
        /** A String data type. **/
        S?: StringAttributeValue;
        /** A Number data type. **/
        N?: NumberAttributeValue;
        /** A Binary data type. **/
        B?: BinaryAttributeValue;
        /** A String Set data type. **/
        SS?: StringSetAttributeValue;
        /** A Number Set data type. **/
        NS?: NumberSetAttributeValue;
        /** A Binary Set data type. **/
        BS?: BinarySetAttributeValue;
        /** A Map of attribute values. **/
        M?: MapAttributeValue;
        /** A List of attribute values. **/
        L?: ListAttributeValue;
        /** A Null data type. **/
        NULL?: NullAttributeValue;
        /** A Boolean data type. **/
        BOOL?: BooleanAttributeValue;
    }
    export interface AttributeValueUpdate {
        Value?: AttributeValue;
        /** Specifies how to perform the update. Valid values are PUT (default), DELETE ,
and ADD . The behavior depends on whether the specified primary key already
exists in the table.

If an item with the specified Key is found in the table:

 &amp;#42; PUT - Adds the specified attribute to the item. If the attribute already
   exists, it is replaced by the new value.
   
   
 * DELETE - If no value is specified, the attribute and its value are removed
   from the item. The data type of the specified value must match the existing
   value&#x27;s data type.
   
   If a set of values is specified, then those values are subtracted from the
   old set. For example, if the attribute value was the set [a,b,c] and the 
   DELETE action specified [a,c] , then the final attribute value would be [b] .
   Specifying an empty set is an error.
   
   
 * ADD - If the attribute does not already exist, then the attribute and its
   values are added to the item. If the attribute does exist, then the behavior
   of ADD depends on the data type of the attribute:
   
    * If the existing attribute is a number, and if Value is also a number, then
      the Value is mathematically added to the existing attribute. If Value is a
      negative number, then it is subtracted from the existing attribute.
      
      If you use ADD to increment or decrement a number value for an item that
      doesn&#x27;t exist before the update, DynamoDB uses 0 as the initial value.
      
      In addition, if you use ADD to update an existing item, and intend to
      increment or decrement an attribute value which does not yet exist,
      DynamoDB uses 0 as the initial value. For example, suppose that the item
      you want to update does not yet have an attribute named itemcount , but
      you decide to ADD the number 3 to this attribute anyway, even though it
      currently does not exist. DynamoDB will create the itemcount attribute,
      set its initial value to 0 , and finally add 3 to it. The result will be a
      new itemcount attribute in the item, with a value of 3 .
      
      
    * If the existing data type is a set, and if the Value is also a set, then
      the Value is added to the existing set. (This is a set operation, not
      mathematical addition.) For example, if the attribute value was the set 
      [1,2] , and the ADD action specified [3] , then the final attribute value
      would be [1,2,3] . An error occurs if an Add action is specified for a set
      attribute and the attribute type specified does not match the existing set
      type.
      
      Both sets must have the same primitive data type. For example, if the
      existing data type is a set of strings, the Value must also be a set of
      strings. The same holds true for number sets and binary sets.
      
      
   
   This action is only valid for an existing attribute whose data type is number
   or is a set. Do not use ADD for any other data types.
   
   

If no item with the specified Key is found:

 * PUT - DynamoDB creates a new item with the specified primary key, and then
   adds the attribute.
   
   
 * DELETE - Nothing happens; there is no attribute to delete.
   
   
 * ADD - DynamoDB creates an item with the supplied primary key and number (or
   set of numbers) for the attribute value. The only data types allowed are
   number and number set; no other data types can be specified. **/
        Action?: AttributeAction;
    }
    export interface BatchGetItemInput {
        /** A map of one or more table names and, for each table, a map that describes one
or more items to retrieve from that table. Each table name can be used only once
per BatchGetItem request.

Each element in the map of items to retrieve consists of the following:

 &amp;#42; ConsistentRead - If true , a strongly consistent read is used; if false (the
   default), an eventually consistent read is used.
   
   
 * ExpressionAttributeNames - One or more substitution tokens for attribute
   names in the ProjectionExpression parameter. The following are some use cases
   for using ExpressionAttributeNames :
   
    * To access an attribute whose name conflicts with a DynamoDB reserved word.
      
      
    * To create a placeholder for repeating occurrences of an attribute name in
      an expression.
      
      
    * To prevent special characters in an attribute name from being
      misinterpreted in an expression.
      
      
   
   Use the # character in an expression to dereference an attribute name. For
   example, consider the following attribute name:
   
    * Percentile
      
      
   
   The name of this attribute conflicts with a reserved word, so it cannot be
   used directly in an expression. (For the complete list of reserved words, see 
   Reserved Words
   [http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html] 
   in the Amazon DynamoDB Developer Guide ). To work around this, you could
   specify the following for ExpressionAttributeNames :
   
    * {&quot;#P&quot;:&quot;Percentile&quot;}
      
      
   
   You could then use this substitution in an expression, as in this example:
   
    * #P = :val
      
      
   
   Tokens that begin with the : character are expression attribute values ,
   which are placeholders for the actual value at runtime.
   
   For more information on expression attribute names, see Accessing Item
   Attributes
   [http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html] 
   in the Amazon DynamoDB Developer Guide .
   
   
 * Keys - An array of primary key attribute values that define specific items in
   the table. For each primary key, you must provide all of the key attributes.
   For example, with a simple primary key, you only need to provide the
   partition key value. For a composite key, you must provide both the partition
   key value and the sort key value.
   
   
 * ProjectionExpression - A string that identifies one or more attributes to
   retrieve from the table. These attributes can include scalars, sets, or
   elements of a JSON document. The attributes in the expression must be
   separated by commas.
   
   If no attribute names are specified, then all attributes will be returned. If
   any of the requested attributes are not found, they will not appear in the
   result.
   
   For more information, see Accessing Item Attributes
   [http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html] 
   in the Amazon DynamoDB Developer Guide .
   
   
 * AttributesToGet -
   
   This is a legacy parameter, for backward compatibility. New applications
   should use ProjectionExpression instead. Do not combine legacy parameters and
   expression parameters in a single API call; otherwise, DynamoDB will return a 
   ValidationException exception.
   
   This parameter allows you to retrieve attributes of type List or Map;
   however, it cannot retrieve individual elements within a List or a Map.
   
   The names of one or more attributes to retrieve. If no attribute names are
   provided, then all attributes will be returned. If any of the requested
   attributes are not found, they will not appear in the result.
   
   Note that AttributesToGet has no effect on provisioned throughput
   consumption. DynamoDB determines capacity units consumed based on item size,
   not on the amount of data that is returned to an application. **/
        RequestItems: BatchGetRequestMap;
        ReturnConsumedCapacity?: ReturnConsumedCapacity;
    }
    export interface BatchGetItemOutput {
        /** A map of table name to a list of items. Each object in Responses consists of a
table name, along with a map of attribute data consisting of the data type and
attribute value. **/
        Responses?: BatchGetResponseMap;
        /** A map of tables and their respective keys that were not processed with the
current response. The UnprocessedKeys value is in the same form as RequestItems 
, so the value can be provided directly to a subsequent BatchGetItem operation.
For more information, see RequestItems in the Request Parameters section.

Each element consists of:

 &amp;#42; Keys - An array of primary key attribute values that define specific items in
   the table.
   
   
 * AttributesToGet - One or more attributes to be retrieved from the table or
   index. By default, all attributes are returned. If a requested attribute is
   not found, it does not appear in the result.
   
   
 * ConsistentRead - The consistency of a read operation. If set to true , then a
   strongly consistent read is used; otherwise, an eventually consistent read is
   used.
   
   

If there are no unprocessed keys remaining, the response contains an empty 
UnprocessedKeys map. **/
        UnprocessedKeys?: BatchGetRequestMap;
        /** The read capacity units consumed by the operation.

Each element consists of:

 &amp;#42; TableName - The table that consumed the provisioned throughput.
   
   
 * CapacityUnits - The total number of capacity units consumed. **/
        ConsumedCapacity?: ConsumedCapacityMultiple;
    }
    export interface BatchWriteItemInput {
        /** A map of one or more table names and, for each table, a list of operations to be
performed ( DeleteRequest or PutRequest ). Each element in the map consists of
the following:

 &amp;#42; DeleteRequest - Perform a DeleteItem operation on the specified item. The
   item to be deleted is identified by a Key subelement:
   
    * Key - A map of primary key attribute values that uniquely identify the !
      item. Each entry in this map consists of an attribute name and an
      attribute value. For each primary key, you must provide all of the key
      attributes. For example, with a simple primary key, you only need to
      provide a value for the partition key. For a composite primary key, you
      must provide values for both the partition key and the sort key.
      
      
   
   
 * PutRequest - Perform a PutItem operation on the specified item. The item to
   be put is identified by an Item subelement:
   
    * Item - A map of attributes and their values. Each entry in this map
      consists of an attribute name and an attribute value. Attribute values
      must not be null; string and binary type attributes must have lengths
      greater than zero; and set type attributes must not be empty. Requests
      that contain empty values will be rejected with a ValidationException 
      exception.
      
      If you specify any attributes that are part of an index key, then the data
      types for those attributes must match those of the schema in the table&#x27;s
      attribute definition. **/
        RequestItems: BatchWriteItemRequestMap;
        ReturnConsumedCapacity?: ReturnConsumedCapacity;
        /** Determines whether item collection metrics are returned. If set to SIZE , the
response includes statistics about item collections, if any, that were modified
during the operation are returned in the response. If set to NONE (the default),
no statistics are returned. **/
        ReturnItemCollectionMetrics?: ReturnItemCollectionMetrics;
    }
    export interface BatchWriteItemOutput {
        /** A map of tables and requests against those tables that were not processed. The 
UnprocessedItems value is in the same form as RequestItems , so you can provide
this value directly to a subsequent BatchGetItem operation. For more
information, see RequestItems in the Request Parameters section.

Each UnprocessedItems entry consists of a table name and, for that table, a list
of operations to perform ( DeleteRequest or PutRequest ).

 &amp;#42; DeleteRequest - Perform a DeleteItem operation on the specified item. The
   item to be deleted is identified by a Key subelement:
   
    * Key - A map of primary key attribute values that uniquely identify the
      item. Each entry in this map consists of an attribute name and an
      attribute value.
      
      
   
   
 * PutRequest - Perform a PutItem operation on the specified item. The item to
   be put is identified by an Item subelement:
   
    * Item - A map of attributes and their values. Each entry in this map
      consists of an attribute name and an attribute value. Attribute values
      must not be null; string and binary type attributes must have lengths
      greater than zero; and set type attributes must not be empty. Requests
      that contain empty values will be rejected with a ValidationException 
      exception.
      
      If you specify any attributes that are part of an index key, then the data
      types for those attributes must match those of the schema in the table&#x27;s
      attribute definition.
      
      
   
   

If there are no unprocessed items remaining, the response contains an empty 
UnprocessedItems map. **/
        UnprocessedItems?: BatchWriteItemRequestMap;
        /** A list of tables that were processed by BatchWriteItem and, for each table,
information about any item collections that were affected by individual 
DeleteItem or PutItem operations.

Each entry consists of the following subelements:

 &amp;#42; ItemCollectionKey - The partition key value of the item collection. This is
   the same as the partition key value of the item.
   
   
 * SizeEstimateRange - An estimate of item collection size, expressed in GB.
   This is a two-element array containing a lower bound and an upper bound for
   the estimate. The estimate includes the size of all the items in the table,
   plus the size of all attributes projected into all of the local secondary
   indexes on the table. Use this estimate to measure whether a local secondary
   index is approaching its size limit.
   
   The estimate is subject to change over time; therefore, do not rely on the
   precision or accuracy of the estimate. **/
        ItemCollectionMetrics?: ItemCollectionMetricsPerTable;
        /** The capacity units consumed by the operation.

Each element consists of:

 &amp;#42; TableName - The table that consumed the provisioned throughput.
   
   
 * CapacityUnits - The total number of capacity units consumed. **/
        ConsumedCapacity?: ConsumedCapacityMultiple;
    }
    export interface Capacity {
        /** The total number of capacity units consumed on a table or an index. **/
        CapacityUnits?: ConsumedCapacityUnits;
    }
    export interface Condition {
        /** One or more values to evaluate against the supplied attribute. The number of
values in the list depends on the ComparisonOperator being used.

For type Number, value comparisons are numeric.

String value comparisons for greater than, equals, or less than are based on
ASCII character code values. For example, a is greater than A , and a is greater
than B . For a list of code values, see 
http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters
[http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters] .

For Binary, DynamoDB treats each byte of the binary data as unsigned when it
compares binary values. **/
        AttributeValueList?: AttributeValueList;
        /** A comparator for evaluating attributes. For example, equals, greater than, less
than, etc.

The following comparison operators are available:

EQ | NE | LE | LT | GE | GT | NOT_NULL | NULL | CONTAINS | NOT_CONTAINS |
BEGINS_WITH | IN | BETWEEN

The following are descriptions of each comparison operator.

 &amp;#42; EQ : Equal. EQ is supported for all datatypes, including lists and maps.
   
   AttributeValueList can contain only one AttributeValue element of type
   String, Number, Binary, String Set, Number Set, or Binary Set. If an item
   contains an AttributeValue element of a different type than the one provided
   in the request, the value does not match. For example, {&quot;S&quot;:&quot;6&quot;} does not
   equal {&quot;N&quot;:&quot;6&quot;} . Also, {&quot;N&quot;:&quot;6&quot;} does not equal {&quot;NS&quot;:[&quot;6&quot;, &quot;2&quot;, &quot;1&quot;]} .
   
   
   
   
 * NE : Not equal. NE is supported for all datatypes, including lists and maps.
   
   AttributeValueList can contain only one AttributeValue of type String,
   Number, Binary, String Set, Number Set, or Binary Set. If an item contains an 
   AttributeValue of a different type than the one provided in the request, the
   value does not match. For example, {&quot;S&quot;:&quot;6&quot;} does not equal {&quot;N&quot;:&quot;6&quot;} . Also, 
   {&quot;N&quot;:&quot;6&quot;} does not equal {&quot;NS&quot;:[&quot;6&quot;, &quot;2&quot;, &quot;1&quot;]} .
   
   
   
   
 * LE : Less than or equal.
   
   AttributeValueList can contain only one AttributeValue element of type
   String, Number, or Binary (not a set type). If an item contains an 
   AttributeValue element of a different type than the one provided in the
   request, the value does not match. For example, {&quot;S&quot;:&quot;6&quot;} does not equal 
   {&quot;N&quot;:&quot;6&quot;} . Also, {&quot;N&quot;:&quot;6&quot;} does not compare to {&quot;NS&quot;:[&quot;6&quot;, &quot;2&quot;, &quot;1&quot;]} .
   
   
   
   
 * LT : Less than.
   
   AttributeValueList can contain only one AttributeValue of type String,
   Number, or Binary (not a set type). If an item contains an AttributeValue 
   element of a different type than the one provided in the request, the value
   does not match. For example, {&quot;S&quot;:&quot;6&quot;} does not equal {&quot;N&quot;:&quot;6&quot;} . Also, 
   {&quot;N&quot;:&quot;6&quot;} does not compare to {&quot;NS&quot;:[&quot;6&quot;, &quot;2&quot;, &quot;1&quot;]} .
   
   
   
   
 * GE : Greater than or equal.
   
   AttributeValueList can contain only one AttributeValue element of type
   String, Number, or Binary (not a set type). If an item contains an 
   AttributeValue element of a different type than the one provided in the
   request, the value does not match. For example, {&quot;S&quot;:&quot;6&quot;} does not equal 
   {&quot;N&quot;:&quot;6&quot;} . Also, {&quot;N&quot;:&quot;6&quot;} does not compare to {&quot;NS&quot;:[&quot;6&quot;, &quot;2&quot;, &quot;1&quot;]} .
   
   
   
   
 * GT : Greater than.
   
   AttributeValueList can contain only one AttributeValue element of type
   String, Number, or Binary (not a set type). If an item contains an 
   AttributeValue element of a different type than the one provided in the
   request, the value does not match. For example, {&quot;S&quot;:&quot;6&quot;} does not equal 
   {&quot;N&quot;:&quot;6&quot;} . Also, {&quot;N&quot;:&quot;6&quot;} does not compare to {&quot;NS&quot;:[&quot;6&quot;, &quot;2&quot;, &quot;1&quot;]} .
   
   
   
   
 * NOT_NULL : The attribute exists. NOT_NULL is supported for all datatypes,
   including lists and maps.
   
   This operator tests for the existence of an attribute, not its data type. If
   the data type of attribute &quot; a &quot; is null, and you evaluate it using NOT_NULL 
   , the result is a Boolean true . This result is because the attribute &quot; a &quot;
   exists; its data type is not relevant to the NOT_NULL comparison operator.
   
   
 * NULL : The attribute does not exist. NULL is supported for all datatypes,
   including lists and maps.
   
   This operator tests for the nonexistence of an attribute, not its data type.
   If the data type of attribute &quot; a &quot; is null, and you evaluate it using NULL ,
   the result is a Boolean false . This is because the attribute &quot; a &quot; exists;
   its data type is not relevant to the NULL comparison operator.
   
   
 * CONTAINS : Checks for a subsequence, or value in a set.
   
   AttributeValueList can contain only one AttributeValue element of type
   String, Number, or Binary (not a set type). If the target attribute of the
   comparison is of type String, then the operator checks for a substring match.
   If the target attribute of the comparison is of type Binary, then the
   operator looks for a subsequence of the target that matches the input. If the
   target attribute of the comparison is a set (&quot; SS &quot;, &quot; NS &quot;, or &quot; BS &quot;), then
   the operator evaluates to true if it finds an exact match with any member of
   the set.
   
   CONTAINS is supported for lists: When evaluating &quot; a CONTAINS b &quot;, &quot; a &quot; can
   be a list; however, &quot; b &quot; cannot be a set, a map, or a list.
   
   
 * NOT_CONTAINS : Checks for absence of a subsequence, or absence of a value in
   a set.
   
   AttributeValueList can contain only one AttributeValue element of type
   String, Number, or Binary (not a set type). If the target attribute of the
   comparison is a String, then the operator checks for the absence of a
   substring match. If the target attribute of the comparison is Binary, then
   the operator checks for the absence of a subsequence of the target that
   matches the input. If the target attribute of the comparison is a set (&quot; SS 
   &quot;, &quot; NS &quot;, or &quot; BS &quot;), then the operator evaluates to true if it does not 
   find an exact match with any member of the set.
   
   NOT_CONTAINS is supported for lists: When evaluating &quot; a NOT CONTAINS b &quot;, &quot; 
   a &quot; can be a list; however, &quot; b &quot; cannot be a set, a map, or a list.
   
   
 * BEGINS_WITH : Checks for a prefix.
   
   AttributeValueList can contain only one AttributeValue of type String or
   Binary (not a Number or a set type). The target attribute of the comparison
   must be of type String or Binary (not a Number or a set type).
   
   
   
   
 * IN : Checks for matching elements within two sets.
   
   AttributeValueList can contain one or more AttributeValue elements of type
   String, Number, or Binary (not a set type). These attributes are compared
   against an existing set type attribute of an item. If any elements of the
   input set are present in the item attribute, the expression evaluates to
   true.
   
   
 * BETWEEN : Greater than or equal to the first value, and less than or equal to
   the second value.
   
   AttributeValueList must contain two AttributeValue elements of the same type,
   either String, Number, or Binary (not a set type). A target attribute matches
   if the target value is greater than, or equal to, the first element and less
   than, or equal to, the second element. If an item contains an AttributeValue 
   element of a different type than the one provided in the request, the value
   does not match. For example, {&quot;S&quot;:&quot;6&quot;} does not compare to {&quot;N&quot;:&quot;6&quot;} . Also, 
   {&quot;N&quot;:&quot;6&quot;} does not compare to {&quot;NS&quot;:[&quot;6&quot;, &quot;2&quot;, &quot;1&quot;]}
   
   

For usage examples of AttributeValueList and ComparisonOperator , see Legacy
Conditional Parameters
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.html] 
in the Amazon DynamoDB Developer Guide . **/
        ComparisonOperator: ComparisonOperator;
    }
    export interface ConditionalCheckFailedException {
        /** The conditional request failed. **/
        message?: ErrorMessage;
    }
    export interface ConsumedCapacity {
        /** The name of the table that was affected by the operation. **/
        TableName?: TableName;
        /** The total number of capacity units consumed by the operation. **/
        CapacityUnits?: ConsumedCapacityUnits;
        /** The amount of throughput consumed on the table affected by the operation. **/
        Table?: Capacity;
        /** The amount of throughput consumed on each local index affected by the operation. **/
        LocalSecondaryIndexes?: SecondaryIndexesCapacityMap;
        /** The amount of throughput consumed on each global index affected by the
operation. **/
        GlobalSecondaryIndexes?: SecondaryIndexesCapacityMap;
    }
    export interface CreateGlobalSecondaryIndexAction {
        /** The name of the global secondary index to be created. **/
        IndexName: IndexName;
        /** The key schema for the global secondary index. **/
        KeySchema: KeySchema;
        Projection: Projection;
        ProvisionedThroughput: ProvisionedThroughput;
    }
    export interface CreateTableInput {
        /** An array of attributes that describe the key schema for the table and indexes. **/
        AttributeDefinitions: AttributeDefinitions;
        /** The name of the table to create. **/
        TableName: TableName;
        /** Specifies the attributes that make up the primary key for a table or an index.
The attributes in KeySchema must also be defined in the AttributeDefinitions 
array. For more information, see Data Model
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DataModel.html] 
in the Amazon DynamoDB Developer Guide .

Each KeySchemaElement in the array is composed of:

 &amp;#42; AttributeName - The name of this key attribute.
   
   
 * KeyType - The role that the key attribute will assume:
   
    * HASH - partition key
      
      
    * RANGE - sort key
      
      
   
   

The partition key of an item is also known as its hash attribute . The term
&quot;hash attribute&quot; derives from DynamoDB&#x27; usage of an internal hash function to
evenly distribute data items across partitions, based on their partition key
values.

The sort key of an item is also known as its range attribute . The term &quot;range
attribute&quot; derives from the way DynamoDB stores items with the same partition
key physically close together, in sorted order by the sort key value.

For a simple primary key (partition key), you must provide exactly one element
with a KeyType of HASH .

For a composite primary key (partition key and sort key), you must provide
exactly two elements, in this order: The first element must have a KeyType of 
HASH , and the second element must have a KeyType of RANGE .

For more information, see Specifying the Primary Key
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html#WorkingWithTables.primary.key] 
in the Amazon DynamoDB Developer Guide . **/
        KeySchema: KeySchema;
        /** One or more local secondary indexes (the maximum is five) to be created on the
table. Each index is scoped to a given partition key value. There is a 10 GB
size limit per partition key value; otherwise, the size of a local secondary
index is unconstrained.

Each local secondary index in the array includes the following:

 &amp;#42; IndexName - The name of the local secondary index. Must be unique only for
   this table.
   
   
   
   
 * KeySchema - Specifies the key schema for the local secondary index. The key
   schema must begin with the same partition key as the table.
   
   
 * Projection - Specifies attributes that are copied (projected) from the table
   into the index. These are in addition to the primary key attributes and index
   key attributes, which are automatically projected. Each attribute
   specification is composed of:
   
    * ProjectionType - One of the following:
      
       * KEYS_ONLY - Only the index and primary keys are projected into the
         index.
         
         
       * INCLUDE - Only the specified table attributes are projected into the
         index. The list of projected attributes are in NonKeyAttributes .
         
         
       * ALL - All of the table attributes are projected into the index.
         
         
      
      
    * NonKeyAttributes - A list of one or more non-key attribute names that are
      projected into the secondary index. The total count of attributes provided
      in NonKeyAttributes , summed across all of the secondary indexes, must not
      exceed 20. If you project the same attribute into two different indexes,
      this counts as two distinct attributes when determining the total. **/
        LocalSecondaryIndexes?: LocalSecondaryIndexList;
        /** One or more global secondary indexes (the maximum is five) to be created on the
table. Each global secondary index in the array includes the following:

 &amp;#42; IndexName - The name of the global secondary index. Must be unique only for
   this table.
   
   
   
   
 * KeySchema - Specifies the key schema for the global secondary index.
   
   
 * Projection - Specifies attributes that are copied (projected) from the table
   into the index. These are in addition to the primary key attributes and index
   key attributes, which are automatically projected. Each attribute
   specification is composed of:
   
    * ProjectionType - One of the following:
      
       * KEYS_ONLY - Only the index and primary keys are projected into the
         index.
         
         
       * INCLUDE - Only the specified table attributes are projected into the
         index. The list of projected attributes are in NonKeyAttributes .
         
         
       * ALL - All of the table attributes are projected into the index.
         
         
      
      
    * NonKeyAttributes - A list of one or more non-key attribute names that are
      projected into the secondary index. The total count of attributes provided
      in NonKeyAttributes , summed across all of the secondary indexes, must not
      exceed 20. If you project the same attribute into two different indexes,
      this counts as two distinct attributes when determining the total.
      
      
   
   
 * ProvisionedThroughput - The provisioned throughput settings for the global
   secondary index, consisting of read and write capacity units. **/
        GlobalSecondaryIndexes?: GlobalSecondaryIndexList;
        ProvisionedThroughput: ProvisionedThroughput;
        /** The settings for DynamoDB Streams on the table. These settings consist of:

 &amp;#42; StreamEnabled - Indicates whether Streams is to be enabled (true) or disabled
   (false).
   
   
 * StreamViewType - When an item in the table is modified, StreamViewType 
   determines what information is written to the table&#x27;s stream. Valid values
   for StreamViewType are:
   
    * KEYS_ONLY - Only the key attributes of the modified item are written to
      the stream.
      
      
    * NEW_IMAGE - The entire item, as it appears after it was modified, is
      written to the stream.
      
      
    * OLD_IMAGE - The entire item, as it appeared before it was modified, is
      written to the stream.
      
      
    * NEW_AND_OLD_IMAGES - Both the new and the old item images of the item are
      written to the stream. **/
        StreamSpecification?: StreamSpecification;
    }
    export interface CreateTableOutput {
        TableDescription?: TableDescription;
    }
    export interface DeleteGlobalSecondaryIndexAction {
        /** The name of the global secondary index to be deleted. **/
        IndexName: IndexName;
    }
    export interface DeleteItemInput {
        /** The name of the table from which to delete the item. **/
        TableName: TableName;
        /** A map of attribute names to AttributeValue objects, representing the primary key
of the item to delete.

For the primary key, you must provide all of the attributes. For example, with a
simple primary key, you only need to provide a value for the partition key. For
a composite primary key, you must provide values for both the partition key and
the sort key. **/
        Key: Key;
        /** This is a legacy parameter, for backward compatibility. New applications should
use ConditionExpression instead. Do not combine legacy parameters and expression
parameters in a single API call; otherwise, DynamoDB will return a 
ValidationException exception.

A map of attribute/condition pairs. Expected provides a conditional block for
the DeleteItem operation.

Each element of Expected consists of an attribute name, a comparison operator,
and one or more values. DynamoDB compares the attribute with the value(s) you
supplied, using the comparison operator. For each Expected element, the result
of the evaluation is either true or false.

If you specify more than one element in the Expected map, then by default all of
the conditions must evaluate to true. In other words, the conditions are ANDed
together. (You can use the ConditionalOperator parameter to OR the conditions
instead. If you do this, then at least one of the conditions must evaluate to
true, rather than all of them.)

If the Expected map evaluates to true, then the conditional operation succeeds;
otherwise, it fails.

Expected contains the following:

 &amp;#42; AttributeValueList - One or more values to evaluate against the supplied
   attribute. The number of values in the list depends on the ComparisonOperator 
   being used.
   
   For type Number, value comparisons are numeric.
   
   String value comparisons for greater than, equals, or less than are based on
   ASCII character code values. For example, a is greater than A , and a is
   greater than B . For a list of code values, see 
   http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters
   [http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters] .
   
   For type Binary, DynamoDB treats each byte of the binary data as unsigned
   when it compares binary values.
   
   
 * ComparisonOperator - A comparator for evaluating attributes in the 
   AttributeValueList . When performing the comparison, DynamoDB uses strongly
   consistent reads.
   
   The following comparison operators are available:
   
   EQ | NE | LE | LT | GE | GT | NOT_NULL | NULL | CONTAINS | NOT_CONTAINS |
   BEGINS_WITH | IN | BETWEEN
   
   The following are descriptions of each comparison operator.
   
    * EQ : Equal. EQ is supported for all datatypes, including lists and maps.
      
      AttributeValueList can contain only one AttributeValue element of type
      String, Number, Binary, String Set, Number Set, or Binary Set. If an item
      contains an AttributeValue element of a different type than the one
      provided in the request, the value does not match. For example, {&quot;S&quot;:&quot;6&quot;} 
      does not equal {&quot;N&quot;:&quot;6&quot;} . Also, {&quot;N&quot;:&quot;6&quot;} does not equal {&quot;NS&quot;:[&quot;6&quot;, &quot;2&quot;,
      &quot;1&quot;]} .
      
      
      
      
    * NE : Not equal. NE is supported for all datatypes, including lists and
      maps.
      
      AttributeValueList can contain only one AttributeValue of type String,
      Number, Binary, String Set, Number Set, or Binary Set. If an item contains
      an AttributeValue of a different type than the one provided in the
      request, the value does not match. For example, {&quot;S&quot;:&quot;6&quot;} does not equal 
      {&quot;N&quot;:&quot;6&quot;} . Also, {&quot;N&quot;:&quot;6&quot;} does not equal {&quot;NS&quot;:[&quot;6&quot;, &quot;2&quot;, &quot;1&quot;]} .
      
      
      
      
    * LE : Less than or equal.
      
      AttributeValueList can contain only one AttributeValue element of type
      String, Number, or Binary (not a set type). If an item contains an 
      AttributeValue element of a different type than the one provided in the
      request, the value does not match. For example, {&quot;S&quot;:&quot;6&quot;} does not equal 
      {&quot;N&quot;:&quot;6&quot;} . Also, {&quot;N&quot;:&quot;6&quot;} does not compare to {&quot;NS&quot;:[&quot;6&quot;, &quot;2&quot;, &quot;1&quot;]} .
      
      
      
      
    * LT : Less than.
      
      AttributeValueList can contain only one AttributeValue of type String,
      Number, or Binary (not a set type). If an item contains an AttributeValue 
      element of a different type than the one provided in the request, the
      value does not match. For example, {&quot;S&quot;:&quot;6&quot;} does not equal {&quot;N&quot;:&quot;6&quot;} .
      Also, {&quot;N&quot;:&quot;6&quot;} does not compare to {&quot;NS&quot;:[&quot;6&quot;, &quot;2&quot;, &quot;1&quot;]} .
      
      
      
      
    * GE : Greater than or equal.
      
      AttributeValueList can contain only one AttributeValue element of type
      String, Number, or Binary (not a set type). If an item contains an 
      AttributeValue element of a different type than the one provided in the
      request, the value does not match. For example, {&quot;S&quot;:&quot;6&quot;} does not equal 
      {&quot;N&quot;:&quot;6&quot;} . Also, {&quot;N&quot;:&quot;6&quot;} does not compare to {&quot;NS&quot;:[&quot;6&quot;, &quot;2&quot;, &quot;1&quot;]} .
      
      
      
      
    * GT : Greater than.
      
      AttributeValueList can contain only one AttributeValue element of type
      String, Number, or Binary (not a set type). If an item contains an 
      AttributeValue element of a different type than the one provided in the
      request, the value does not match. For example, {&quot;S&quot;:&quot;6&quot;} does not equal 
      {&quot;N&quot;:&quot;6&quot;} . Also, {&quot;N&quot;:&quot;6&quot;} does not compare to {&quot;NS&quot;:[&quot;6&quot;, &quot;2&quot;, &quot;1&quot;]} .
      
      
      
      
    * NOT_NULL : The attribute exists. NOT_NULL is supported for all datatypes,
      including lists and maps.
      
      This operator tests for the existence of an attribute, not its data type.
      If the data type of attribute &quot; a &quot; is null, and you evaluate it using 
      NOT_NULL , the result is a Boolean true . This result is because the
      attribute &quot; a &quot; exists; its data type is not relevant to the NOT_NULL 
      comparison operator.
      
      
    * NULL : The attribute does not exist. NULL is supported for all datatypes,
      including lists and maps.
      
      This operator tests for the nonexistence of an attribute, not its data
      type. If the data type of attribute &quot; a &quot; is null, and you evaluate it
      using NULL , the result is a Boolean false . This is because the attribute
      &quot; a &quot; exists; its data type is not relevant to the NULL comparison
      operator.
      
      
    * CONTAINS : Checks for a subsequence, or value in a set.
      
      AttributeValueList can contain only one AttributeValue element of type
      String, Number, or Binary (not a set type). If the target attribute of the
      comparison is of type String, then the operator checks for a substring
      match. If the target attribute of the comparison is of type Binary, then
      the operator looks for a subsequence of the target that matches the input.
      If the target attribute of the comparison is a set (&quot; SS &quot;, &quot; NS &quot;, or &quot; 
      BS &quot;), then the operator evaluates to true if it finds an exact match with
      any member of the set.
      
      CONTAINS is supported for lists: When evaluating &quot; a CONTAINS b &quot;, &quot; a &quot;
      can be a list; however, &quot; b &quot; cannot be a set, a map, or a list.
      
      
    * NOT_CONTAINS : Checks for absence of a subsequence, or absence of a value
      in a set.
      
      AttributeValueList can contain only one AttributeValue element of type
      String, Number, or Binary (not a set type). If the target attribute of the
      comparison is a String, then the operator checks for the absence of a
      substring match. If the target attribute of the comparison is Binary, then
      the operator checks for the absence of a subsequence of the target that
      matches the input. If the target attribute of the comparison is a set (&quot; 
      SS &quot;, &quot; NS &quot;, or &quot; BS &quot;), then the operator evaluates to true if it does
      not find an exact match with any member of the set.
      
      NOT_CONTAINS is supported for lists: When evaluating &quot; a NOT CONTAINS b &quot;,
      &quot; a &quot; can be a list; however, &quot; b &quot; cannot be a set, a map, or a list.
      
      
    * BEGINS_WITH : Checks for a prefix.
      
      AttributeValueList can contain only one AttributeValue of type String or
      Binary (not a Number or a set type). The target attribute of the
      comparison must be of type String or Binary (not a Number or a set type).
      
      
      
      
    * IN : Checks for matching elements within two sets.
      
      AttributeValueList can contain one or more AttributeValue elements of type
      String, Number, or Binary (not a set type). These attributes are compared
      against an existing set type attribute of an item. If any elements of the
      input set are present in the item attribute, the expression evaluates to
      true.
      
      
    * BETWEEN : Greater than or equal to the first value, and less than or equal
      to the second value.
      
      AttributeValueList must contain two AttributeValue elements of the same
      type, either String, Number, or Binary (not a set type). A target
      attribute matches if the target value is greater than, or equal to, the
      first element and less than, or equal to, the second element. If an item
      contains an AttributeValue element of a different type than the one
      provided in the request, the value does not match. For example, {&quot;S&quot;:&quot;6&quot;} 
      does not compare to {&quot;N&quot;:&quot;6&quot;} . Also, {&quot;N&quot;:&quot;6&quot;} does not compare to 
      {&quot;NS&quot;:[&quot;6&quot;, &quot;2&quot;, &quot;1&quot;]}
      
      
   
   

For usage examples of AttributeValueList and ComparisonOperator , see Legacy
Conditional Parameters
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.html] 
in the Amazon DynamoDB Developer Guide .

For backward compatibility with previous DynamoDB releases, the following
parameters can be used instead of AttributeValueList and ComparisonOperator :

 * Value - A value for DynamoDB to compare with an attribute.
   
   
 * Exists - A Boolean value that causes DynamoDB to evaluate the value before
   attempting the conditional operation:
   
    * If Exists is true , DynamoDB will check to see if that attribute value
      already exists in the table. If it is found, then the condition evaluates
      to true; otherwise the condition evaluate to false.
      
      
    * If Exists is false , DynamoDB assumes that the attribute value does not 
      exist in the table. If in fact the value does not exist, then the
      assumption is valid and the condition evaluates to true. If the value is
      found, despite the assumption that it does not exist, the condition
      evaluates to false.
      
      
   
   Note that the default value for Exists is true .
   
   

The Value and Exists parameters are incompatible with AttributeValueList and 
ComparisonOperator . Note that if you use both sets of parameters at once,
DynamoDB will return a ValidationException exception.

This parameter does not support attributes of type List or Map. **/
        Expected?: ExpectedAttributeMap;
        /** This is a legacy parameter, for backward compatibility. New applications should
use ConditionExpression instead. Do not combine legacy parameters and expression
parameters in a single API call; otherwise, DynamoDB will return a 
ValidationException exception.

A logical operator to apply to the conditions in the Expected map:

 &amp;#42; AND - If all of the conditions evaluate to true, then the entire map
   evaluates to true.
   
   
 * OR - If at least one of the conditions evaluate to true, then the entire map
   evaluates to true.
   
   

If you omit ConditionalOperator , then AND is the default.

The operation will succeed only if the entire map evaluates to true.

This parameter does not support attributes of type List or Map. **/
        ConditionalOperator?: ConditionalOperator;
        /** Use ReturnValues if you want to get the item attributes as they appeared before
they were deleted. For DeleteItem , the valid values are:

 &amp;#42; NONE - If ReturnValues is not specified, or if its value is NONE , then
   nothing is returned. (This setting is the default for ReturnValues .)
   
   
 * ALL_OLD - The content of the old item is returned. **/
        ReturnValues?: ReturnValue;
        ReturnConsumedCapacity?: ReturnConsumedCapacity;
        /** Determines whether item collection metrics are returned. If set to SIZE , the
response includes statistics about item collections, if any, that were modified
during the operation are returned in the response. If set to NONE (the default),
no statistics are returned. **/
        ReturnItemCollectionMetrics?: ReturnItemCollectionMetrics;
        /** A condition that must be satisfied in order for a conditional DeleteItem to
succeed.

An expression can contain any of the following:

 &amp;#42; Functions: attribute_exists | attribute_not_exists | attribute_type |
   contains | begins_with | size
   
   These function names are case-sensitive.
   
   
 * Comparison operators: = | | | | = | = | BETWEEN | IN
   
   
 * Logical operators: AND | OR | NOT
   
   

For more information on condition expressions, see Specifying Conditions
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.SpecifyingConditions.html] 
in the Amazon DynamoDB Developer Guide .

ConditionExpression replaces the legacy ConditionalOperator and Expected 
parameters. **/
        ConditionExpression?: ConditionExpression;
        /** One or more substitution tokens for attribute names in an expression. The
following are some use cases for using ExpressionAttributeNames :

 &amp;#42; To access an attribute whose name conflicts with a DynamoDB reserved word.
   
   
 * To create a placeholder for repeating occurrences of an attribute name in an
   expression.
   
   
 * To prevent special characters in an attribute name from being misinterpreted
   in an expression.
   
   

Use the # character in an expression to dereference an attribute name. For
example, consider the following attribute name:

 * Percentile
   
   

The name of this attribute conflicts with a reserved word, so it cannot be used
directly in an expression. (For the complete list of reserved words, see 
Reserved Words
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html] 
in the Amazon DynamoDB Developer Guide ). To work around this, you could specify
the following for ExpressionAttributeNames :

 * {&quot;#P&quot;:&quot;Percentile&quot;}
   
   

You could then use this substitution in an expression, as in this example:

 * #P = :val
   
   

Tokens that begin with the : character are expression attribute values , which
are placeholders for the actual value at runtime.

For more information on expression attribute names, see Accessing Item
Attributes
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html] 
in the Amazon DynamoDB Developer Guide . **/
        ExpressionAttributeNames?: ExpressionAttributeNameMap;
        /** One or more values that can be substituted in an expression.

Use the : (colon) character in an expression to dereference an attribute value.
For example, suppose that you wanted to check whether the value of the 
ProductStatus attribute was one of the following:

Available | Backordered | Discontinued

You would first need to specify ExpressionAttributeValues as follows:

{ &quot;:avail&quot;:{&quot;S&quot;:&quot;Available&quot;}, &quot;:back&quot;:{&quot;S&quot;:&quot;Backordered&quot;},
&quot;:disc&quot;:{&quot;S&quot;:&quot;Discontinued&quot;} }

You could then use these values in an expression, such as this:

ProductStatus IN (:avail, :back, :disc)

For more information on expression attribute values, see Specifying Conditions
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.SpecifyingConditions.html] 
in the Amazon DynamoDB Developer Guide . **/
        ExpressionAttributeValues?: ExpressionAttributeValueMap;
    }
    export interface DeleteItemOutput {
        /** A map of attribute names to AttributeValue objects, representing the item as it
appeared before the DeleteItem operation. This map appears in the response only
if ReturnValues was specified as ALL_OLD in the request. **/
        Attributes?: AttributeMap;
        ConsumedCapacity?: ConsumedCapacity;
        /** Information about item collections, if any, that were affected by the operation. 
ItemCollectionMetrics is only returned if the request asked for it. If the table
does not have any local secondary indexes, this information is not returned in
the response.

Each ItemCollectionMetrics element consists of:

 &amp;#42; ItemCollectionKey - The partition key value of the item collection. This is
   the same as the partition key value of the item itself.
   
   
 * SizeEstimateRange - An estimate of item collection size, in gigabytes. This
   value is a two-element array containing a lower bound and an upper bound for
   the estimate. The estimate includes the size of all the items in the table,
   plus the size of all attributes projected into all of the local secondary
   indexes on that table. Use this estimate to measure whether a local secondary
   index is approaching its size limit.
   
   The estimate is subject to change over time; therefore, do not rely on the
   precision or accuracy of the estimate. **/
        ItemCollectionMetrics?: ItemCollectionMetrics;
    }
    export interface DeleteRequest {
        /** A map of attribute name to attribute values, representing the primary key of the
item to delete. All of the table&#x27;s primary key attributes must be specified, and
their data types must match those of the table&#x27;s key schema. **/
        Key: Key;
    }
    export interface DeleteTableInput {
        /** The name of the table to delete. **/
        TableName: TableName;
    }
    export interface DeleteTableOutput {
        TableDescription?: TableDescription;
    }
    export interface DescribeLimitsInput {
    }
    export interface DescribeLimitsOutput {
        /** The maximum total read capacity units that your account allows you to provision
across all of your tables in this region. **/
        AccountMaxReadCapacityUnits?: PositiveLongObject;
        /** The maximum total write capacity units that your account allows you to provision
across all of your tables in this region. **/
        AccountMaxWriteCapacityUnits?: PositiveLongObject;
        /** The maximum read capacity units that your account allows you to provision for a
new table that you are creating in this region, including the read capacity
units provisioned for its global secondary indexes (GSIs). **/
        TableMaxReadCapacityUnits?: PositiveLongObject;
        /** The maximum write capacity units that your account allows you to provision for a
new table that you are creating in this region, including the write capacity
units provisioned for its global secondary indexes (GSIs). **/
        TableMaxWriteCapacityUnits?: PositiveLongObject;
    }
    export interface DescribeTableInput {
        /** The name of the table to describe. **/
        TableName: TableName;
    }
    export interface DescribeTableOutput {
        Table?: TableDescription;
    }
    export interface ExpectedAttributeValue {
        Value?: AttributeValue;
        /** Causes DynamoDB to evaluate the value before attempting a conditional operation:

 &amp;#42; If Exists is true , DynamoDB will check to see if that attribute value
   already exists in the table. If it is found, then the operation succeeds. If
   it is not found, the operation fails with a ConditionalCheckFailedException .
   
   
 * If Exists is false , DynamoDB assumes that the attribute value does not exist
   in the table. If in fact the value does not exist, then the assumption is
   valid and the operation succeeds. If the value is found, despite the
   assumption that it does not exist, the operation fails with a 
   ConditionalCheckFailedException .
   
   

The default setting for Exists is true . If you supply a Value all by itself,
DynamoDB assumes the attribute exists: You don&#x27;t have to set Exists to true ,
because it is implied.

DynamoDB returns a ValidationException if:

 * Exists is true but there is no Value to check. (You expect a value to exist,
   but don&#x27;t specify what that value is.)
   
   
 * Exists is false but you also provide a Value . (You cannot expect an
   attribute to have a value, while also expecting it not to exist.) **/
        Exists?: BooleanObject;
        /** A comparator for evaluating attributes in the AttributeValueList . For example,
equals, greater than, less than, etc.

The following comparison operators are available:

EQ | NE | LE | LT | GE | GT | NOT_NULL | NULL | CONTAINS | NOT_CONTAINS |
BEGINS_WITH | IN | BETWEEN

The following are descriptions of each comparison operator.

 &amp;#42; EQ : Equal. EQ is supported for all datatypes, including lists and maps.
   
   AttributeValueList can contain only one AttributeValue element of type
   String, Number, Binary, String Set, Number Set, or Binary Set. If an item
   contains an AttributeValue element of a different type than the one provided
   in the request, the value does not match. For example, {&quot;S&quot;:&quot;6&quot;} does not
   equal {&quot;N&quot;:&quot;6&quot;} . Also, {&quot;N&quot;:&quot;6&quot;} does not equal {&quot;NS&quot;:[&quot;6&quot;, &quot;2&quot;, &quot;1&quot;]} .
   
   
   
   
 * NE : Not equal. NE is supported for all datatypes, including lists and maps.
   
   AttributeValueList can contain only one AttributeValue of type String,
   Number, Binary, String Set, Number Set, or Binary Set. If an item contains an 
   AttributeValue of a different type than the one provided in the request, the
   value does not match. For example, {&quot;S&quot;:&quot;6&quot;} does not equal {&quot;N&quot;:&quot;6&quot;} . Also, 
   {&quot;N&quot;:&quot;6&quot;} does not equal {&quot;NS&quot;:[&quot;6&quot;, &quot;2&quot;, &quot;1&quot;]} .
   
   
   
   
 * LE : Less than or equal.
   
   AttributeValueList can contain only one AttributeValue element of type
   String, Number, or Binary (not a set type). If an item contains an 
   AttributeValue element of a different type than the one provided in the
   request, the value does not match. For example, {&quot;S&quot;:&quot;6&quot;} does not equal 
   {&quot;N&quot;:&quot;6&quot;} . Also, {&quot;N&quot;:&quot;6&quot;} does not compare to {&quot;NS&quot;:[&quot;6&quot;, &quot;2&quot;, &quot;1&quot;]} .
   
   
   
   
 * LT : Less than.
   
   AttributeValueList can contain only one AttributeValue of type String,
   Number, or Binary (not a set type). If an item contains an AttributeValue 
   element of a different type than the one provided in the request, the value
   does not match. For example, {&quot;S&quot;:&quot;6&quot;} does not equal {&quot;N&quot;:&quot;6&quot;} . Also, 
   {&quot;N&quot;:&quot;6&quot;} does not compare to {&quot;NS&quot;:[&quot;6&quot;, &quot;2&quot;, &quot;1&quot;]} .
   
   
   
   
 * GE : Greater than or equal.
   
   AttributeValueList can contain only one AttributeValue element of type
   String, Number, or Binary (not a set type). If an item contains an 
   AttributeValue element of a different type than the one provided in the
   request, the value does not match. For example, {&quot;S&quot;:&quot;6&quot;} does not equal 
   {&quot;N&quot;:&quot;6&quot;} . Also, {&quot;N&quot;:&quot;6&quot;} does not compare to {&quot;NS&quot;:[&quot;6&quot;, &quot;2&quot;, &quot;1&quot;]} .
   
   
   
   
 * GT : Greater than.
   
   AttributeValueList can contain only one AttributeValue element of type
   String, Number, or Binary (not a set type). If an item contains an 
   AttributeValue element of a different type than the one provided in the
   request, the value does not match. For example, {&quot;S&quot;:&quot;6&quot;} does not equal 
   {&quot;N&quot;:&quot;6&quot;} . Also, {&quot;N&quot;:&quot;6&quot;} does not compare to {&quot;NS&quot;:[&quot;6&quot;, &quot;2&quot;, &quot;1&quot;]} .
   
   
   
   
 * NOT_NULL : The attribute exists. NOT_NULL is supported for all datatypes,
   including lists and maps.
   
   This operator tests for the existence of an attribute, not its data type. If
   the data type of attribute &quot; a &quot; is null, and you evaluate it using NOT_NULL 
   , the result is a Boolean true . This result is because the attribute &quot; a &quot;
   exists; its data type is not relevant to the NOT_NULL comparison operator.
   
   
 * NULL : The attribute does not exist. NULL is supported for all datatypes,
   including lists and maps.
   
   This operator tests for the nonexistence of an attribute, not its data type.
   If the data type of attribute &quot; a &quot; is null, and you evaluate it using NULL ,
   the result is a Boolean false . This is because the attribute &quot; a &quot; exists;
   its data type is not relevant to the NULL comparison operator.
   
   
 * CONTAINS : Checks for a subsequence, or value in a set.
   
   AttributeValueList can contain only one AttributeValue element of type
   String, Number, or Binary (not a set type). If the target attribute of the
   comparison is of type String, then the operator checks for a substring match.
   If the target attribute of the comparison is of type Binary, then the
   operator looks for a subsequence of the target that matches the input. If the
   target attribute of the comparison is a set (&quot; SS &quot;, &quot; NS &quot;, or &quot; BS &quot;), then
   the operator evaluates to true if it finds an exact match with any member of
   the set.
   
   CONTAINS is supported for lists: When evaluating &quot; a CONTAINS b &quot;, &quot; a &quot; can
   be a list; however, &quot; b &quot; cannot be a set, a map, or a list.
   
   
 * NOT_CONTAINS : Checks for absence of a subsequence, or absence of a value in
   a set.
   
   AttributeValueList can contain only one AttributeValue element of type
   String, Number, or Binary (not a set type). If the target attribute of the
   comparison is a String, then the operator checks for the absence of a
   substring match. If the target attribute of the comparison is Binary, then
   the operator checks for the absence of a subsequence of the target that
   matches the input. If the target attribute of the comparison is a set (&quot; SS 
   &quot;, &quot; NS &quot;, or &quot; BS &quot;), then the operator evaluates to true if it does not 
   find an exact match with any member of the set.
   
   NOT_CONTAINS is supported for lists: When evaluating &quot; a NOT CONTAINS b &quot;, &quot; 
   a &quot; can be a list; however, &quot; b &quot; cannot be a set, a map, or a list.
   
   
 * BEGINS_WITH : Checks for a prefix.
   
   AttributeValueList can contain only one AttributeValue of type String or
   Binary (not a Number or a set type). The target attribute of the comparison
   must be of type String or Binary (not a Number or a set type).
   
   
   
   
 * IN : Checks for matching elements within two sets.
   
   AttributeValueList can contain one or more AttributeValue elements of type
   String, Number, or Binary (not a set type). These attributes are compared
   against an existing set type attribute of an item. If any elements of the
   input set are present in the item attribute, the expression evaluates to
   true.
   
   
 * BETWEEN : Greater than or equal to the first value, and less than or equal to
   the second value.
   
   AttributeValueList must contain two AttributeValue elements of the same type,
   either String, Number, or Binary (not a set type). A target attribute matches
   if the target value is greater than, or equal to, the first element and less
   than, or equal to, the second element. If an item contains an AttributeValue 
   element of a different type than the one provided in the request, the value
   does not match. For example, {&quot;S&quot;:&quot;6&quot;} does not compare to {&quot;N&quot;:&quot;6&quot;} . Also, 
   {&quot;N&quot;:&quot;6&quot;} does not compare to {&quot;NS&quot;:[&quot;6&quot;, &quot;2&quot;, &quot;1&quot;]} **/
        ComparisonOperator?: ComparisonOperator;
        /** One or more values to evaluate against the supplied attribute. The number of
values in the list depends on the ComparisonOperator being used.

For type Number, value comparisons are numeric.

String value comparisons for greater than, equals, or less than are based on
ASCII character code values. For example, a is greater than A , and a is greater
than B . For a list of code values, see 
http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters
[http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters] .

For Binary, DynamoDB treats each byte of the binary data as unsigned when it
compares binary values.

For information on specifying data types in JSON, see JSON Data Format
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DataFormat.html] 
in the Amazon DynamoDB Developer Guide . **/
        AttributeValueList?: AttributeValueList;
    }
    export interface GetItemInput {
        /** The name of the table containing the requested item. **/
        TableName: TableName;
        /** A map of attribute names to AttributeValue objects, representing the primary key
of the item to retrieve.

For the primary key, you must provide all of the attributes. For example, with a
simple primary key, you only need to provide a value for the partition key. For
a composite primary key, you must provide values for both the partition key and
the sort key. **/
        Key: Key;
        /** This is a legacy parameter, for backward compatibility. New applications should
use ProjectionExpression instead. Do not combine legacy parameters and
expression parameters in a single API call; otherwise, DynamoDB will return a 
ValidationException exception.

This parameter allows you to retrieve attributes of type List or Map; however,
it cannot retrieve individual elements within a List or a Map.

The names of one or more attributes to retrieve. If no attribute names are
provided, then all attributes will be returned. If any of the requested
attributes are not found, they will not appear in the result.

Note that AttributesToGet has no effect on provisioned throughput consumption.
DynamoDB determines capacity units consumed based on item size, not on the
amount of data that is returned to an application. **/
        AttributesToGet?: AttributeNameList;
        /** Determines the read consistency model: If set to true , then the operation uses
strongly consistent reads; otherwise, the operation uses eventually consistent
reads. **/
        ConsistentRead?: ConsistentRead;
        ReturnConsumedCapacity?: ReturnConsumedCapacity;
        /** A string that identifies one or more attributes to retrieve from the table.
These attributes can include scalars, sets, or elements of a JSON document. The
attributes in the expression must be separated by commas.

If no attribute names are specified, then all attributes will be returned. If
any of the requested attributes are not found, they will not appear in the
result.

For more information, see Accessing Item Attributes
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html] 
in the Amazon DynamoDB Developer Guide .

ProjectionExpression replaces the legacy AttributesToGet parameter. **/
        ProjectionExpression?: ProjectionExpression;
        /** One or more substitution tokens for attribute names in an expression. The
following are some use cases for using ExpressionAttributeNames :

 &amp;#42; To access an attribute whose name conflicts with a DynamoDB reserved word.
   
   
 * To create a placeholder for repeating occurrences of an attribute name in an
   expression.
   
   
 * To prevent special characters in an attribute name from being misinterpreted
   in an expression.
   
   

Use the # character in an expression to dereference an attribute name. For
example, consider the following attribute name:

 * Percentile
   
   

The name of this attribute conflicts with a reserved word, so it cannot be used
directly in an expression. (For the complete list of reserved words, see 
Reserved Words
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html] 
in the Amazon DynamoDB Developer Guide ). To work around this, you could specify
the following for ExpressionAttributeNames :

 * {&quot;#P&quot;:&quot;Percentile&quot;}
   
   

You could then use this substitution in an expression, as in this example:

 * #P = :val
   
   

Tokens that begin with the : character are expression attribute values , which
are placeholders for the actual value at runtime.

For more information on expression attribute names, see Accessing Item
Attributes
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html] 
in the Amazon DynamoDB Developer Guide . **/
        ExpressionAttributeNames?: ExpressionAttributeNameMap;
    }
    export interface GetItemOutput {
        /** A map of attribute names to AttributeValue objects, as specified by 
AttributesToGet . **/
        Item?: AttributeMap;
        ConsumedCapacity?: ConsumedCapacity;
    }
    export interface GlobalSecondaryIndex {
        /** The name of the global secondary index. The name must be unique among all other
indexes on this table. **/
        IndexName: IndexName;
        /** The complete key schema for a global secondary index, which consists of one or
more pairs of attribute names and key types:

 &amp;#42; HASH - partition key
   
   
 * RANGE - sort key
   
   

The partition key of an item is also known as its hash attribute . The term
&quot;hash attribute&quot; derives from DynamoDB&#x27; usage of an internal hash function to
evenly distribute data items across partitions, based on their partition key
values.

The sort key of an item is also known as its range attribute . The term &quot;range
attribute&quot; derives from the way DynamoDB stores items with the same partition
key physically close together, in sorted order by the sort key value. **/
        KeySchema: KeySchema;
        Projection: Projection;
        ProvisionedThroughput: ProvisionedThroughput;
    }
    export interface GlobalSecondaryIndexDescription {
        /** The name of the global secondary index. **/
        IndexName?: IndexName;
        /** The complete key schema for a global secondary index, which consists of one or
more pairs of attribute names and key types:

 &amp;#42; HASH - partition key
   
   
 * RANGE - sort key
   
   

The partition key of an item is also known as its hash attribute . The term
&quot;hash attribute&quot; derives from DynamoDB&#x27; usage of an internal hash function to
evenly distribute data items across partitions, based on their partition key
values.

The sort key of an item is also known as its range attribute . The term &quot;range
attribute&quot; derives from the way DynamoDB stores items with the same partition
key physically close together, in sorted order by the sort key value. **/
        KeySchema?: KeySchema;
        Projection?: Projection;
        /** The current state of the global secondary index:

 &amp;#42; CREATING - The index is being created.
   
   
 * UPDATING - The index is being updated.
   
   
 * DELETING - The index is being deleted.
   
   
 * ACTIVE - The index is ready for use. **/
        IndexStatus?: IndexStatus;
        /** Indicates whether the index is currently backfilling. Backfilling is the process
of reading items from the table and determining whether they can be added to the
index. (Not all items will qualify: For example, a partition key cannot have any
duplicate values.) If an item can be added to the index, DynamoDB will do so.
After all items have been processed, the backfilling operation is complete and 
Backfilling is false.

For indexes that were created during a CreateTable operation, the Backfilling 
attribute does not appear in the DescribeTable output. **/
        Backfilling?: Backfilling;
        ProvisionedThroughput?: ProvisionedThroughputDescription;
        /** The total size of the specified index, in bytes. DynamoDB updates this value
approximately every six hours. Recent changes might not be reflected in this
value. **/
        IndexSizeBytes?: Long;
        /** The number of items in the specified index. DynamoDB updates this value
approximately every six hours. Recent changes might not be reflected in this
value. **/
        ItemCount?: Long;
        /** The Amazon Resource Name (ARN) that uniquely identifies the index. **/
        IndexArn?: String;
    }
    export interface GlobalSecondaryIndexUpdate {
        /** The name of an existing global secondary index, along with new provisioned
throughput settings to be applied to that index. **/
        Update?: UpdateGlobalSecondaryIndexAction;
        /** The parameters required for creating a global secondary index on an existing
table:

 &amp;#42; IndexName
   
   
 * KeySchema
   
   
 * AttributeDefinitions
   
   
 * Projection
   
   
 * ProvisionedThroughput **/
        Create?: CreateGlobalSecondaryIndexAction;
        /** The name of an existing global secondary index to be removed. **/
        Delete?: DeleteGlobalSecondaryIndexAction;
    }
    export interface InternalServerError {
        /** The server encountered an internal error trying to fulfill the request. **/
        message?: ErrorMessage;
    }
    export interface ItemCollectionMetrics {
        /** The partition key value of the item collection. This value is the same as the
partition key value of the item. **/
        ItemCollectionKey?: ItemCollectionKeyAttributeMap;
        /** An estimate of item collection size, in gigabytes. This value is a two-element
array containing a lower bound and an upper bound for the estimate. The estimate
includes the size of all the items in the table, plus the size of all attributes
projected into all of the local secondary indexes on that table. Use this
estimate to measure whether a local secondary index is approaching its size
limit.

The estimate is subject to change over time; therefore, do not rely on the
precision or accuracy of the estimate. **/
        SizeEstimateRangeGB?: ItemCollectionSizeEstimateRange;
    }
    export interface ItemCollectionSizeLimitExceededException {
        /** The total size of an item collection has exceeded the maximum limit of 10
gigabytes. **/
        message?: ErrorMessage;
    }
    export interface KeySchemaElement {
        /** The name of a key attribute. **/
        AttributeName: KeySchemaAttributeName;
        /** The role that this key attribute will assume:

 &amp;#42; HASH - partition key
   
   
 * RANGE - sort key
   
   

The partition key of an item is also known as its hash attribute . The term
&quot;hash attribute&quot; derives from DynamoDB&#x27; usage of an internal hash function to
evenly distribute data items across partitions, based on their partition key
values.

The sort key of an item is also known as its range attribute . The term &quot;range
attribute&quot; derives from the way DynamoDB stores items with the same partition
key physically close together, in sorted order by the sort key value. **/
        KeyType: KeyType;
    }
    export interface KeysAndAttributes {
        /** The primary key attribute values that define the items and the attributes
associated with the items. **/
        Keys: KeyList;
        /** One or more attributes to retrieve from the table or index. If no attribute
names are specified then all attributes will be returned. If any of the
specified attributes are not found, they will not appear in the result. **/
        AttributesToGet?: AttributeNameList;
        /** The consistency of a read operation. If set to true , then a strongly consistent
read is used; otherwise, an eventually consistent read is used. **/
        ConsistentRead?: ConsistentRead;
        /** A string that identifies one or more attributes to retrieve from the table.
These attributes can include scalars, sets, or elements of a JSON document. The
attributes in the ProjectionExpression must be separated by commas.

If no attribute names are specified, then all attributes will be returned. If
any of the requested attributes are not found, they will not appear in the
result.

For more information, see Accessing Item Attributes
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html] 
in the Amazon DynamoDB Developer Guide .

ProjectionExpression replaces the legacy AttributesToGet parameter. **/
        ProjectionExpression?: ProjectionExpression;
        /** One or more substitution tokens for attribute names in an expression. The
following are some use cases for using ExpressionAttributeNames :

 &amp;#42; To access an attribute whose name conflicts with a DynamoDB reserved word.
   
   
 * To create a placeholder for repeating occurrences of an attribute name in an
   expression.
   
   
 * To prevent special characters in an attribute name from being misinterpreted
   in an expression.
   
   

Use the # character in an expression to dereference an attribute name. For
example, consider the following attribute name:

 * Percentile
   
   

The name of this attribute conflicts with a reserved word, so it cannot be used
directly in an expression. (For the complete list of reserved words, see 
Reserved Words
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html] 
in the Amazon DynamoDB Developer Guide ). To work around this, you could specify
the following for ExpressionAttributeNames :

 * {&quot;#P&quot;:&quot;Percentile&quot;}
   
   

You could then use this substitution in an expression, as in this example:

 * #P = :val
   
   

Tokens that begin with the : character are expression attribute values , which
are placeholders for the actual value at runtime.

For more information on expression attribute names, see Accessing Item
Attributes
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html] 
in the Amazon DynamoDB Developer Guide . **/
        ExpressionAttributeNames?: ExpressionAttributeNameMap;
    }
    export interface LimitExceededException {
        /** Too many operations for a given subscriber. **/
        message?: ErrorMessage;
    }
    export interface ListTablesInput {
        /** The first table name that this operation will evaluate. Use the value that was
returned for LastEvaluatedTableName in a previous operation, so that you can
obtain the next page of results. **/
        ExclusiveStartTableName?: TableName;
        /** A maximum number of table names to return. If this parameter is not specified,
the limit is 100. **/
        Limit?: ListTablesInputLimit;
    }
    export interface ListTablesOutput {
        /** The names of the tables associated with the current account at the current
endpoint. The maximum size of this array is 100.

If LastEvaluatedTableName also appears in the output, you can use this value as
the ExclusiveStartTableName parameter in a subsequent ListTables request and
obtain the next page of results. **/
        TableNames?: TableNameList;
        /** The name of the last table in the current page of results. Use this value as the 
ExclusiveStartTableName in a new request to obtain the next page of results,
until all the table names are returned.

If you do not receive a LastEvaluatedTableName value in the response, this means
that there are no more table names to be retrieved. **/
        LastEvaluatedTableName?: TableName;
    }
    export interface LocalSecondaryIndex {
        /** The name of the local secondary index. The name must be unique among all other
indexes on this table. **/
        IndexName: IndexName;
        /** The complete key schema for the local secondary index, consisting of one or more
pairs of attribute names and key types:

 &amp;#42; HASH - partition key
   
   
 * RANGE - sort key
   
   

The partition key of an item is also known as its hash attribute . The term
&quot;hash attribute&quot; derives from DynamoDB&#x27; usage of an internal hash function to
evenly distribute data items across partitions, based on their partition key
values.

The sort key of an item is also known as its range attribute . The term &quot;range
attribute&quot; derives from the way DynamoDB stores items with the same partition
key physically close together, in sorted order by the sort key value. **/
        KeySchema: KeySchema;
        Projection: Projection;
    }
    export interface LocalSecondaryIndexDescription {
        /** Represents the name of the local secondary index. **/
        IndexName?: IndexName;
        /** The complete key schema for the local secondary index, consisting of one or more
pairs of attribute names and key types:

 &amp;#42; HASH - partition key
   
   
 * RANGE - sort key
   
   

The partition key of an item is also known as its hash attribute . The term
&quot;hash attribute&quot; derives from DynamoDB&#x27; usage of an internal hash function to
evenly distribute data items across partitions, based on their partition key
values.

The sort key of an item is also known as its range attribute . The term &quot;range
attribute&quot; derives from the way DynamoDB stores items with the same partition
key physically close together, in sorted order by the sort key value. **/
        KeySchema?: KeySchema;
        Projection?: Projection;
        /** The total size of the specified index, in bytes. DynamoDB updates this value
approximately every six hours. Recent changes might not be reflected in this
value. **/
        IndexSizeBytes?: Long;
        /** The number of items in the specified index. DynamoDB updates this value
approximately every six hours. Recent changes might not be reflected in this
value. **/
        ItemCount?: Long;
        /** The Amazon Resource Name (ARN) that uniquely identifies the index. **/
        IndexArn?: String;
    }
    export interface Projection {
        /** The set of attributes that are projected into the index:

 &amp;#42; KEYS_ONLY - Only the index and primary keys are projected into the index.
   
   
 * INCLUDE - Only the specified table attributes are projected into the index.
   The list of projected attributes are in NonKeyAttributes .
   
   
 * ALL - All of the table attributes are projected into the index. **/
        ProjectionType?: ProjectionType;
        /** Represents the non-key attribute names which will be projected into the index.

For local secondary indexes, the total count of NonKeyAttributes summed across
all of the local secondary indexes, must not exceed 20. If you project the same
attribute into two different indexes, this counts as two distinct attributes
when determining the total. **/
        NonKeyAttributes?: NonKeyAttributeNameList;
    }
    export interface ProvisionedThroughput {
        /** The maximum number of strongly consistent reads consumed per second before
DynamoDB returns a ThrottlingException . For more information, see Specifying
Read and Write Requirements
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html#ProvisionedThroughput] 
in the Amazon DynamoDB Developer Guide . **/
        ReadCapacityUnits: PositiveLongObject;
        /** The maximum number of writes consumed per second before DynamoDB returns a 
ThrottlingException . For more information, see Specifying Read and Write
Requirements
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.html#ProvisionedThroughput] 
in the Amazon DynamoDB Developer Guide . **/
        WriteCapacityUnits: PositiveLongObject;
    }
    export interface ProvisionedThroughputDescription {
        /** The date and time of the last provisioned throughput increase for this table. **/
        LastIncreaseDateTime?: Date;
        /** The date and time of the last provisioned throughput decrease for this table. **/
        LastDecreaseDateTime?: Date;
        /** The number of provisioned throughput decreases for this table during this UTC
calendar day. For current maximums on provisioned throughput decreases, see 
Limits
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html] in
the Amazon DynamoDB Developer Guide . **/
        NumberOfDecreasesToday?: PositiveLongObject;
        /** The maximum number of strongly consistent reads consumed per second before
DynamoDB returns a ThrottlingException . Eventually consistent reads require
less effort than strongly consistent reads, so a setting of 50 ReadCapacityUnits 
per second provides 100 eventually consistent ReadCapacityUnits per second. **/
        ReadCapacityUnits?: PositiveLongObject;
        /** The maximum number of writes consumed per second before DynamoDB returns a 
ThrottlingException . **/
        WriteCapacityUnits?: PositiveLongObject;
    }
    export interface ProvisionedThroughputExceededException {
        /** You exceeded your maximum allowed provisioned throughput. **/
        message?: ErrorMessage;
    }
    export interface PutItemInput {
        /** The name of the table to contain the item. **/
        TableName: TableName;
        /** A map of attribute name/value pairs, one for each attribute. Only the primary
key attributes are required; you can optionally provide other attribute
name-value pairs for the item.

You must provide all of the attributes for the primary key. For example, with a
simple primary key, you only need to provide a value for the partition key. For
a composite primary key, you must provide both values for both the partition key
and the sort key.

If you specify any attributes that are part of an index key, then the data types
for those attributes must match those of the schema in the table&#x27;s attribute
definition.

For more information about primary keys, see Primary Key
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DataModel.html#DataModelPrimaryKey] 
in the Amazon DynamoDB Developer Guide .

Each element in the Item map is an AttributeValue object. **/
        Item: PutItemInputAttributeMap;
        /** This is a legacy parameter, for backward compatibility. New applications should
use ConditionExpression instead. Do not combine legacy parameters and expression
parameters in a single API call; otherwise, DynamoDB will return a 
ValidationException exception.

A map of attribute/condition pairs. Expected provides a conditional block for
the PutItem operation.

This parameter does not support attributes of type List or Map.

Each element of Expected consists of an attribute name, a comparison operator,
and one or more values. DynamoDB compares the attribute with the value(s) you
supplied, using the comparison operator. For each Expected element, the result
of the evaluation is either true or false.

If you specify more than one element in the Expected map, then by default all of
the conditions must evaluate to true. In other words, the conditions are ANDed
together. (You can use the ConditionalOperator parameter to OR the conditions
instead. If you do this, then at least one of the conditions must evaluate to
true, rather than all of them.)

If the Expected map evaluates to true, then the conditional operation succeeds;
otherwise, it fails.

Expected contains the following:

 &amp;#42; AttributeValueList - One or more values to evaluate against the supplied
   attribute. The number of values in the list depends on the ComparisonOperator 
   being used.
   
   For type Number, value comparisons are numeric.
   
   String value comparisons for greater than, equals, or less than are based on
   ASCII character code values. For example, a is greater than A , and a is
   greater than B . For a list of code values, see 
   http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters
   [http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters] .
   
   For type Binary, DynamoDB treats each byte of the binary data as unsigned
   when it compares binary values.
   
   
 * ComparisonOperator - A comparator for evaluating attributes in the 
   AttributeValueList . When performing the comparison, DynamoDB uses strongly
   consistent reads.
   
   The following comparison operators are available:
   
   EQ | NE | LE | LT | GE | GT | NOT_NULL | NULL | CONTAINS | NOT_CONTAINS |
   BEGINS_WITH | IN | BETWEEN
   
   The following are descriptions of each comparison operator.
   
    * EQ : Equal. EQ is supported for all datatypes, including lists and maps.
      
      AttributeValueList can contain only one AttributeValue element of type
      String, Number, Binary, String Set, Number Set, or Binary Set. If an item
      contains an AttributeValue element of a different type than the one
      provided in the request, the value does not match. For example, {&quot;S&quot;:&quot;6&quot;} 
      does not equal {&quot;N&quot;:&quot;6&quot;} . Also, {&quot;N&quot;:&quot;6&quot;} does not equal {&quot;NS&quot;:[&quot;6&quot;, &quot;2&quot;,
      &quot;1&quot;]} .
      
      
      
      
    * NE : Not equal. NE is supported for all datatypes, including lists and
      maps.
      
      AttributeValueList can contain only one AttributeValue of type String,
      Number, Binary, String Set, Number Set, or Binary Set. If an item contains
      an AttributeValue of a different type than the one provided in the
      request, the value does not match. For example, {&quot;S&quot;:&quot;6&quot;} does not equal 
      {&quot;N&quot;:&quot;6&quot;} . Also, {&quot;N&quot;:&quot;6&quot;} does not equal {&quot;NS&quot;:[&quot;6&quot;, &quot;2&quot;, &quot;1&quot;]} .
      
      
      
      
    * LE : Less than or equal.
      
      AttributeValueList can contain only one AttributeValue element of type
      String, Number, or Binary (not a set type). If an item contains an 
      AttributeValue element of a different type than the one provided in the
      request, the value does not match. For example, {&quot;S&quot;:&quot;6&quot;} does not equal 
      {&quot;N&quot;:&quot;6&quot;} . Also, {&quot;N&quot;:&quot;6&quot;} does not compare to {&quot;NS&quot;:[&quot;6&quot;, &quot;2&quot;, &quot;1&quot;]} .
      
      
      
      
    * LT : Less than.
      
      AttributeValueList can contain only one AttributeValue of type String,
      Number, or Binary (not a set type). If an item contains an AttributeValue 
      element of a different type than the one provided in the request, the
      value does not match. For example, {&quot;S&quot;:&quot;6&quot;} does not equal {&quot;N&quot;:&quot;6&quot;} .
      Also, {&quot;N&quot;:&quot;6&quot;} does not compare to {&quot;NS&quot;:[&quot;6&quot;, &quot;2&quot;, &quot;1&quot;]} .
      
      
      
      
    * GE : Greater than or equal.
      
      AttributeValueList can contain only one AttributeValue element of type
      String, Number, or Binary (not a set type). If an item contains an 
      AttributeValue element of a different type than the one provided in the
      request, the value does not match. For example, {&quot;S&quot;:&quot;6&quot;} does not equal 
      {&quot;N&quot;:&quot;6&quot;} . Also, {&quot;N&quot;:&quot;6&quot;} does not compare to {&quot;NS&quot;:[&quot;6&quot;, &quot;2&quot;, &quot;1&quot;]} .
      
      
      
      
    * GT : Greater than.
      
      AttributeValueList can contain only one AttributeValue element of type
      String, Number, or Binary (not a set type). If an item contains an 
      AttributeValue element of a different type than the one provided in the
      request, the value does not match. For example, {&quot;S&quot;:&quot;6&quot;} does not equal 
      {&quot;N&quot;:&quot;6&quot;} . Also, {&quot;N&quot;:&quot;6&quot;} does not compare to {&quot;NS&quot;:[&quot;6&quot;, &quot;2&quot;, &quot;1&quot;]} .
      
      
      
      
    * NOT_NULL : The attribute exists. NOT_NULL is supported for all datatypes,
      including lists and maps.
      
      This operator tests for the existence of an attribute, not its data type.
      If the data type of attribute &quot; a &quot; is null, and you evaluate it using 
      NOT_NULL , the result is a Boolean true . This result is because the
      attribute &quot; a &quot; exists; its data type is not relevant to the NOT_NULL 
      comparison operator.
      
      
    * NULL : The attribute does not exist. NULL is supported for all datatypes,
      including lists and maps.
      
      This operator tests for the nonexistence of an attribute, not its data
      type. If the data type of attribute &quot; a &quot; is null, and you evaluate it
      using NULL , the result is a Boolean false . This is because the attribute
      &quot; a &quot; exists; its data type is not relevant to the NULL comparison
      operator.
      
      
    * CONTAINS : Checks for a subsequence, or value in a set.
      
      AttributeValueList can contain only one AttributeValue element of type
      String, Number, or Binary (not a set type). If the target attribute of the
      comparison is of type String, then the operator checks for a substring
      match. If the target attribute of the comparison is of type Binary, then
      the operator looks for a subsequence of the target that matches the input.
      If the target attribute of the comparison is a set (&quot; SS &quot;, &quot; NS &quot;, or &quot; 
      BS &quot;), then the operator evaluates to true if it finds an exact match with
      any member of the set.
      
      CONTAINS is supported for lists: When evaluating &quot; a CONTAINS b &quot;, &quot; a &quot;
      can be a list; however, &quot; b &quot; cannot be a set, a map, or a list.
      
      
    * NOT_CONTAINS : Checks for absence of a subsequence, or absence of a value
      in a set.
      
      AttributeValueList can contain only one AttributeValue element of type
      String, Number, or Binary (not a set type). If the target attribute of the
      comparison is a String, then the operator checks for the absence of a
      substring match. If the target attribute of the comparison is Binary, then
      the operator checks for the absence of a subsequence of the target that
      matches the input. If the target attribute of the comparison is a set (&quot; 
      SS &quot;, &quot; NS &quot;, or &quot; BS &quot;), then the operator evaluates to true if it does
      not find an exact match with any member of the set.
      
      NOT_CONTAINS is supported for lists: When evaluating &quot; a NOT CONTAINS b &quot;,
      &quot; a &quot; can be a list; however, &quot; b &quot; cannot be a set, a map, or a list.
      
      
    * BEGINS_WITH : Checks for a prefix.
      
      AttributeValueList can contain only one AttributeValue of type String or
      Binary (not a Number or a set type). The target attribute of the
      comparison must be of type String or Binary (not a Number or a set type).
      
      
      
      
    * IN : Checks for matching elements within two sets.
      
      AttributeValueList can contain one or more AttributeValue elements of type
      String, Number, or Binary (not a set type). These attributes are compared
      against an existing set type attribute of an item. If any elements of the
      input set are present in the item attribute, the expression evaluates to
      true.
      
      
    * BETWEEN : Greater than or equal to the first value, and less than or equal
      to the second value.
      
      AttributeValueList must contain two AttributeValue elements of the same
      type, either String, Number, or Binary (not a set type). A target
      attribute matches if the target value is greater than, or equal to, the
      first element and less than, or equal to, the second element. If an item
      contains an AttributeValue element of a different type than the one
      provided in the request, the value does not match. For example, {&quot;S&quot;:&quot;6&quot;} 
      does not compare to {&quot;N&quot;:&quot;6&quot;} . Also, {&quot;N&quot;:&quot;6&quot;} does not compare to 
      {&quot;NS&quot;:[&quot;6&quot;, &quot;2&quot;, &quot;1&quot;]}
      
      
   
   

For usage examples of AttributeValueList and ComparisonOperator , see Legacy
Conditional Parameters
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.html] 
in the Amazon DynamoDB Developer Guide .

For backward compatibility with previous DynamoDB releases, the following
parameters can be used instead of AttributeValueList and ComparisonOperator :

 * Value - A value for DynamoDB to compare with an attribute.
   
   
 * Exists - A Boolean value that causes DynamoDB to evaluate the value before
   attempting the conditional operation:
   
    * If Exists is true , DynamoDB will check to see if that attribute value
      already exists in the table. If it is found, then the condition evaluates
      to true; otherwise the condition evaluate to false.
      
      
    * If Exists is false , DynamoDB assumes that the attribute value does not 
      exist in the table. If in fact the value does not exist, then the
      assumption is valid and the condition evaluates to true. If the value is
      found, despite the assumption that it does not exist, the condition
      evaluates to false.
      
      
   
   Note that the default value for Exists is true .
   
   

The Value and Exists parameters are incompatible with AttributeValueList and 
ComparisonOperator . Note that if you use both sets of parameters at once,
DynamoDB will return a ValidationException exception. **/
        Expected?: ExpectedAttributeMap;
        /** Use ReturnValues if you want to get the item attributes as they appeared before
they were updated with the PutItem request. For PutItem , the valid values are:

 &amp;#42; NONE - If ReturnValues is not specified, or if its value is NONE , then
   nothing is returned. (This setting is the default for ReturnValues .)
   
   
 * ALL_OLD - If PutItem overwrote an attribute name-value pair, then the content
   of the old item is returned. **/
        ReturnValues?: ReturnValue;
        ReturnConsumedCapacity?: ReturnConsumedCapacity;
        /** Determines whether item collection metrics are returned. If set to SIZE , the
response includes statistics about item collections, if any, that were modified
during the operation are returned in the response. If set to NONE (the default),
no statistics are returned. **/
        ReturnItemCollectionMetrics?: ReturnItemCollectionMetrics;
        /** This is a legacy parameter, for backward compatibility. New applications should
use ConditionExpression instead. Do not combine legacy parameters and expression
parameters in a single API call; otherwise, DynamoDB will return a 
ValidationException exception.

A logical operator to apply to the conditions in the Expected map:

 &amp;#42; AND - If all of the conditions evaluate to true, then the entire map
   evaluates to true.
   
   
 * OR - If at least one of the conditions evaluate to true, then the entire map
   evaluates to true.
   
   

If you omit ConditionalOperator , then AND is the default.

The operation will succeed only if the entire map evaluates to true.

This parameter does not support attributes of type List or Map. **/
        ConditionalOperator?: ConditionalOperator;
        /** A condition that must be satisfied in order for a conditional PutItem operation
to succeed.

An expression can contain any of the following:

 &amp;#42; Functions: attribute_exists | attribute_not_exists | attribute_type |
   contains | begins_with | size
   
   These function names are case-sensitive.
   
   
 * Comparison operators: = | | | | = | = | BETWEEN | IN
   
   
 * Logical operators: AND | OR | NOT
   
   

For more information on condition expressions, see Specifying Conditions
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.SpecifyingConditions.html] 
in the Amazon DynamoDB Developer Guide .

ConditionExpression replaces the legacy ConditionalOperator and Expected 
parameters. **/
        ConditionExpression?: ConditionExpression;
        /** One or more substitution tokens for attribute names in an expression. The
following are some use cases for using ExpressionAttributeNames :

 &amp;#42; To access an attribute whose name conflicts with a DynamoDB reserved word.
   
   
 * To create a placeholder for repeating occurrences of an attribute name in an
   expression.
   
   
 * To prevent special characters in an attribute name from being misinterpreted
   in an expression.
   
   

Use the # character in an expression to dereference an attribute name. For
example, consider the following attribute name:

 * Percentile
   
   

The name of this attribute conflicts with a reserved word, so it cannot be used
directly in an expression. (For the complete list of reserved words, see 
Reserved Words
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html] 
in the Amazon DynamoDB Developer Guide ). To work around this, you could specify
the following for ExpressionAttributeNames :

 * {&quot;#P&quot;:&quot;Percentile&quot;}
   
   

You could then use this substitution in an expression, as in this example:

 * #P = :val
   
   

Tokens that begin with the : character are expression attribute values , which
are placeholders for the actual value at runtime.

For more information on expression attribute names, see Accessing Item
Attributes
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html] 
in the Amazon DynamoDB Developer Guide . **/
        ExpressionAttributeNames?: ExpressionAttributeNameMap;
        /** One or more values that can be substituted in an expression.

Use the : (colon) character in an expression to dereference an attribute value.
For example, suppose that you wanted to check whether the value of the 
ProductStatus attribute was one of the following:

Available | Backordered | Discontinued

You would first need to specify ExpressionAttributeValues as follows:

{ &quot;:avail&quot;:{&quot;S&quot;:&quot;Available&quot;}, &quot;:back&quot;:{&quot;S&quot;:&quot;Backordered&quot;},
&quot;:disc&quot;:{&quot;S&quot;:&quot;Discontinued&quot;} }

You could then use these values in an expression, such as this:

ProductStatus IN (:avail, :back, :disc)

For more information on expression attribute values, see Specifying Conditions
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.SpecifyingConditions.html] 
in the Amazon DynamoDB Developer Guide . **/
        ExpressionAttributeValues?: ExpressionAttributeValueMap;
    }
    export interface PutItemOutput {
        /** The attribute values as they appeared before the PutItem operation, but only if 
ReturnValues is specified as ALL_OLD in the request. Each element consists of an
attribute name and an attribute value. **/
        Attributes?: AttributeMap;
        ConsumedCapacity?: ConsumedCapacity;
        /** Information about item collections, if any, that were affected by the operation. 
ItemCollectionMetrics is only returned if the request asked for it. If the table
does not have any local secondary indexes, this information is not returned in
the response.

Each ItemCollectionMetrics element consists of:

 &amp;#42; ItemCollectionKey - The partition key value of the item collection. This is
   the same as the partition key value of the item itself.
   
   
 * SizeEstimateRange - An estimate of item collection size, in gigabytes. This
   value is a two-element array containing a lower bound and an upper bound for
   the estimate. The estimate includes the size of all the items in the table,
   plus the size of all attributes projected into all of the local secondary
   indexes on that table. Use this estimate to measure whether a local secondary
   index is approaching its size limit.
   
   The estimate is subject to change over time; therefore, do not rely on the
   precision or accuracy of the estimate. **/
        ItemCollectionMetrics?: ItemCollectionMetrics;
    }
    export interface PutRequest {
        /** A map of attribute name to attribute values, representing the primary key of an
item to be processed by PutItem . All of the table&#x27;s primary key attributes must
be specified, and their data types must match those of the table&#x27;s key schema.
If any attributes are present in the item which are part of an index key schema
for the table, their types must match the index key schema. **/
        Item: PutItemInputAttributeMap;
    }
    export interface QueryInput {
        /** The name of the table containing the requested items. **/
        TableName: TableName;
        /** The name of an index to query. This index can be any local secondary index or
global secondary index on the table. Note that if you use the IndexName 
parameter, you must also provide TableName. **/
        IndexName?: IndexName;
        /** The attributes to be returned in the result. You can retrieve all item
attributes, specific item attributes, the count of matching items, or in the
case of an index, some or all of the attributes projected into the index.

 &amp;#42; ALL_ATTRIBUTES - Returns all of the item attributes from the specified table
   or index. If you query a local secondary index, then for each matching item
   in the index DynamoDB will fetch the entire item from the parent table. If
   the index is configured to project all item attributes, then all of the data
   can be obtained from the local secondary index, and no fetching is required.
   
   
 * ALL_PROJECTED_ATTRIBUTES - Allowed only when querying an index. Retrieves all
   attributes that have been projected into the index. If the index is
   configured to project all attributes, this return value is equivalent to
   specifying ALL_ATTRIBUTES .
   
   
 * COUNT - Returns the number of matching items, rather than the matching items
   themselves.
   
   
 * SPECIFIC_ATTRIBUTES - Returns only the attributes listed in AttributesToGet .
   This return value is equivalent to specifying AttributesToGet without
   specifying any value for Select .
   
   If you query a local secondary index and request only attributes that are
   projected into that index, the operation will read only the index and not the
   table. If any of the requested attributes are not projected into the local
   secondary index, DynamoDB will fetch each of these attributes from the parent
   table. This extra fetching incurs additional throughput cost and latency.
   
   If you query a global secondary index, you can only request attributes that
   are projected into the index. Global secondary index queries cannot fetch
   attributes from the parent table.
   
   

If neither Select nor AttributesToGet are specified, DynamoDB defaults to 
ALL_ATTRIBUTES when accessing a table, and ALL_PROJECTED_ATTRIBUTES when
accessing an index. You cannot use both Select and AttributesToGet together in a
single request, unless the value for Select is SPECIFIC_ATTRIBUTES . (This usage
is equivalent to specifying AttributesToGet without any value for Select .)

If you use the ProjectionExpression parameter, then the value for Select can
only be SPECIFIC_ATTRIBUTES . Any other value for Select will return an error. **/
        Select?: Select;
        /** This is a legacy parameter, for backward compatibility. New applications should
use ProjectionExpression instead. Do not combine legacy parameters and
expression parameters in a single API call; otherwise, DynamoDB will return a 
ValidationException exception.

This parameter allows you to retrieve attributes of type List or Map; however,
it cannot retrieve individual elements within a List or a Map.

The names of one or more attributes to retrieve. If no attribute names are
provided, then all attributes will be returned. If any of the requested
attributes are not found, they will not appear in the result.

Note that AttributesToGet has no effect on provisioned throughput consumption.
DynamoDB determines capacity units consumed based on item size, not on the
amount of data that is returned to an application.

You cannot use both AttributesToGet and Select together in a Query request, 
unless the value for Select is SPECIFIC_ATTRIBUTES . (This usage is equivalent
to specifying AttributesToGet without any value for Select .)

If you query a local secondary index and request only attributes that are
projected into that index, the operation will read only the index and not the
table. If any of the requested attributes are not projected into the local
secondary index, DynamoDB will fetch each of these attributes from the parent
table. This extra fetching incurs additional throughput cost and latency.

If you query a global secondary index, you can only request attributes that are
projected into the index. Global secondary index queries cannot fetch attributes
from the parent table. **/
        AttributesToGet?: AttributeNameList;
        /** The maximum number of items to evaluate (not necessarily the number of matching
items). If DynamoDB processes the number of items up to the limit while
processing the results, it stops the operation and returns the matching values
up to that point, and a key in LastEvaluatedKey to apply in a subsequent
operation, so that you can pick up where you left off. Also, if the processed
data set size exceeds 1 MB before DynamoDB reaches this limit, it stops the
operation and returns the matching values up to the limit, and a key in 
LastEvaluatedKey to apply in a subsequent operation to continue the operation.
For more information, see Query and Scan
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/QueryAndScan.html] 
in the Amazon DynamoDB Developer Guide . **/
        Limit?: PositiveIntegerObject;
        /** Determines the read consistency model: If set to true , then the operation uses
strongly consistent reads; otherwise, the operation uses eventually consistent
reads.

Strongly consistent reads are not supported on global secondary indexes. If you
query a global secondary index with ConsistentRead set to true , you will
receive a ValidationException . **/
        ConsistentRead?: ConsistentRead;
        /** This is a legacy parameter, for backward compatibility. New applications should
use KeyConditionExpression instead. Do not combine legacy parameters and
expression parameters in a single API call; otherwise, DynamoDB will return a 
ValidationException exception.

The selection criteria for the query. For a query on a table, you can have
conditions only on the table primary key attributes. You must provide the
partition key name and value as an EQ condition. You can optionally provide a
second condition, referring to the sort key.

If you don&#x27;t provide a sort key condition, all of the items that match the
partition key will be retrieved. If a FilterExpression or QueryFilter is
present, it will be applied after the items are retrieved.

For a query on an index, you can have conditions only on the index key
attributes. You must provide the index partition key name and value as an EQ 
condition. You can optionally provide a second condition, referring to the index
sort key.

Each KeyConditions element consists of an attribute name to compare, along with
the following:

 &amp;#42; AttributeValueList - One or more values to evaluate against the supplied
   attribute. The number of values in the list depends on the ComparisonOperator 
   being used.
   
   For type Number, value comparisons are numeric.
   
   String value comparisons for greater than, equals, or less than are based on
   ASCII character code values. For example, a is greater than A , and a is
   greater than B . For a list of code values, see 
   http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters
   [http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters] .
   
   For Binary, DynamoDB treats each byte of the binary data as unsigned when it
   compares binary values.
   
   
 * ComparisonOperator - A comparator for evaluating attributes, for example,
   equals, greater than, less than, and so on.
   
   For KeyConditions , only the following comparison operators are supported:
   
   EQ | LE | LT | GE | GT | BEGINS_WITH | BETWEEN
   
   The following are descriptions of these comparison operators.
   
    * EQ : Equal.
      
      AttributeValueList can contain only one AttributeValue of type String,
      Number, or Binary (not a set type). If an item contains an AttributeValue 
      element of a different type than the one specified in the request, the
      value does not match. For example, {&quot;S&quot;:&quot;6&quot;} does not equal {&quot;N&quot;:&quot;6&quot;} .
      Also, {&quot;N&quot;:&quot;6&quot;} does not equal {&quot;NS&quot;:[&quot;6&quot;, &quot;2&quot;, &quot;1&quot;]} .
      
      
      
      
    * LE : Less than or equal.
      
      AttributeValueList can contain only one AttributeValue element of type
      String, Number, or Binary (not a set type). If an item contains an 
      AttributeValue element of a different type than the one provided in the
      request, the value does not match. For example, {&quot;S&quot;:&quot;6&quot;} does not equal 
      {&quot;N&quot;:&quot;6&quot;} . Also, {&quot;N&quot;:&quot;6&quot;} does not compare to {&quot;NS&quot;:[&quot;6&quot;, &quot;2&quot;, &quot;1&quot;]} .
      
      
      
      
    * LT : Less than.
      
      AttributeValueList can contain only one AttributeValue of type String,
      Number, or Binary (not a set type). If an item contains an AttributeValue 
      element of a different type than the one provided in the request, the
      value does not match. For example, {&quot;S&quot;:&quot;6&quot;} does not equal {&quot;N&quot;:&quot;6&quot;} .
      Also, {&quot;N&quot;:&quot;6&quot;} does not compare to {&quot;NS&quot;:[&quot;6&quot;, &quot;2&quot;, &quot;1&quot;]} .
      
      
      
      
    * GE : Greater than or equal.
      
      AttributeValueList can contain only one AttributeValue element of type
      String, Number, or Binary (not a set type). If an item contains an 
      AttributeValue element of a different type than the one provided in the
      request, the value does not match. For example, {&quot;S&quot;:&quot;6&quot;} does not equal 
      {&quot;N&quot;:&quot;6&quot;} . Also, {&quot;N&quot;:&quot;6&quot;} does not compare to {&quot;NS&quot;:[&quot;6&quot;, &quot;2&quot;, &quot;1&quot;]} .
      
      
      
      
    * GT : Greater than.
      
      AttributeValueList can contain only one AttributeValue element of type
      String, Number, or Binary (not a set type). If an item contains an 
      AttributeValue element of a different type than the one provided in the
      request, the value does not match. For example, {&quot;S&quot;:&quot;6&quot;} does not equal 
      {&quot;N&quot;:&quot;6&quot;} . Also, {&quot;N&quot;:&quot;6&quot;} does not compare to {&quot;NS&quot;:[&quot;6&quot;, &quot;2&quot;, &quot;1&quot;]} .
      
      
      
      
    * BEGINS_WITH : Checks for a prefix.
      
      AttributeValueList can contain only one AttributeValue of type String or
      Binary (not a Number or a set type). The target attribute of the
      comparison must be of type String or Binary (not a Number or a set type).
      
      
      
      
    * BETWEEN : Greater than or equal to the first value, and less than or equal
      to the second value.
      
      AttributeValueList must contain two AttributeValue elements of the same
      type, either String, Number, or Binary (not a set type). A target
      attribute matches if the target value is greater than, or equal to, the
      first element and less than, or equal to, the second element. If an item
      contains an AttributeValue element of a different type than the one
      provided in the request, the value does not match. For example, {&quot;S&quot;:&quot;6&quot;} 
      does not compare to {&quot;N&quot;:&quot;6&quot;} . Also, {&quot;N&quot;:&quot;6&quot;} does not compare to 
      {&quot;NS&quot;:[&quot;6&quot;, &quot;2&quot;, &quot;1&quot;]}
      
      
   
   

For usage examples of AttributeValueList and ComparisonOperator , see Legacy
Conditional Parameters
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.html] 
in the Amazon DynamoDB Developer Guide . **/
        KeyConditions?: KeyConditions;
        /** This is a legacy parameter, for backward compatibility. New applications should
use FilterExpression instead. Do not combine legacy parameters and expression
parameters in a single API call; otherwise, DynamoDB will return a 
ValidationException exception.

A condition that evaluates the query results after the items are read and
returns only the desired values.

This parameter does not support attributes of type List or Map.

A QueryFilter is applied after the items have already been read; the process of
filtering does not consume any additional read capacity units.

If you provide more than one condition in the QueryFilter map, then by default
all of the conditions must evaluate to true. In other words, the conditions are
ANDed together. (You can use the ConditionalOperator parameter to OR the
conditions instead. If you do this, then at least one of the conditions must
evaluate to true, rather than all of them.)

Note that QueryFilter does not allow key attributes. You cannot define a filter
condition on a partition key or a sort key.

Each QueryFilter element consists of an attribute name to compare, along with
the following:

 &amp;#42; AttributeValueList - One or more values to evaluate against the supplied
   attribute. The number of values in the list depends on the operator specified
   in ComparisonOperator .
   
   For type Number, value comparisons are numeric.
   
   String value comparisons for greater than, equals, or less than are based on
   ASCII character code values. For example, a is greater than A , and a is
   greater than B . For a list of code values, see 
   http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters
   [http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters] .
   
   For type Binary, DynamoDB treats each byte of the binary data as unsigned
   when it compares binary values.
   
   For information on specifying data types in JSON, see JSON Data Format
   [http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DataFormat.html] 
   in the Amazon DynamoDB Developer Guide .
   
   
 * ComparisonOperator - A comparator for evaluating attributes. For example,
   equals, greater than, less than, etc.
   
   The following comparison operators are available:
   
   EQ | NE | LE | LT | GE | GT | NOT_NULL | NULL | CONTAINS | NOT_CONTAINS |
   BEGINS_WITH | IN | BETWEEN
   
   For complete descriptions of all comparison operators, see the Condition
   [http://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Condition.html] 
   data type. **/
        QueryFilter?: FilterConditionMap;
        /** This is a legacy parameter, for backward compatibility. New applications should
use FilterExpression instead. Do not combine legacy parameters and expression
parameters in a single API call; otherwise, DynamoDB will return a 
ValidationException exception.

A logical operator to apply to the conditions in a QueryFilter map:

 &amp;#42; AND - If all of the conditions evaluate to true, then the entire map
   evaluates to true.
   
   
 * OR - If at least one of the conditions evaluate to true, then the entire map
   evaluates to true.
   
   

If you omit ConditionalOperator , then AND is the default.

The operation will succeed only if the entire map evaluates to true.

This parameter does not support attributes of type List or Map. **/
        ConditionalOperator?: ConditionalOperator;
        /** Specifies the order for index traversal: If true (default), the traversal is
performed in ascending order; if false , the traversal is performed in
descending order.

Items with the same partition key value are stored in sorted order by sort key.
If the sort key data type is Number, the results are stored in numeric order.
For type String, the results are stored in order of ASCII character code values.
For type Binary, DynamoDB treats each byte of the binary data as unsigned.

If ScanIndexForward is true , DynamoDB returns the results in the order in which
they are stored (by sort key value). This is the default behavior. If 
ScanIndexForward is false , DynamoDB reads the results in reverse order by sort
key value, and then returns the results to the client. **/
        ScanIndexForward?: BooleanObject;
        /** The primary key of the first item that this operation will evaluate. Use the
value that was returned for LastEvaluatedKey in the previous operation.

The data type for ExclusiveStartKey must be String, Number or Binary. No set
data types are allowed. **/
        ExclusiveStartKey?: Key;
        ReturnConsumedCapacity?: ReturnConsumedCapacity;
        /** A string that identifies one or more attributes to retrieve from the table.
These attributes can include scalars, sets, or elements of a JSON document. The
attributes in the expression must be separated by commas.

If no attribute names are specified, then all attributes will be returned. If
any of the requested attributes are not found, they will not appear in the
result.

For more information, see Accessing Item Attributes
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html] 
in the Amazon DynamoDB Developer Guide .

ProjectionExpression replaces the legacy AttributesToGet parameter. **/
        ProjectionExpression?: ProjectionExpression;
        /** A string that contains conditions that DynamoDB applies after the Query 
operation, but before the data is returned to you. Items that do not satisfy the 
FilterExpression criteria are not returned.

A FilterExpression is applied after the items have already been read; the
process of filtering does not consume any additional read capacity units.

For more information, see Filter Expressions
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/QueryAndScan.html#FilteringResults] 
in the Amazon DynamoDB Developer Guide .

FilterExpression replaces the legacy QueryFilter and ConditionalOperator 
parameters. **/
        FilterExpression?: ConditionExpression;
        /** The condition that specifies the key value(s) for items to be retrieved by the 
Query action.

The condition must perform an equality test on a single partition key value. The
condition can also perform one of several comparison tests on a single sort key
value. Query can use KeyConditionExpression to retrieve one item with a given
partition key value and sort key value, or several items that have the same
partition key value but different sort key values.

The partition key equality test is required, and must be specified in the
following format:

partitionKeyName = :partitionkeyval

If you also want to provide a condition for the sort key, it must be combined
using AND with the condition for the sort key. Following is an example, using
the = comparison operator for the sort key:

partitionKeyName = :partitionkeyval AND sortKeyName = :sortkeyval

Valid comparisons for the sort key condition are as follows:

 &amp;#42; sortKeyName = :sortkeyval - true if the sort key value is equal to 
   :sortkeyval .
   
   
 * sortKeyName :sortkeyval - true if the sort key value is less than :sortkeyval 
   .
   
   
 * sortKeyName = :sortkeyval - true if the sort key value is less than or equal
   to :sortkeyval .
   
   
 * sortKeyName :sortkeyval - true if the sort key value is greater than 
   :sortkeyval .
   
   
 * sortKeyName = :sortkeyval - true if the sort key value is greater than or
   equal to :sortkeyval .
   
   
 * sortKeyName BETWEEN :sortkeyval1 AND :sortkeyval2 - true if the sort key
   value is greater than or equal to :sortkeyval1 , and less than or equal to 
   :sortkeyval2 .
   
   
 * begins_with ( sortKeyName , :sortkeyval ) - true if the sort key value begins
   with a particular operand. (You cannot use this function with a sort key that
   is of type Number.) Note that the function name begins_with is
   case-sensitive.
   
   

Use the ExpressionAttributeValues parameter to replace tokens such as 
:partitionval and :sortval with actual values at runtime.

You can optionally use the ExpressionAttributeNames parameter to replace the
names of the partition key and sort key with placeholder tokens. This option
might be necessary if an attribute name conflicts with a DynamoDB reserved word.
For example, the following KeyConditionExpression parameter causes an error
because Size is a reserved word:

 * Size = :myval

To work around this, define a placeholder (such a #S ) to represent the
attribute name Size . KeyConditionExpression then is as follows:

 * #S = :myval

For a list of reserved words, see Reserved Words
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html] 
in the Amazon DynamoDB Developer Guide .

For more information on ExpressionAttributeNames and ExpressionAttributeValues ,
see Using Placeholders for Attribute Names and Values
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ExpressionPlaceholders.html] 
in the Amazon DynamoDB Developer Guide .

KeyConditionExpression replaces the legacy KeyConditions parameter. **/
        KeyConditionExpression?: KeyExpression;
        /** One or more substitution tokens for attribute names in an expression. The
following are some use cases for using ExpressionAttributeNames :

 &amp;#42; To access an attribute whose name conflicts with a DynamoDB reserved word.
   
   
 * To create a placeholder for repeating occurrences of an attribute name in an
   expression.
   
   
 * To prevent special characters in an attribute name from being misinterpreted
   in an expression.
   
   

Use the # character in an expression to dereference an attribute name. For
example, consider the following attribute name:

 * Percentile
   
   

The name of this attribute conflicts with a reserved word, so it cannot be used
directly in an expression. (For the complete list of reserved words, see 
Reserved Words
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html] 
in the Amazon DynamoDB Developer Guide ). To work around this, you could specify
the following for ExpressionAttributeNames :

 * {&quot;#P&quot;:&quot;Percentile&quot;}
   
   

You could then use this substitution in an expression, as in this example:

 * #P = :val
   
   

Tokens that begin with the : character are expression attribute values , which
are placeholders for the actual value at runtime.

For more information on expression attribute names, see Accessing Item
Attributes
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html] 
in the Amazon DynamoDB Developer Guide . **/
        ExpressionAttributeNames?: ExpressionAttributeNameMap;
        /** One or more values that can be substituted in an expression.

Use the : (colon) character in an expression to dereference an attribute value.
For example, suppose that you wanted to check whether the value of the 
ProductStatus attribute was one of the following:

Available | Backordered | Discontinued

You would first need to specify ExpressionAttributeValues as follows:

{ &quot;:avail&quot;:{&quot;S&quot;:&quot;Available&quot;}, &quot;:back&quot;:{&quot;S&quot;:&quot;Backordered&quot;},
&quot;:disc&quot;:{&quot;S&quot;:&quot;Discontinued&quot;} }

You could then use these values in an expression, such as this:

ProductStatus IN (:avail, :back, :disc)

For more information on expression attribute values, see Specifying Conditions
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.SpecifyingConditions.html] 
in the Amazon DynamoDB Developer Guide . **/
        ExpressionAttributeValues?: ExpressionAttributeValueMap;
    }
    export interface QueryOutput {
        /** An array of item attributes that match the query criteria. Each element in this
array consists of an attribute name and the value for that attribute. **/
        Items?: ItemList;
        /** The number of items in the response.

If you used a QueryFilter in the request, then Count is the number of items
returned after the filter was applied, and ScannedCount is the number of
matching items before the filter was applied.

If you did not use a filter in the request, then Count and ScannedCount are the
same. **/
        Count?: Integer;
        /** The number of items evaluated, before any QueryFilter is applied. A high 
ScannedCount value with few, or no, Count results indicates an inefficient Query 
operation. For more information, see Count and ScannedCount
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/QueryAndScan.html#Count] 
in the Amazon DynamoDB Developer Guide .

If you did not use a filter in the request, then ScannedCount is the same as 
Count . **/
        ScannedCount?: Integer;
        /** The primary key of the item where the operation stopped, inclusive of the
previous result set. Use this value to start a new operation, excluding this
value in the new request.

If LastEvaluatedKey is empty, then the &quot;last page&quot; of results has been processed
and there is no more data to be retrieved.

If LastEvaluatedKey is not empty, it does not necessarily mean that there is
more data in the result set. The only way to know when you have reached the end
of the result set is when LastEvaluatedKey is empty. **/
        LastEvaluatedKey?: Key;
        ConsumedCapacity?: ConsumedCapacity;
    }
    export interface ResourceInUseException {
        /** The resource which is being attempted to be changed is in use. **/
        message?: ErrorMessage;
    }
    export interface ResourceNotFoundException {
        /** The resource which is being requested does not exist. **/
        message?: ErrorMessage;
    }
    export interface ScanInput {
        /** The name of the table containing the requested items; or, if you provide 
IndexName , the name of the table to which that index belongs. **/
        TableName: TableName;
        /** The name of a secondary index to scan. This index can be any local secondary
index or global secondary index. Note that if you use the IndexName parameter,
you must also provide TableName . **/
        IndexName?: IndexName;
        /** This is a legacy parameter, for backward compatibility. New applications should
use ProjectionExpression instead. Do not combine legacy parameters and
expression parameters in a single API call; otherwise, DynamoDB will return a 
ValidationException exception.

This parameter allows you to retrieve attributes of type List or Map; however,
it cannot retrieve individual elements within a List or a Map.

The names of one or more attributes to retrieve. If no attribute names are
provided, then all attributes will be returned. If any of the requested
attributes are not found, they will not appear in the result.

Note that AttributesToGet has no effect on provisioned throughput consumption.
DynamoDB determines capacity units consumed based on item size, not on the
amount of data that is returned to an application. **/
        AttributesToGet?: AttributeNameList;
        /** The maximum number of items to evaluate (not necessarily the number of matching
items). If DynamoDB processes the number of items up to the limit while
processing the results, it stops the operation and returns the matching values
up to that point, and a key in LastEvaluatedKey to apply in a subsequent
operation, so that you can pick up where you left off. Also, if the processed
data set size exceeds 1 MB before DynamoDB reaches this limit, it stops the
operation and returns the matching values up to the limit, and a key in 
LastEvaluatedKey to apply in a subsequent operation to continue the operation.
For more information, see Query and Scan
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/QueryAndScan.html] 
in the Amazon DynamoDB Developer Guide . **/
        Limit?: PositiveIntegerObject;
        /** The attributes to be returned in the result. You can retrieve all item
attributes, specific item attributes, or the count of matching items.

 &amp;#42; ALL_ATTRIBUTES - Returns all of the item attributes.
   
   
 * COUNT - Returns the number of matching items, rather than the matching items
   themselves.
   
   
 * SPECIFIC_ATTRIBUTES - Returns only the attributes listed in AttributesToGet .
   This return value is equivalent to specifying AttributesToGet without
   specifying any value for Select .
   
   

If neither Select nor AttributesToGet are specified, DynamoDB defaults to 
ALL_ATTRIBUTES . You cannot use both AttributesToGet and Select together in a
single request, unless the value for Select is SPECIFIC_ATTRIBUTES . (This usage
is equivalent to specifying AttributesToGet without any value for Select .) **/
        Select?: Select;
        /** This is a legacy parameter, for backward compatibility. New applications should
use FilterExpression instead. Do not combine legacy parameters and expression
parameters in a single API call; otherwise, DynamoDB will return a 
ValidationException exception.

A condition that evaluates the scan results and returns only the desired values.

This parameter does not support attributes of type List or Map.

If you specify more than one condition in the ScanFilter map, then by default
all of the conditions must evaluate to true. In other words, the conditions are
ANDed together. (You can use the ConditionalOperator parameter to OR the
conditions instead. If you do this, then at least one of the conditions must
evaluate to true, rather than all of them.)

Each ScanFilter element consists of an attribute name to compare, along with the
following:

 &amp;#42; AttributeValueList - One or more values to evaluate against the supplied
   attribute. The number of values in the list depends on the operator specified
   in ComparisonOperator .
   
   For type Number, value comparisons are numeric.
   
   String value comparisons for greater than, equals, or less than are based on
   ASCII character code values. For example, a is greater than A , and a is
   greater than B . For a list of code values, see 
   http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters
   [http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters] .
   
   For Binary, DynamoDB treats each byte of the binary data as unsigned when it
   compares binary values.
   
   For information on specifying data types in JSON, see JSON Data Format
   [http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DataFormat.html] 
   in the Amazon DynamoDB Developer Guide .
   
   
 * ComparisonOperator - A comparator for evaluating attributes. For example,
   equals, greater than, less than, etc.
   
   The following comparison operators are available:
   
   EQ | NE | LE | LT | GE | GT | NOT_NULL | NULL | CONTAINS | NOT_CONTAINS |
   BEGINS_WITH | IN | BETWEEN
   
   For complete descriptions of all comparison operators, see Condition
   [http://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Condition.html] 
   . **/
        ScanFilter?: FilterConditionMap;
        /** This is a legacy parameter, for backward compatibility. New applications should
use FilterExpression instead. Do not combine legacy parameters and expression
parameters in a single API call; otherwise, DynamoDB will return a 
ValidationException exception.

A logical operator to apply to the conditions in a ScanFilter map:

 &amp;#42; AND - If all of the conditions evaluate to true, then the entire map
   evaluates to true.
   
   
 * OR - If at least one of the conditions evaluate to true, then the entire map
   evaluates to true.
   
   

If you omit ConditionalOperator , then AND is the default.

The operation will succeed only if the entire map evaluates to true.

This parameter does not support attributes of type List or Map. **/
        ConditionalOperator?: ConditionalOperator;
        /** The primary key of the first item that this operation will evaluate. Use the
value that was returned for LastEvaluatedKey in the previous operation.

The data type for ExclusiveStartKey must be String, Number or Binary. No set
data types are allowed.

In a parallel scan, a Scan request that includes ExclusiveStartKey must specify
the same segment whose previous Scan returned the corresponding value of 
LastEvaluatedKey . **/
        ExclusiveStartKey?: Key;
        ReturnConsumedCapacity?: ReturnConsumedCapacity;
        /** For a parallel Scan request, TotalSegments represents the total number of
segments into which the Scan operation will be divided. The value of 
TotalSegments corresponds to the number of application workers that will perform
the parallel scan. For example, if you want to use four application threads to
scan a table or an index, specify a TotalSegments value of 4.

The value for TotalSegments must be greater than or equal to 1, and less than or
equal to 1000000. If you specify a TotalSegments value of 1, the Scan operation
will be sequential rather than parallel.

If you specify TotalSegments , you must also specify Segment . **/
        TotalSegments?: ScanTotalSegments;
        /** For a parallel Scan request, Segment identifies an individual segment to be
scanned by an application worker.

Segment IDs are zero-based, so the first segment is always 0. For example, if
you want to use four application threads to scan a table or an index, then the
first thread specifies a Segment value of 0, the second thread specifies 1, and
so on.

The value of LastEvaluatedKey returned from a parallel Scan request must be used
as ExclusiveStartKey with the same segment ID in a subsequent Scan operation.

The value for Segment must be greater than or equal to 0, and less than the
value provided for TotalSegments .

If you provide Segment , you must also provide TotalSegments . **/
        Segment?: ScanSegment;
        /** A string that identifies one or more attributes to retrieve from the specified
table or index. These attributes can include scalars, sets, or elements of a
JSON document. The attributes in the expression must be separated by commas.

If no attribute names are specified, then all attributes will be returned. If
any of the requested attributes are not found, they will not appear in the
result.

For more information, see Accessing Item Attributes
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html] 
in the Amazon DynamoDB Developer Guide .

ProjectionExpression replaces the legacy AttributesToGet parameter. **/
        ProjectionExpression?: ProjectionExpression;
        /** A string that contains conditions that DynamoDB applies after the Scan 
operation, but before the data is returned to you. Items that do not satisfy the 
FilterExpression criteria are not returned.

A FilterExpression is applied after the items have already been read; the
process of filtering does not consume any additional read capacity units.

For more information, see Filter Expressions
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/QueryAndScan.html#FilteringResults] 
in the Amazon DynamoDB Developer Guide .

FilterExpression replaces the legacy ScanFilter and ConditionalOperator 
parameters. **/
        FilterExpression?: ConditionExpression;
        /** One or more substitution tokens for attribute names in an expression. The
following are some use cases for using ExpressionAttributeNames :

 &amp;#42; To access an attribute whose name conflicts with a DynamoDB reserved word.
   
   
 * To create a placeholder for repeating occurrences of an attribute name in an
   expression.
   
   
 * To prevent special characters in an attribute name from being misinterpreted
   in an expression.
   
   

Use the # character in an expression to dereference an attribute name. For
example, consider the following attribute name:

 * Percentile
   
   

The name of this attribute conflicts with a reserved word, so it cannot be used
directly in an expression. (For the complete list of reserved words, see 
Reserved Words
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html] 
in the Amazon DynamoDB Developer Guide ). To work around this, you could specify
the following for ExpressionAttributeNames :

 * {&quot;#P&quot;:&quot;Percentile&quot;}
   
   

You could then use this substitution in an expression, as in this example:

 * #P = :val
   
   

Tokens that begin with the : character are expression attribute values , which
are placeholders for the actual value at runtime.

For more information on expression attribute names, see Accessing Item
Attributes
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html] 
in the Amazon DynamoDB Developer Guide . **/
        ExpressionAttributeNames?: ExpressionAttributeNameMap;
        /** One or more values that can be substituted in an expression.

Use the : (colon) character in an expression to dereference an attribute value.
For example, suppose that you wanted to check whether the value of the 
ProductStatus attribute was one of the following:

Available | Backordered | Discontinued

You would first need to specify ExpressionAttributeValues as follows:

{ &quot;:avail&quot;:{&quot;S&quot;:&quot;Available&quot;}, &quot;:back&quot;:{&quot;S&quot;:&quot;Backordered&quot;},
&quot;:disc&quot;:{&quot;S&quot;:&quot;Discontinued&quot;} }

You could then use these values in an expression, such as this:

ProductStatus IN (:avail, :back, :disc)

For more information on expression attribute values, see Specifying Conditions
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.SpecifyingConditions.html] 
in the Amazon DynamoDB Developer Guide . **/
        ExpressionAttributeValues?: ExpressionAttributeValueMap;
        /** A Boolean value that determines the read consistency model during the scan:

 &amp;#42; If ConsistentRead is false , then the data returned from Scan might not
   contain the results from other recently completed write operations (PutItem,
   UpdateItem or DeleteItem).
   
   
 * If ConsistentRead is true , then all of the write operations that completed
   before the Scan began are guaranteed to be contained in the Scan response.
   
   

The default setting for ConsistentRead is false .

The ConsistentRead parameter is not supported on global secondary indexes. If
you scan a global secondary index with ConsistentRead set to true, you will
receive a ValidationException . **/
        ConsistentRead?: ConsistentRead;
    }
    export interface ScanOutput {
        /** An array of item attributes that match the scan criteria. Each element in this
array consists of an attribute name and the value for that attribute. **/
        Items?: ItemList;
        /** The number of items in the response.

If you set ScanFilter in the request, then Count is the number of items returned
after the filter was applied, and ScannedCount is the number of matching items
before the filter was applied.

If you did not use a filter in the request, then Count is the same as 
ScannedCount . **/
        Count?: Integer;
        /** The number of items evaluated, before any ScanFilter is applied. A high 
ScannedCount value with few, or no, Count results indicates an inefficient Scan 
operation. For more information, see Count and ScannedCount
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/QueryAndScan.html#Count] 
in the Amazon DynamoDB Developer Guide .

If you did not use a filter in the request, then ScannedCount is the same as 
Count . **/
        ScannedCount?: Integer;
        /** The primary key of the item where the operation stopped, inclusive of the
previous result set. Use this value to start a new operation, excluding this
value in the new request.

If LastEvaluatedKey is empty, then the &quot;last page&quot; of results has been processed
and there is no more data to be retrieved.

If LastEvaluatedKey is not empty, it does not necessarily mean that there is
more data in the result set. The only way to know when you have reached the end
of the result set is when LastEvaluatedKey is empty. **/
        LastEvaluatedKey?: Key;
        ConsumedCapacity?: ConsumedCapacity;
    }
    export interface StreamSpecification {
        /** Indicates whether DynamoDB Streams is enabled (true) or disabled (false) on the
table. **/
        StreamEnabled?: StreamEnabled;
        /** The DynamoDB Streams settings for the table. These settings consist of:

 &amp;#42; StreamEnabled - Indicates whether DynamoDB Streams is enabled (true) or
   disabled (false) on the table.
   
   
 * StreamViewType - When an item in the table is modified, StreamViewType 
   determines what information is written to the stream for this table. Valid
   values for StreamViewType are:
   
    * KEYS_ONLY - Only the key attributes of the modified item are written to
      the stream.
      
      
    * NEW_IMAGE - The entire item, as it appears after it was modified, is
      written to the stream.
      
      
    * OLD_IMAGE - The entire item, as it appeared before it was modified, is
      written to the stream.
      
      
    * NEW_AND_OLD_IMAGES - Both the new and the old item images of the item are
      written to the stream. **/
        StreamViewType?: StreamViewType;
    }
    export interface TableDescription {
        /** An array of AttributeDefinition objects. Each of these objects describes one
attribute in the table and index key schema.

Each AttributeDefinition object in this array is composed of:

 &amp;#42; AttributeName - The name of the attribute.
   
   
 * AttributeType - The data type for the attribute. **/
        AttributeDefinitions?: AttributeDefinitions;
        /** The name of the table. **/
        TableName?: TableName;
        /** The primary key structure for the table. Each KeySchemaElement consists of:

 &amp;#42; AttributeName - The name of the attribute.
   
   
 * KeyType - The role of the attribute:
   
   . * HASH - partition key
      
      
    * RANGE - sort key
      
      
   
   The partition key of an item is also known as its hash attribute . The term
   &quot;hash attribute&quot; derives from DynamoDB&#x27; usage of an internal hash function to
   evenly distribute data items across partitions, based on their partition key
   values.
   
   The sort key of an item is also known as its range attribute . The term
   &quot;range attribute&quot; derives from the way DynamoDB stores items with the same
   partition key physically close together, in sorted order by the sort key
   value.
   
   

For more information about primary keys, see Primary Key
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DataModel.html#DataModelPrimaryKey] 
in the Amazon DynamoDB Developer Guide . **/
        KeySchema?: KeySchema;
        /** The current state of the table:

 &amp;#42; CREATING - The table is being created.
   
   
 * UPDATING - The table is being updated.
   
   
 * DELETING - The table is being deleted.
   
   
 * ACTIVE - The table is ready for use. **/
        TableStatus?: TableStatus;
        /** The date and time when the table was created, in UNIX epoch time
[http://www.epochconverter.com/] format. **/
        CreationDateTime?: Date;
        /** The provisioned throughput settings for the table, consisting of read and write
capacity units, along with data about increases and decreases. **/
        ProvisionedThroughput?: ProvisionedThroughputDescription;
        /** The total size of the specified table, in bytes. DynamoDB updates this value
approximately every six hours. Recent changes might not be reflected in this
value. **/
        TableSizeBytes?: Long;
        /** The number of items in the specified table. DynamoDB updates this value
approximately every six hours. Recent changes might not be reflected in this
value. **/
        ItemCount?: Long;
        /** The Amazon Resource Name (ARN) that uniquely identifies the table. **/
        TableArn?: String;
        /** Represents one or more local secondary indexes on the table. Each index is
scoped to a given partition key value. Tables with one or more local secondary
indexes are subject to an item collection size limit, where the amount of data
within a given item collection cannot exceed 10 GB. Each element is composed of:

 &amp;#42; IndexName - The name of the local secondary index.
   
   
 * KeySchema - Specifies the complete index key schema. The attribute names in
   the key schema must be between 1 and 255 characters (inclusive). The key
   schema must begin with the same partition key as the table.
   
   
 * Projection - Specifies attributes that are copied (projected) from the table
   into the index. These are in addition to the primary key attributes and index
   key attributes, which are automatically projected. Each attribute
   specification is composed of:
   
    * ProjectionType - One of the following:
      
       * KEYS_ONLY - Only the index and primary keys are projected into the
         index.
         
         
       * INCLUDE - Only the specified table attributes are projected into the
         index. The list of projected attributes are in NonKeyAttributes .
         
         
       * ALL - All of the table attributes are projected into the index.
         
         
      
      
    * NonKeyAttributes - A list of one or more non-key attribute names that are
      projected into the secondary index. The total count of attributes provided
      in NonKeyAttributes , summed across all of the secondary indexes, must not
      exceed 20. If you project the same attribute into two different indexes,
      this counts as two distinct attributes when determining the total.
      
      
   
   
 * IndexSizeBytes - Represents the total size of the index, in bytes. DynamoDB
   updates this value approximately every six hours. Recent changes might not be
   reflected in this value.
   
   
 * ItemCount - Represents the number of items in the index. DynamoDB updates
   this value approximately every six hours. Recent changes might not be
   reflected in this value.
   
   

If the table is in the DELETING state, no information about indexes will be
returned. **/
        LocalSecondaryIndexes?: LocalSecondaryIndexDescriptionList;
        /** The global secondary indexes, if any, on the table. Each index is scoped to a
given partition key value. Each element is composed of:

 &amp;#42; Backfilling - If true, then the index is currently in the backfilling phase.
   Backfilling occurs only when a new global secondary index is added to the
   table; it is the process by which DynamoDB populates the new index with data
   from the table. (This attribute does not appear for indexes that were created
   during a CreateTable operation.)
   
   
 * IndexName - The name of the global secondary index.
   
   
 * IndexSizeBytes - The total size of the global secondary index, in bytes.
   DynamoDB updates this value approximately every six hours. Recent changes
   might not be reflected in this value.
   
   
 * IndexStatus - The current status of the global secondary index:
   
    * CREATING - The index is being created.
      
      
    * UPDATING - The index is being updated.
      
      
    * DELETING - The index is being deleted.
      
      
    * ACTIVE - The index is ready for use.
      
      
   
   
 * ItemCount - The number of items in the global secondary index. DynamoDB
   updates this value approximately every six hours. Recent changes might not be
   reflected in this value.
   
   
 * KeySchema - Specifies the complete index key schema. The attribute names in
   the key schema must be between 1 and 255 characters (inclusive). The key
   schema must begin with the same partition key as the table.
   
   
 * Projection - Specifies attributes that are copied (projected) from the table
   into the index. These are in addition to the primary key attributes and index
   key attributes, which are automatically projected. Each attribute
   specification is composed of:
   
    * ProjectionType - One of the following:
      
       * KEYS_ONLY - Only the index and primary keys are projected into the
         index.
         
         
       * INCLUDE - Only the specified table attributes are projected into the
         index. The list of projected attributes are in NonKeyAttributes .
         
         
       * ALL - All of the table attributes are projected into the index.
         
         
      
      
    * NonKeyAttributes - A list of one or more non-key attribute names that are
      projected into the secondary index. The total count of attributes provided
      in NonKeyAttributes , summed across all of the secondary indexes, must not
      exceed 20. If you project the same attribute into two different indexes,
      this counts as two distinct attributes when determining the total.
      
      
   
   
 * ProvisionedThroughput - The provisioned throughput settings for the global
   secondary index, consisting of read and write capacity units, along with data
   about increases and decreases.
   
   

If the table is in the DELETING state, no information about indexes will be
returned. **/
        GlobalSecondaryIndexes?: GlobalSecondaryIndexDescriptionList;
        /** The current DynamoDB Streams configuration for the table. **/
        StreamSpecification?: StreamSpecification;
        /** A timestamp, in ISO 8601 format, for this stream.

Note that LatestStreamLabel is not a unique identifier for the stream, because
it is possible that a stream from another table might have the same timestamp.
However, the combination of the following three elements is guaranteed to be
unique:

 &amp;#42; the AWS customer ID.
   
   
 * the table name.
   
   
 * the StreamLabel . **/
        LatestStreamLabel?: String;
        /** The Amazon Resource Name (ARN) that uniquely identifies the latest stream for
this table. **/
        LatestStreamArn?: StreamArn;
    }
    export interface UpdateGlobalSecondaryIndexAction {
        /** The name of the global secondary index to be updated. **/
        IndexName: IndexName;
        ProvisionedThroughput: ProvisionedThroughput;
    }
    export interface UpdateItemInput {
        /** The name of the table containing the item to update. **/
        TableName: TableName;
        /** The primary key of the item to be updated. Each element consists of an attribute
name and a value for that attribute.

For the primary key, you must provide all of the attributes. For example, with a
simple primary key, you only need to provide a value for the partition key. For
a composite primary key, you must provide values for both the partition key and
the sort key. **/
        Key: Key;
        /** This is a legacy parameter, for backward compatibility. New applications should
use UpdateExpression instead. Do not combine legacy parameters and expression
parameters in a single API call; otherwise, DynamoDB will return a 
ValidationException exception.

This parameter can be used for modifying top-level attributes; however, it does
not support individual list or map elements.

The names of attributes to be modified, the action to perform on each, and the
new value for each. If you are updating an attribute that is an index key
attribute for any indexes on that table, the attribute type must match the index
key type defined in the AttributesDefinition of the table description. You can
use UpdateItem to update any non-key attributes.

Attribute values cannot be null. String and Binary type attributes must have
lengths greater than zero. Set type attributes must not be empty. Requests with
empty values will be rejected with a ValidationException exception.

Each AttributeUpdates element consists of an attribute name to modify, along
with the following:

 &amp;#42; Value - The new value, if applicable, for this attribute.
   
   
 * Action - A value that specifies how to perform the update. This action is
   only valid for an existing attribute whose data type is Number or is a set;
   do not use ADD for other data types.
   
   If an item with the specified primary key is found in the table, the
   following values perform the following actions:
   
    * PUT - Adds the specified attribute to the item. If the attribute already
      exists, it is replaced by the new value.
      
      
    * DELETE - Removes the attribute and its value, if no value is specified for 
      DELETE . The data type of the specified value must match the existing
      value&#x27;s data type.
      
      If a set of values is specified, then those values are subtracted from the
      old set. For example, if the attribute value was the set [a,b,c] and the 
      DELETE action specifies [a,c] , then the final attribute value is [b] .
      Specifying an empty set is an error.
      
      
    * ADD - Adds the specified value to the item, if the attribute does not
      already exist. If the attribute does exist, then the behavior of ADD 
      depends on the data type of the attribute:
      
       * If the existing attribute is a number, and if Value is also a number,
         then Value is mathematically added to the existing attribute. If Value 
         is a negative number, then it is subtracted from the existing
         attribute.
         
         If you use ADD to increment or decrement a number value for an item
         that doesn&#x27;t exist before the update, DynamoDB uses 0 as the initial
         value.
         
         Similarly, if you use ADD for an existing item to increment or
         decrement an attribute value that doesn&#x27;t exist before the update,
         DynamoDB uses 0 as the initial value. For example, suppose that the
         item you want to update doesn&#x27;t have an attribute named itemcount , but
         you decide to ADD the number 3 to this attribute anyway. DynamoDB will
         create the itemcount attribute, set its initial value to 0 , and
         finally add 3 to it. The result will be a new itemcount attribute, with
         a value of 3 .
         
         
       * If the existing data type is a set, and if Value is also a set, then 
         Value is appended to the existing set. For example, if the attribute
         value is the set [1,2] , and the ADD action specified [3] , then the
         final attribute value is [1,2,3] . An error occurs if an ADD action is
         specified for a set attribute and the attribute type specified does not
         match the existing set type.
         
         Both sets must have the same primitive data type. For example, if the
         existing data type is a set of strings, Value must also be a set of
         strings.
         
         
      
      
   
   If no item with the specified key is found in the table, the following values
   perform the following actions:
   
    * PUT - Causes DynamoDB to create a new item with the specified primary key,
      and then adds the attribute.
      
      
    * DELETE - Nothing happens, because attributes cannot be deleted from a
      nonexistent item. The operation succeeds, but DynamoDB does not create a
      new item.
      
      
    * ADD - Causes DynamoDB to create an item with the supplied primary key and
      number (or set of numbers) for the attribute value. The only data types
      allowed are Number and Number Set.
      
      
   
   

If you provide any attributes that are part of an index key, then the data types
for those attributes must match those of the schema in the table&#x27;s attribute
definition. **/
        AttributeUpdates?: AttributeUpdates;
        /** This is a legacy parameter, for backward compatibility. New applications should
use ConditionExpression instead. Do not combine legacy parameters and expression
parameters in a single API call; otherwise, DynamoDB will return a 
ValidationException exception.

A map of attribute/condition pairs. Expected provides a conditional block for
the UpdateItem operation.

Each element of Expected consists of an attribute name, a comparison operator,
and one or more values. DynamoDB compares the attribute with the value(s) you
supplied, using the comparison operator. For each Expected element, the result
of the evaluation is either true or false.

If you specify more than one element in the Expected map, then by default all of
the conditions must evaluate to true. In other words, the conditions are ANDed
together. (You can use the ConditionalOperator parameter to OR the conditions
instead. If you do this, then at least one of the conditions must evaluate to
true, rather than all of them.)

If the Expected map evaluates to true, then the conditional operation succeeds;
otherwise, it fails.

Expected contains the following:

 &amp;#42; AttributeValueList - One or more values to evaluate against the supplied
   attribute. The number of values in the list depends on the ComparisonOperator 
   being used.
   
   For type Number, value comparisons are numeric.
   
   String value comparisons for greater than, equals, or less than are based on
   ASCII character code values. For example, a is greater than A , and a is
   greater than B . For a list of code values, see 
   http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters
   [http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters] .
   
   For type Binary, DynamoDB treats each byte of the binary data as unsigned
   when it compares binary values.
   
   
 * ComparisonOperator - A comparator for evaluating attributes in the 
   AttributeValueList . When performing the comparison, DynamoDB uses strongly
   consistent reads.
   
   The following comparison operators are available:
   
   EQ | NE | LE | LT | GE | GT | NOT_NULL | NULL | CONTAINS | NOT_CONTAINS |
   BEGINS_WITH | IN | BETWEEN
   
   The following are descriptions of each comparison operator.
   
    * EQ : Equal. EQ is supported for all datatypes, including lists and maps.
      
      AttributeValueList can contain only one AttributeValue element of type
      String, Number, Binary, String Set, Number Set, or Binary Set. If an item
      contains an AttributeValue element of a different type than the one
      provided in the request, the value does not match. For example, {&quot;S&quot;:&quot;6&quot;} 
      does not equal {&quot;N&quot;:&quot;6&quot;} . Also, {&quot;N&quot;:&quot;6&quot;} does not equal {&quot;NS&quot;:[&quot;6&quot;, &quot;2&quot;,
      &quot;1&quot;]} .
      
      
      
      
    * NE : Not equal. NE is supported for all datatypes, including lists and
      maps.
      
      AttributeValueList can contain only one AttributeValue of type String,
      Number, Binary, String Set, Number Set, or Binary Set. If an item contains
      an AttributeValue of a different type than the one provided in the
      request, the value does not match. For example, {&quot;S&quot;:&quot;6&quot;} does not equal 
      {&quot;N&quot;:&quot;6&quot;} . Also, {&quot;N&quot;:&quot;6&quot;} does not equal {&quot;NS&quot;:[&quot;6&quot;, &quot;2&quot;, &quot;1&quot;]} .
      
      
      
      
    * LE : Less than or equal.
      
      AttributeValueList can contain only one AttributeValue element of type
      String, Number, or Binary (not a set type). If an item contains an 
      AttributeValue element of a different type than the one provided in the
      request, the value does not match. For example, {&quot;S&quot;:&quot;6&quot;} does not equal 
      {&quot;N&quot;:&quot;6&quot;} . Also, {&quot;N&quot;:&quot;6&quot;} does not compare to {&quot;NS&quot;:[&quot;6&quot;, &quot;2&quot;, &quot;1&quot;]} .
      
      
      
      
    * LT : Less than.
      
      AttributeValueList can contain only one AttributeValue of type String,
      Number, or Binary (not a set type). If an item contains an AttributeValue 
      element of a different type than the one provided in the request, the
      value does not match. For example, {&quot;S&quot;:&quot;6&quot;} does not equal {&quot;N&quot;:&quot;6&quot;} .
      Also, {&quot;N&quot;:&quot;6&quot;} does not compare to {&quot;NS&quot;:[&quot;6&quot;, &quot;2&quot;, &quot;1&quot;]} .
      
      
      
      
    * GE : Greater than or equal.
      
      AttributeValueList can contain only one AttributeValue element of type
      String, Number, or Binary (not a set type). If an item contains an 
      AttributeValue element of a different type than the one provided in the
      request, the value does not match. For example, {&quot;S&quot;:&quot;6&quot;} does not equal 
      {&quot;N&quot;:&quot;6&quot;} . Also, {&quot;N&quot;:&quot;6&quot;} does not compare to {&quot;NS&quot;:[&quot;6&quot;, &quot;2&quot;, &quot;1&quot;]} .
      
      
      
      
    * GT : Greater than.
      
      AttributeValueList can contain only one AttributeValue element of type
      String, Number, or Binary (not a set type). If an item contains an 
      AttributeValue element of a different type than the one provided in the
      request, the value does not match. For example, {&quot;S&quot;:&quot;6&quot;} does not equal 
      {&quot;N&quot;:&quot;6&quot;} . Also, {&quot;N&quot;:&quot;6&quot;} does not compare to {&quot;NS&quot;:[&quot;6&quot;, &quot;2&quot;, &quot;1&quot;]} .
      
      
      
      
    * NOT_NULL : The attribute exists. NOT_NULL is supported for all datatypes,
      including lists and maps.
      
      This operator tests for the existence of an attribute, not its data type.
      If the data type of attribute &quot; a &quot; is null, and you evaluate it using 
      NOT_NULL , the result is a Boolean true . This result is because the
      attribute &quot; a &quot; exists; its data type is not relevant to the NOT_NULL 
      comparison operator.
      
      
    * NULL : The attribute does not exist. NULL is supported for all datatypes,
      including lists and maps.
      
      This operator tests for the nonexistence of an attribute, not its data
      type. If the data type of attribute &quot; a &quot; is null, and you evaluate it
      using NULL , the result is a Boolean false . This is because the attribute
      &quot; a &quot; exists; its data type is not relevant to the NULL comparison
      operator.
      
      
    * CONTAINS : Checks for a subsequence, or value in a set.
      
      AttributeValueList can contain only one AttributeValue element of type
      String, Number, or Binary (not a set type). If the target attribute of the
      comparison is of type String, then the operator checks for a substring
      match. If the target attribute of the comparison is of type Binary, then
      the operator looks for a subsequence of the target that matches the input.
      If the target attribute of the comparison is a set (&quot; SS &quot;, &quot; NS &quot;, or &quot; 
      BS &quot;), then the operator evaluates to true if it finds an exact match with
      any member of the set.
      
      CONTAINS is supported for lists: When evaluating &quot; a CONTAINS b &quot;, &quot; a &quot;
      can be a list; however, &quot; b &quot; cannot be a set, a map, or a list.
      
      
    * NOT_CONTAINS : Checks for absence of a subsequence, or absence of a value
      in a set.
      
      AttributeValueList can contain only one AttributeValue element of type
      String, Number, or Binary (not a set type). If the target attribute of the
      comparison is a String, then the operator checks for the absence of a
      substring match. If the target attribute of the comparison is Binary, then
      the operator checks for the absence of a subsequence of the target that
      matches the input. If the target attribute of the comparison is a set (&quot; 
      SS &quot;, &quot; NS &quot;, or &quot; BS &quot;), then the operator evaluates to true if it does
      not find an exact match with any member of the set.
      
      NOT_CONTAINS is supported for lists: When evaluating &quot; a NOT CONTAINS b &quot;,
      &quot; a &quot; can be a list; however, &quot; b &quot; cannot be a set, a map, or a list.
      
      
    * BEGINS_WITH : Checks for a prefix.
      
      AttributeValueList can contain only one AttributeValue of type String or
      Binary (not a Number or a set type). The target attribute of the
      comparison must be of type String or Binary (not a Number or a set type).
      
      
      
      
    * IN : Checks for matching elements within two sets.
      
      AttributeValueList can contain one or more AttributeValue elements of type
      String, Number, or Binary (not a set type). These attributes are compared
      against an existing set type attribute of an item. If any elements of the
      input set are present in the item attribute, the expression evaluates to
      true.
      
      
    * BETWEEN : Greater than or equal to the first value, and less than or equal
      to the second value.
      
      AttributeValueList must contain two AttributeValue elements of the same
      type, either String, Number, or Binary (not a set type). A target
      attribute matches if the target value is greater than, or equal to, the
      first element and less than, or equal to, the second element. If an item
      contains an AttributeValue element of a different type than the one
      provided in the request, the value does not match. For example, {&quot;S&quot;:&quot;6&quot;} 
      does not compare to {&quot;N&quot;:&quot;6&quot;} . Also, {&quot;N&quot;:&quot;6&quot;} does not compare to 
      {&quot;NS&quot;:[&quot;6&quot;, &quot;2&quot;, &quot;1&quot;]}
      
      
   
   

For usage examples of AttributeValueList and ComparisonOperator , see Legacy
Conditional Parameters
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/LegacyConditionalParameters.html] 
in the Amazon DynamoDB Developer Guide .

For backward compatibility with previous DynamoDB releases, the following
parameters can be used instead of AttributeValueList and ComparisonOperator :

 * Value - A value for DynamoDB to compare with an attribute.
   
   
 * Exists - A Boolean value that causes DynamoDB to evaluate the value before
   attempting the conditional operation:
   
    * If Exists is true , DynamoDB will check to see if that attribute value
      already exists in the table. If it is found, then the condition evaluates
      to true; otherwise the condition evaluate to false.
      
      
    * If Exists is false , DynamoDB assumes that the attribute value does not 
      exist in the table. If in fact the value does not exist, then the
      assumption is valid and the condition evaluates to true. If the value is
      found, despite the assumption that it does not exist, the condition
      evaluates to false.
      
      
   
   Note that the default value for Exists is true .
   
   

The Value and Exists parameters are incompatible with AttributeValueList and 
ComparisonOperator . Note that if you use both sets of parameters at once,
DynamoDB will return a ValidationException exception.

This parameter does not support attributes of type List or Map. **/
        Expected?: ExpectedAttributeMap;
        /** This is a legacy parameter, for backward compatibility. New applications should
use ConditionExpression instead. Do not combine legacy parameters and expression
parameters in a single API call; otherwise, DynamoDB will return a 
ValidationException exception.

A logical operator to apply to the conditions in the Expected map:

 &amp;#42; AND - If all of the conditions evaluate to true, then the entire map
   evaluates to true.
   
   
 * OR - If at least one of the conditions evaluate to true, then the entire map
   evaluates to true.
   
   

If you omit ConditionalOperator , then AND is the default.

The operation will succeed only if the entire map evaluates to true.

This parameter does not support attributes of type List or Map. **/
        ConditionalOperator?: ConditionalOperator;
        /** Use ReturnValues if you want to get the item attributes as they appeared either
before or after they were updated. For UpdateItem , the valid values are:

 &amp;#42; NONE - If ReturnValues is not specified, or if its value is NONE , then
   nothing is returned. (This setting is the default for ReturnValues .)
   
   
 * ALL_OLD - If UpdateItem overwrote an attribute name-value pair, then the
   content of the old item is returned.
   
   
 * UPDATED_OLD - The old versions of only the updated attributes are returned.
   
   
 * ALL_NEW - All of the attributes of the new version of the item are returned.
   
   
 * UPDATED_NEW - The new versions of only the updated attributes are returned.
   
   

There is no additional cost associated with requesting a return value aside from
the small network and processing overhead of receiving a larger response. No
Read Capacity Units are consumed.

Values returned are strongly consistent **/
        ReturnValues?: ReturnValue;
        ReturnConsumedCapacity?: ReturnConsumedCapacity;
        /** Determines whether item collection metrics are returned. If set to SIZE , the
response includes statistics about item collections, if any, that were modified
during the operation are returned in the response. If set to NONE (the default),
no statistics are returned. **/
        ReturnItemCollectionMetrics?: ReturnItemCollectionMetrics;
        /** An expression that defines one or more attributes to be updated, the action to
be performed on them, and new value(s) for them.

The following action values are available for UpdateExpression .

 &amp;#42; SET - Adds one or more attributes and values to an item. If any of these
   attribute already exist, they are replaced by the new values. You can also
   use SET to add or subtract from an attribute that is of type Number. For
   example: SET myNum = myNum + :val
   
   SET supports the following functions:
   
    * if_not_exists (path, operand) - if the item does not contain an attribute
      at the specified path, then if_not_exists evaluates to operand; otherwise,
      it evaluates to path. You can use this function to avoid overwriting an
      attribute that may already be present in the item.
      
      
    * list_append (operand, operand) - evaluates to a list with a new element
      added to it. You can append the new element to the start or the end of the
      list by reversing the order of the operands.
      
      
   
   These function names are case-sensitive.
   
   
 * REMOVE - Removes one or more attributes from an item.
   
   
 * ADD - Adds the specified value to the item, if the attribute does not already
   exist. If the attribute does exist, then the behavior of ADD depends on the
   data type of the attribute:
   
    * If the existing attribute is a number, and if Value is also a number, then 
      Value is mathematically added to the existing attribute. If Value is a
      negative number, then it is subtracted from the existing attribute.
      
      If you use ADD to increment or decrement a number value for an item that
      doesn&#x27;t exist before the update, DynamoDB uses 0 as the initial value.
      
      Similarly, if you use ADD for an existing item to increment or decrement
      an attribute value that doesn&#x27;t exist before the update, DynamoDB uses 0 
      as the initial value. For example, suppose that the item you want to
      update doesn&#x27;t have an attribute named itemcount , but you decide to ADD 
      the number 3 to this attribute anyway. DynamoDB will create the itemcount 
      attribute, set its initial value to 0 , and finally add 3 to it. The
      result will be a new itemcount attribute in the item, with a value of 3 .
      
      
    * If the existing data type is a set and if Value is also a set, then Value 
      is added to the existing set. For example, if the attribute value is the
      set [1,2] , and the ADD action specified [3] , then the final attribute
      value is [1,2,3] . An error occurs if an ADD action is specified for a set
      attribute and the attribute type specified does not match the existing set
      type.
      
      Both sets must have the same primitive data type. For example, if the
      existing data type is a set of strings, the Value must also be a set of
      strings.
      
      
   
   The ADD action only supports Number and set data types. In addition, ADD can
   only be used on top-level attributes, not nested attributes.
   
   
 * DELETE - Deletes an element from a set.
   
   If a set of values is specified, then those values are subtracted from the
   old set. For example, if the attribute value was the set [a,b,c] and the 
   DELETE action specifies [a,c] , then the final attribute value is [b] .
   Specifying an empty set is an error.
   
   The DELETE action only supports set data types. In addition, DELETE can only
   be used on top-level attributes, not nested attributes.
   
   

You can have many actions in a single expression, such as the following: SET
a=:value1, b=:value2 DELETE :value3, :value4, :value5

For more information on update expressions, see Modifying Items and Attributes
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.Modifying.html] 
in the Amazon DynamoDB Developer Guide .

UpdateExpression replaces the legacy AttributeUpdates parameter. **/
        UpdateExpression?: UpdateExpression;
        /** A condition that must be satisfied in order for a conditional update to succeed.

An expression can contain any of the following:

 &amp;#42; Functions: attribute_exists | attribute_not_exists | attribute_type |
   contains | begins_with | size
   
   These function names are case-sensitive.
   
   
 * Comparison operators: = | | | | = | = | BETWEEN | IN
   
   
 * Logical operators: AND | OR | NOT
   
   

For more information on condition expressions, see Specifying Conditions
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.SpecifyingConditions.html] 
in the Amazon DynamoDB Developer Guide .

ConditionExpression replaces the legacy ConditionalOperator and Expected 
parameters. **/
        ConditionExpression?: ConditionExpression;
        /** One or more substitution tokens for attribute names in an expression. The
following are some use cases for using ExpressionAttributeNames :

 &amp;#42; To access an attribute whose name conflicts with a DynamoDB reserved word.
   
   
 * To create a placeholder for repeating occurrences of an attribute name in an
   expression.
   
   
 * To prevent special characters in an attribute name from being misinterpreted
   in an expression.
   
   

Use the # character in an expression to dereference an attribute name. For
example, consider the following attribute name:

 * Percentile
   
   

The name of this attribute conflicts with a reserved word, so it cannot be used
directly in an expression. (For the complete list of reserved words, see 
Reserved Words
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ReservedWords.html] 
in the Amazon DynamoDB Developer Guide ). To work around this, you could specify
the following for ExpressionAttributeNames :

 * {&quot;#P&quot;:&quot;Percentile&quot;}
   
   

You could then use this substitution in an expression, as in this example:

 * #P = :val
   
   

Tokens that begin with the : character are expression attribute values , which
are placeholders for the actual value at runtime.

For more information on expression attribute names, see Accessing Item
Attributes
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.AccessingItemAttributes.html] 
in the Amazon DynamoDB Developer Guide . **/
        ExpressionAttributeNames?: ExpressionAttributeNameMap;
        /** One or more values that can be substituted in an expression.

Use the : (colon) character in an expression to dereference an attribute value.
For example, suppose that you wanted to check whether the value of the 
ProductStatus attribute was one of the following:

Available | Backordered | Discontinued

You would first need to specify ExpressionAttributeValues as follows:

{ &quot;:avail&quot;:{&quot;S&quot;:&quot;Available&quot;}, &quot;:back&quot;:{&quot;S&quot;:&quot;Backordered&quot;},
&quot;:disc&quot;:{&quot;S&quot;:&quot;Discontinued&quot;} }

You could then use these values in an expression, such as this:

ProductStatus IN (:avail, :back, :disc)

For more information on expression attribute values, see Specifying Conditions
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.SpecifyingConditions.html] 
in the Amazon DynamoDB Developer Guide . **/
        ExpressionAttributeValues?: ExpressionAttributeValueMap;
    }
    export interface UpdateItemOutput {
        /** A map of attribute values as they appeared before the UpdateItem operation. This
map only appears if ReturnValues was specified as something other than NONE in
the request. Each element represents one attribute. **/
        Attributes?: AttributeMap;
        ConsumedCapacity?: ConsumedCapacity;
        ItemCollectionMetrics?: ItemCollectionMetrics;
    }
    export interface UpdateTableInput {
        /** An array of attributes that describe the key schema for the table and indexes.
If you are adding a new global secondary index to the table, 
AttributeDefinitions must include the key element(s) of the new index. **/
        AttributeDefinitions?: AttributeDefinitions;
        /** The name of the table to be updated. **/
        TableName: TableName;
        ProvisionedThroughput?: ProvisionedThroughput;
        /** An array of one or more global secondary indexes for the table. For each index
in the array, you can request one action:

 &amp;#42; Create - add a new global secondary index to the table.
   
   
 * Update - modify the provisioned throughput settings of an existing global
   secondary index.
   
   
 * Delete - remove a global secondary index from the table.
   
   

For more information, see Managing Global Secondary Indexes
[http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GSI.OnlineOps.html] 
in the Amazon DynamoDB Developer Guide . **/
        GlobalSecondaryIndexUpdates?: GlobalSecondaryIndexUpdateList;
        /** Represents the DynamoDB Streams configuration for the table.

You will receive a ResourceInUseException if you attempt to enable a stream on a
table that already has a stream, or if you attempt to disable a stream on a
table which does not have a stream. **/
        StreamSpecification?: StreamSpecification;
    }
    export interface UpdateTableOutput {
        TableDescription?: TableDescription;
    }
    export interface WriteRequest {
        /** A request to perform a PutItem operation. **/
        PutRequest?: PutRequest;
        /** A request to perform a DeleteItem operation. **/
        DeleteRequest?: DeleteRequest;
    }
  }
}
