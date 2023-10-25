import DatePickerWithRange from "@/components/date-picker-with-range";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export function DatePicker() {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-2">
          <Label htmlFor="date" className="shrink-0">
            Escolha uma data
          </Label>
          <DatePickerWithRange className="[&>button]:w-[260px]" />
        </div>
      </CardContent>
    </Card>
  );
}
