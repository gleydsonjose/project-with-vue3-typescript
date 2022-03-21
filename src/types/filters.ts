export type DaysFilterTuple = [7, 15, 30, 60, 90]

export type DaysFilterUnion = DaysFilterTuple[number] | 0

export interface ICustomDateFilter {
  start: string
  final: string
}

export interface IPeriodFilters {
  selectedDay: DaysFilterUnion
  customDate: ICustomDateFilter
}