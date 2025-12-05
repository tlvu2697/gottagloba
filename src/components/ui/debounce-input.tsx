import * as React from "react";

import { Input } from "@/components/ui/input";

export interface DebouncedInputProps
  extends Omit<React.ComponentProps<"input">, "onChange"> {
  value: string | number;
  onChange: (value: any) => void;
  debounce?: number;
}

const DebouncedInput = React.forwardRef<
  HTMLInputElement,
  DebouncedInputProps
>(({ onChange, debounce = 500, value: initialValue, ...props }, ref) => {
  const [value, setValue] = React.useState(initialValue);

  // Update internal value when external value changes
  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  // Debounce the onChange callback
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value, debounce, onChange]);

  return (
    <Input
      {...props}
      ref={ref}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
});

DebouncedInput.displayName = "DebouncedInput";

export { DebouncedInput };
