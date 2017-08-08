from . import models
from ._builtin import Page, WaitPage

class InitialStage(Page):
    # timeout_seconds = 180
    form_model = models.Player
    form_fields = ['submitted_answer']
    def submitted_answer_choices(self):
    # qd = self.player.current_question()
        CHOICES = [
            [None, None],
            [1, 'Low'],
            [2, 'Medium'],
            [3, 'High']]
        return CHOICES


class Gamepage(Page):
#    timeout_seconds = 180
    form_model = models.Player
    form_fields = ['win', 'n_right_letters', 'n_wrong_letters','n_letters', 'start_to_end_time',
                   'ordera', 'orderb','orderc','orderd','ordere','orderf',
                   'orderg', 'orderh','orderi','orderj','orderk','orderl',
                   'orderm', 'ordern','ordero','orderp','orderq','orderr',
                   'orders', 'ordert','orderu','orderv','orderw','orderx',
                   'ordery', 'orderz']

    def vars_for_template(self):

        return {
            'myarray': {'a': self.player.ordera,
                        'b': self.player.orderb,
                        'c': self.player.orderc,
                        'd': self.player.orderd,
                        'e': self.player.ordere,
                        'f': self.player.orderf,
                        'g': self.player.orderg,
                        'h': self.player.orderh,
                        'i': self.player.orderi,
                        'j': self.player.orderj,
                        'k': self.player.orderk,
                        'l': self.player.orderl,
                        'm': self.player.orderm,
                        'n': self.player.ordern,
                        'o': self.player.ordero,
                        'p': self.player.orderp,
                        'q': self.player.orderq,
                        'r': self.player.orderr,
                        's': self.player.orders,
                        't': self.player.ordert,
                        'u': self.player.orderu,
                        'v': self.player.orderv,
                        'w': self.player.orderw,
                        'x': self.player.orderx,
                        'y': self.player.ordery,
                        'z': self.player.orderz,}
        }

class    GameItself(Page):
    pass

page_sequence = [
#InitialStage,
     Gamepage,
    Gamepage

]
