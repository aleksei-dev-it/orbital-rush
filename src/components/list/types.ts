export interface IListItem {
	title: string
	counter?: number | string
	className?: string
}

/** Одна строка */
export type IListRow = IListItem[]

/** Пропсы компонента */
export interface IList {
	list: IListRow[]
}
