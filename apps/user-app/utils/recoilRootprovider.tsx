"use client";

import { RecoilRoot } from "recoil";

function RecoilRootProvider({ children }: { children: React.ReactNode }) {
	return <RecoilRoot>{children}</RecoilRoot>;
}

export default RecoilRootProvider;
