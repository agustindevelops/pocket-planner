import React, { forwardRef } from 'react';
import Link from 'next/link';

const NextLink = forwardRef(
  (
    { href, ...others }: React.ComponentPropsWithoutRef<typeof Link>,
    ref: React.ForwardedRef<HTMLAnchorElement>
  ) => (
    <Link href={href} passHref>
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
      <span {...others} ref={ref} />
    </Link>
  )
);

export default NextLink;
