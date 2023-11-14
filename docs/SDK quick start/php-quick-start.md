---
sidebar_position: 3
---

# PHP Quick Start

Use this guide to quickly integrate WebSuckIt into your PHP application.

## Integrate the WebSuckIt SDK to your PHP application

### Install via Packagist

```bash
composer require websuckit/websuckit-php
```

### Initialization

```php
use Websuckit\WebsuckitPhp\Config;
use Websuckit\WebsuckitPhp\Websuckit;

$config = new Config($_ENV['USER_ID'], $_ENV['ACCESS_KEY'], $_ENV['PUBLIC_KEY']);
$ws = new Websuckit($config);
```

You can obtain your `USER_ID`, `ACCESS_KEY`, and `PUBLIC_KEY` from the [WebSuckIt dashboard](https://websuckit.com/api-keys). For guidance on how to do this, please refer to the [**quick start guide**](https://websuckit.com/docs/quick-start).

## Channel

### Accessing a channel's websocket URL

To obtain a channel's websocket URL, use can the `getConnectionUrl` method. It accepts 3 arguments:

**Arguments:**

- `$channelName`: The name of the channel you want to connect to.
- `$channelPassKey`: The passkey of the channel you want to connect to.
- `replaySelf` (optional): A boolean value that, if set to true, regenerates the channel passkey. If set to false, the passkey remains unchanged.

```php
<?php

use \Websuckit\WebsuckitPhp\Types\ChannelConnectionUrlConfig;

$channel = new ChannelConnectionUrlConfig('channel-name', 'channel-pass-key', true);
$websuckit->getConnectionUrl($channel);
```

### Create a channel

To create a channel, use the `createChannel` method. It returns an array with the channel details. It accepts 2 arguments:

**Arguments:**

- `$channelName`: The name of the channel you want to connect to.
- `$max_connections` (optinal): Maximum number of concurrent connections allowed for the channel.

```php
<?php

$channelResponse = $ws->createChannel("channel-name", 10);
```

### Get a channel

Use the getChannel method to retrieve details of an existing channel.

**Arguments:**

- `$channelName`: The name of the channel.

```php
<?php

$channelResponse = $ws->getChannel("channel-name");
```

### Get channels

Use the getChannels method to retrieve a list of all your channels.

**Arguments:**

- `page`: Page number (0-indexed).
- `per_page`: Number of channels per page.
- `search_key` (optional): Filter channels by name.

```php
$channelsResponse = $ws->getChannels(1, 5, 'channel-name');
```

### Get or create a channel

Use the `getOrCreateChannel` method to get an existing channel or create a new one.

```php
<?php

$channelResponse = $ws->getOrCreateChannel("channel-name");
```

### Update a channel

To update a channel, use the `updateChannel` method. It returns an array with the updated channel details.

**Arguments:**

- `$channelId`: The unique identifier (UUID) of the channel.
- `$channelName`: The new name for the channel.
- `$regeneratePassKey`: Boolean indicating whether to regenerate the channel passkey.
- `$max_connections` (optional): Maximum number of connections allowed for the channel.

```php
<?php

// Update an existing channel
$channelResponse = $ws->updateChannel("channel-id", "new-channel-name", true, 10);
```

### Delete a channel

Use the `deleteChannel` method to delete an existing channel.

**Arguments:**

- `channelId`: The unique identifier (UUID) of the channel.

```php
  $channelResponse = $ws->deleteChannel("channel-id");
```
