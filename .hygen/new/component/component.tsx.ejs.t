---
to: <%= absPath %>/<%= component_name %>.tsx
---

type Props = {};

export const <%= component_name %>: React.FC<Props> = (props) => {
  return <div className={'some-class'} data-testid="test" />;
};