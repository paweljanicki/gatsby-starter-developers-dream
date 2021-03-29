import React from 'react';

export const IfCondition = ({
  condition,
  children,
}: {
  condition: boolean;
  children: JSX.Element | JSX.Element[];
}): JSX.Element | null => {
  if (!children) {
    return null;
  }

  if (!Array.isArray(children)) {
    children = [children];
  }

  const childrenToDisplay = children.filter(child => {
    if (condition) {
      return !child.type.name || child.type.name !== `IfFalse`;
    } else {
      return !child.type.name || child.type.name !== `IfTrue`;
    }
  });
  return <>{childrenToDisplay}</>;
};

export const IfTrue = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  return children;
};

export const IfFalse = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  return children;
};
