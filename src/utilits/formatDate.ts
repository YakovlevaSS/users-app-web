import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';

function formatDate(dateString: string): string {
  // Преобразование строки в объект Date
  const date = new Date(dateString);
  // Форматирование даты в желаемый формат
  const formattedDate = format(date, 'dd MMMM yyyy', { locale: enUS });
  return formattedDate;
}

export default formatDate