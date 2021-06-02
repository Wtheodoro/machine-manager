import { all, takeLatest } from "redux-saga/effects";
import { UsersEnumType } from './users/types'
import { getUsers } from './users/saga'

export default function* rootSaga(): any {
    return yield all([
      takeLatest(UsersEnumType.GET_USERS_REQUEST, getUsers),
      // takeLatest(UsersEnumType.DELETE_USERES_REQUEST, deleteUsers)
    ])
}