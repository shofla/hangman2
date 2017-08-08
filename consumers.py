from channels import Group
from channels.sessions import channel_session
import random
from .models import Player, Group as OtreePlayer, Constants
import json
import time


def ws_connect(message, group_name):
    Group(group_name).add(message.reply_channel)
    Player(player_name).add(message.reply_channel)



# Connected to websocket.receive
def ws_message(message, group_name, player_name):

    # define the group's id
    group_id = group_name[5:]
    player_id = player_name[5:]
    print('GROUP ID', group_id)
    print('PLAYER ID',player_id)
    print('PLAYER::::', message['text'])

    #load the text for group messages.
    jsonmessage = json.loads(message.content['text'])


    #define the group as the group in oTree
    mygroup = OtreePlayer.objects.get(id=group_id)
    myplayer = OtreePlayer.objects.get(id=player_id)


    mygroup.save()

    #define which text should be sent to the group: updated price, the new time, time left and whether someone wins.
    infoplayer = json.dumps({
                                "ordera": Player.ordera,
                                })

    #send the text meant for the group
    Group(group_name).send({
        "text": infoplayer,
    })



# Connected to websocket.disconnect
def ws_disconnect(message, group_name):
    Group(group_name).discard(message.reply_channel)
