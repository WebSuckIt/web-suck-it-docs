---
sidebar_position: 2
---

# Python Quick Start


## Integrate WebSuckIt into your Python application

### Install via Poetry/Pip

```bash
pip install web-suck-it-py
# or
poetry add web-suck-it-py
```

## Initialization

```py
from web_suck_it_py import WebSuckIt
from os import getenv
handler = WebSuckIt(
user_id=UUID(getenv("USER_ID")),
access_key=getenv("ACCESS_KEY"),
public_key=getenv("PUBLIC_KEY"),
)
```

You can get your `USER_ID`, `ACCESS_KEY` and `PUBLIC_KEY` from the [websuckit dashboard](https://websuckit.com/api-keys).

## Channel

## Accessing a channel's websocket URL

It is possible to access a channel websocket URL by channel name, through the `get_connection_url` function

```py
from web_suck_it_py import GetChannelRequest
connection_url = handler.get_connection_url(
    channel_name="CHANNEL-NAME",
    channel_pass_key="CHANNEL-PASS-KEY",
    replay_self=False,
)

# Import websocket client library of choice
from websockets.sync.client import connect
with connect(url) as websocket:
    message = "Hello World From Py"
    websocket.send(message)
```

### Create channel

```py
from web_suck_it_py import CreateChannelRequest
from web_suck_it_py import Channel
channel: Channel = handler.create_channel(
    CreateChannelRequest(
        channel="new-channel-name",
        max_connections=2,
    )
)
```

### Get channel

```py
from web_suck_it_py import GetChannelRequest
from web_suck_it_py import Channel
channel: Channel = handler.get_channel(
    GetChannelRequest(
        channel_name = "CHANNEL-NAME",
    )
)
```

### Get channels (paginated)

```py
from typing import List
from web_suck_it_py import GetChannelListRequest
from web_suck_it_py import Channel
channels: List[Channel] = handler.get_channels(
    GetChannelListRequest(
        page=0,
        per_page=10,
        search_key="search-channel",
    )
)
```

### Get or Create channel

```py
from web_suck_it_py import GetOrCreateChannelRequest
from web_suck_it_py import Channel
channel: Channel = handler.get_or_create_channel(
    GetOrCreateChannelRequest(
        channel_name = "CHANNEL-NAME",
    )
)
```

### Update channel

```py
from uuid import UUID
from web_suck_it_py import UpdateChannelRequest
from web_suck_it_py import Channel
channel: Channel = handler.update_channel(
    UpdateChannelRequest(
        # set to channel id
        channel_id=UUID(""),
        regenerate_pass_key=False,
        # set `channel` to change channel name
        channel="change-channel-name",
        # set `max_connections` to change maximum concurrent connections
        max_connections=5,
    )
)
```

### Delete channel

```py
from uuid import UUID
from web_suck_it_py import DeleteChannelRequest
handler.delete_channel(
    DeleteChannelRequest(
        channel_id=UUID(""),
    )
)
```

