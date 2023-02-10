const ActionType = Object.freeze({
    ADD: 'ADD',
    MINUS: 'MINUS',
    EDIT: 'EDIT',
    DELETE: 'DELETE',
    LOGIN: 'LOGIN',
    EXPORT: 'EXPORT',
    IMPORT: 'IMPORT',
    PUBLISH: 'PUBLISH',
    SORT: 'SORT',
    ACTIVE: 'ACTIVE',
    INACTIVE: 'INACTIVE',
    SUSPEND: 'SUSPEND',
    USE: 'USE'
});

const AddDiamondTransactionState = Object.freeze({
    SUCCESS: 'SUCCESS',
    REFUND: 'REFUND',
    EXCHANGE: 'EXCHANGE',
    PURCHASE: 'PURCHASE',
    CANCELED_BET: 'CANCELED_BET',
    WIN_BET: 'WIN_BET',
    PLACE_BET: 'PLACE_BET',
    REWARD: 'REWARD'
});

const AddDiamondTransactionType = Object.freeze({
    PARTNER: 'PARTNER',
    ISPORT: 'ISPORT'
});

const BannerLink = Object.freeze({
    LEADER_BOARD: 'LEADER_BOARD',
    FIXTURE_DETAIL: 'FIXTURE_DETAIL',
    PROFILE: 'PROFILE',
    TUTORIAL: 'TUTORIAL'
});

const BannerState = Object.freeze({
    NEW: 'NEW',
    ACTIVE: 'ACTIVE'
});

const BannerType = Object.freeze({
HOME: 'HOME',
TOP: 'TOP',
RANK: 'RANK',
BOTTOM: 'BOTTOM',
CART: 'CART'
});

const BetLineResult = Object.freeze({
NONE: 'NONE',
LOSE: 'LOSE',
WIN: 'WIN',
CANCELED: 'CANCELED'
});

const BetLineState = Object.freeze({
NOT_STAT: 'NOT_STAT',
LIVE: 'LIVE',
FINISHED: 'FINISHED',
COMPLETED: 'COMPLETED',
CANCELED: 'CANCELED'
});

const BetLineType = Object.freeze({
SINGLE: 'SINGLE',
MULTIPLES: 'MULTIPLES'
});

const BetOddStatus = Object.freeze({
ACTIVE: 'ACTIVE',
SUSPENDED: 'SUSPENDED'
});

export default {
    ActionType,
    AddDiamondTransactionState,
    AddDiamondTransactionType,
    BannerLink,
    BannerState,
}
