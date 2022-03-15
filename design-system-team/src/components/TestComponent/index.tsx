import React from "react";

import '@ricardoaruiz/design-system-core/dist/components/button'

import { TestComponentProps } from "./types";
import "./styles.scss";

export const TestComponent: React.FC<TestComponentProps> = ({ theme }) => (
  <div
    data-testid="test-component"
    className={`test-component test-component-${theme}`}
  >
    <h1 className="heading">I'm the test component</h1>
    <h2>Made with love by Harvey</h2>

	  {/* This button is a DSButton */}
		<ds-button>This is DSButton</ds-button>
  </div>
);