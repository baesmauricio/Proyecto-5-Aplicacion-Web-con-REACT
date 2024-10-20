"use client";

import { ErrorBoundary } from "react-error-boundary";
import { Rick } from "./Rick/Rick";

<ErrorBoundary fallback={<div>Something went wrong</div>}>
  <Rick />
</ErrorBoundary>