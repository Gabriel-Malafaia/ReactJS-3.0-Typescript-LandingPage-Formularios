import {Control,FieldValues,RegisterOptions,ControllerRenderProps,FieldName} from "react-hook-form";

export type UseControllerProps<TFieldValues extends FieldValues = FieldValues> =
  {
    name: FieldName<TFieldValues>;
    rules?: Exclude<
      RegisterOptions,
      "valueAsNumber" | "valueAsDate" | "setValueAs"
    >;
    onFocus?: () => void;
    defaultValue?: unknown;
    control?: Control<TFieldValues>;
  };

export type UseControllerReturn<
  TFieldValues extends FieldValues = FieldValues
> = {
  field: ControllerRenderProps<TFieldValues>;
};
