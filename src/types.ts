export type InferRef<T> = T extends React.ForwardRefExoticComponent<infer Ref>
  ? Ref extends React.RefAttributes<infer RefElement>
    ? RefElement
    : never
  : never;
