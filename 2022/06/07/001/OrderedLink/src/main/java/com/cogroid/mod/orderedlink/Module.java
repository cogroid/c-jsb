package com.cogroid.mod.orderedlink;

import jsb.SMachine;
import jsb.SPackageStore;

import java.util.Map;

public class Module extends jsb.SModule {
    public Module(SMachine machine, Map more) {
        super(machine, more);
    }

    @Override
    protected void setInfo() {
        code("com.cogroid.mod.orderedlink");
        name("OrderedLink");
        desc("OrderedLink Samples");
        jars(new String[] {});
    }

    @Override
    protected SPackageStore createPackages(Map more) {
        return new com.cogroid.mod.orderedlink.PackageStore(machine(), more);
    }
}
