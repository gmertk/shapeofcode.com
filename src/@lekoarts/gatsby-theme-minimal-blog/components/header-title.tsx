/** @jsx jsx */
import React from "react";
import { jsx, keyframes, css } from "@emotion/core";
import { Flex } from "@theme-ui/components";
import HeaderTitle from "@lekoarts/gatsby-theme-minimal-blog/src/components/header-title";

export default function HeaderTitleWithLogo(props) {
  const bounce = keyframes`
    from {
      transform: translate3d(0,-4px,0);
    }
    to {
      transform: translate3d(0,4px,0);
    }
  `;

  return (
    <Flex sx={{ alignItems: `center` }}>
      <div
        style={{
          marginRight: "16px",
          backgroundImage: `url("logo-background.png")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <img
          height="64"
          src="logo-foreground.png"
          css={css`
            animation: ${bounce} 2s infinite alternate;
          `}
        />
      </div>

      <HeaderTitle {...props} />
    </Flex>
  );
}
