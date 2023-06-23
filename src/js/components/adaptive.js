import { moveElementOnBreakpoint } from '../functions/move-element';

moveElementOnBreakpoint(
  '.profile-header__title',
  { fromSelector: '.profile-header__name', fromPosition: 'afterend' },
  { toSelector: '.profile-header__content', toPosition: 'afterend' },
  580
)
moveElementOnBreakpoint(
  '.profile-body__controls',
  { fromSelector: '.profile-body__header', fromPosition: 'beforeend' },
  { toSelector: '.profile-body__top', toPosition: 'afterend' },
  460
)
moveElementOnBreakpoint(
  '.profile-body__top-date',
  { fromSelector: '.profile-body__top-select-wrapper', fromPosition: 'afterend' },
  { toSelector: '.profile-body__top-caption', toPosition: 'afterend' },
  768
)
