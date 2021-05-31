import { put, call } from 'redux-saga/effects'
import {
  loadGetUsersRequest, loadGetUsersSuccess, loadGetUsersFailure,
  loadDeleteUserRequest, loadDeleteUserSuccess, loadDeleteUserFailure
} from './actions'
import userService from '../../../services/user-service'
import  { UserType, UserData } from './types'

// GET
export function* getUsers() {
  try {
    const response: UserData = yield call(userService.getUsers)
    yield put(loadGetUsersSuccess(response.data))
  } catch (error) {
    console.log(error)
    yield put(loadGetUsersFailure())
  }
}

// DELETE
export function* deleteUsers(id: number) {
  try {
    yield call(userService.deleteUsers, id)
    console.log("try delete")
    // yield put(loadDeleteUserSuccess(id))
  } catch (error) {
    console.log(error)
    yield put(loadDeleteUserFailure())
  }
}