import { format } from "date-fns";
import { enUS } from "date-fns/locale";

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const formattedDate = format(date, "dd MMMM yyyy", { locale: enUS });
  return formattedDate;
}

export default formatDate;
