export interface IListItem {
	id?: string;
}

export interface IBet extends IListItem {
	title: string;
	date: string;
	time: string;
	description: string;
	caption: string;
	imgSrc: string;
	alt: string;
	coefficient: number;
}

export interface IArticle extends IListItem {
	title: string;
	date: string;
	time: string;
	imgSrc: string;
}