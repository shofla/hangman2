from otree.api import (
    models, widgets, BaseConstants, BaseSubsession, BaseGroup, BasePlayer,
    Currency as c, currency_range
)
import string
import random

author = 'Sean Hofland'

doc = """
oTree experiment playing hangman
"""


class Constants(BaseConstants):
    name_in_url = 'hangman52'
    players_per_group = None
    num_rounds = 1
    mywords = ['cat', 'bat', 'crazy']


class Subsession(BaseSubsession):
     ...


#         for p in self.get_players():
#             p.word_to_guess = random.choice(Constants.mywords)


class Group(BaseGroup):
    pass


class Player(BasePlayer):
    
    submitted_answer = models.CharField(
        widget=widgets.RadioSelect(), blank=True)
    # word_to_guess = models.CharField()
    win = models.IntegerField()
    start_to_end_time = models.IntegerField()
    n_right_letters = models.IntegerField()
    n_wrong_letters = models.IntegerField()
    n_letters = models.IntegerField()
    name = models.CharField()
    age = models.PositiveIntegerField()

    ordera = models.IntegerField(initial=-1)
    orderb = models.IntegerField(initial=-1)
    orderc = models.IntegerField(initial=-1)
    orderd = models.IntegerField(initial=-1)
    ordere = models.IntegerField(initial=-1)
    orderf = models.IntegerField(initial=-1)
    orderg = models.IntegerField(initial=-1)
    orderh = models.IntegerField(initial=-1)
    orderi = models.IntegerField(initial=-1)
    orderj = models.IntegerField(initial=-1)
    orderk = models.IntegerField(initial=-1)
    orderl = models.IntegerField(initial=-1)
    orderm = models.IntegerField(initial=-1)
    ordern = models.IntegerField(initial=-1)
    ordero = models.IntegerField(initial=-1)
    orderp = models.IntegerField(initial=-1)
    orderq = models.IntegerField(initial=-1)
    orderr = models.IntegerField(initial=-1)
    orders = models.IntegerField(initial=-1)
    ordert = models.IntegerField(initial=-1)
    orderu = models.IntegerField(initial=-1)
    orderv = models.IntegerField(initial=-1)
    orderw = models.IntegerField(initial=-1)
    orderx = models.IntegerField(initial=-1)
    ordery = models.IntegerField(initial=-1)
    orderz = models.IntegerField(initial=-1)

# Define s to be a string containing all lower-case alphabet letters.
s = set(string.ascii_lowercase)

# Loop, for every alphabet letter, for every player, construct the word "order"+ the letter, and assign it
# an initial integer value of -1, and make it blank (whatever that meant).
#     for i in s:
#         Player.add_to_class("order{}".format(i),
#             models.IntegerField(initial=-1, blank=True))


