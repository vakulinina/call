# Call

A small ReactJS app designed to manage call activities with detailed views and archiving.

## Summary

The app has the following features:

- **Activity Feed** - simple list of calls
- **Activity Detail** - detail of a call
- **Archive** - the final user can archive (and unarchive) a call. Archived calls will no longer be displayed on the Activity Feed and have a separate Archived Tab.
- A button to archive all calls in the activity feed
- A button to unarchive all calls in the archived calls tab

## Installation

```
npm install
npm start
```

**Note**: Please make sure to run the app in Node 16.

## API documentation

### Routes

Here is the base URL of the API: https://aircall-backend.onrender.com <br>

The API is hosted on a free server, which is why the first time you call the API it might throw an error. The server goes to sleep if there hasn't been any activity for a while, but after 30-60 seconds of making the first call, it should work as expected. Please reach out to us in case it doesn't.

- **GET** - BASE_URL/activities: get calls to display in the Activity Feed
- **GET** - BASE_URL/activities/<call_id> retrieve a specific call details
- **PATCH** - BASE_URL/activities/<call_id> update a call. The only field updatable is `is_archived (bool)`. You'll need to send a JSON in the request body:

```
{
  is_archived: true
}
```

- **PATCH** - BASE_URL/reset: Reset all calls to initial state (useful if you archived all calls).

### Call object

- **id** - unique ID of call
- **created_at** - creation date
- **direction** - `inbound` or `outbound` call
- **from** - caller's number
- **to** - callee's number
- **via** - Aircall number used for the call
- **duration** - duration of a call (in seconds)
- **is_archived** - call is archived or not
- **call_type** - can be a `missed`, `answered` or `voicemail` call.
