import { formatDistance } from "date-fns";
import { ru } from 'date-fns/locale';

export function rangeDate(date) {
	return formatDistance(new Date(date), new Date(), { locale: ru });
}