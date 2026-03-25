
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "../ui/label";
import { categories } from "@/lib/categories";

const CategoryInput = ({ name,register,setValue }) => {
  return (
    <div className="mb-4 w-full"> {/* เพิ่ม width และ margin */}
  <Label className="capitalize mb-2 block">{name}</Label> {/* block ทำให้ไม่ทับ */}
  <Select
    onValueChange={(value) => setValue(name, value, { shouldValidate: true })}
  >
    <SelectTrigger >
      <SelectValue placeholder="Please select category" />
    </SelectTrigger>

    <SelectContent>
      {categories.map((item) => (
        <SelectItem key={item.label} value={item.label}>
          <span className="flex items-center gap-2">
            <item.icon size={16} />
            {item.label}
          </span>
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
</div>
  );
};
export default CategoryInput;