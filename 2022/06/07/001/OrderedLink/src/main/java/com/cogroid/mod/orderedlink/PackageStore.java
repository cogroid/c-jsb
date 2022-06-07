package com.cogroid.mod.orderedlink;

import jsb.SMachine;
import jsb.SPackageStore;

import java.util.Map;

public class PackageStore extends jsb.SPackageStore {
    public PackageStore(SMachine machine, Map more) {
        super(machine, more);
    }

    @Override
    protected SPackageStore setStore(Map more) {
        pkg("ol", new com.cogroid.mod.orderedlink.Package(machine(), more));
        return this;
    }
}
