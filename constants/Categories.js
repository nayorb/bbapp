import images from '../assets/images/images'
import Pullups from './exercises/Pullups'
import Pushups from './exercises/Pushups'
import Squats from './exercises/Squats'
import LegRaises from './exercises/LegRaises'
import HandstandPushups from './exercises/HandstandPushups'
import Dips from './exercises/Dips'
import Planks from './exercises/Planks'
import HumanFlag from './exercises/HumanFlag'
import FrontLever from './exercises/FrontLever'

export default [
  {
    title: 'Push-Ups',
    exercises: Pushups,
    img: images.pushup_step5,
  },
  {
    title: 'Pull-Ups',
    exercises: Pullups,
    img: images.pullup_step5,
  },
  {
    title: 'Squats',
    exercises: Squats,
    img: images.squat_step5,
  },
  {
    title: 'Leg Raises',
    exercises: LegRaises,
    img: images.legraise_step10,
  },
  {
    title: 'Handstand Push-Ups',
    exercises: HandstandPushups,
    img: images.handstandpu_step5,
  },
  {
    title: 'Human flag',
    exercises: HumanFlag,
    img: images.humanflag_pstep8,
  },
  {
    title: 'Planks',
    exercises: Planks,
    img: images.planks_fstep2,
  },
  {
    title: 'Dips',
    exercises: Dips,
    img: images.dips,
  },
  {
    title: 'Front Lever',
    exercises: FrontLever,
    img: images.frontlever,
  },
]
