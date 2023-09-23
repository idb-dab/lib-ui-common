'use client';
import { useSidebarContext } from '@components/Sidebar/Sidebar.context';
import {
  SidebarNavSectionTitleComponent,
  SidebarNavSectionTitleProps,
} from '@components/Sidebar/SidebarNav/SidebarNavSection/SidebarNavSectionTitle/SidebarNavSectionTitle.types';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { forwardRef, Ref, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

const SidebarNavSectionTitle: SidebarNavSectionTitleComponent = forwardRef<
  HTMLLIElement,
  SidebarNavSectionTitleProps
>((props: SidebarNavSectionTitleProps, ref?: Ref<HTMLLIElement>) => {
  const theme = useComponentTheme('Sidebar');
  const { children, className } = props;
  const { color, state } = useSidebarContext();
  const classes = useMemo(() => {
    return twMerge(
      theme.navSectionTitle({
        className,
        color,
      })
    );
  }, [className, color, theme]);
  const id = usePropId(props.id);

  return (
    <li id={id} ref={ref} className={classes}>
      {(state.expanded || state.hovered) && children}
    </li>
  );
});

SidebarNavSectionTitle.displayName = 'SidebarNavSectionTitle';

export { SidebarNavSectionTitle };
