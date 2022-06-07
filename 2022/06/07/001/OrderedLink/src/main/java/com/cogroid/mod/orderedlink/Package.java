package com.cogroid.mod.orderedlink;

import jsb.SMachine;
import jsb.SPackage;

import java.io.FileInputStream;
import java.util.Map;

public class Package extends jsb.SPackage {
    public Package(SMachine machine, Map more) {
        super(machine, more);
    }

    protected SPackage setupVisible() {
        defaultVisible("com.cogroid.mod.orderedlink.Module", false);
        defaultVisible("com.cogroid.mod.orderedlink.Package", false);
        return this;
    }

    public Package test() {
        try {
            machine().log().info("===== com.cogroid.mod.orderedlink.zip =====");

            com.cogroid.atomspace.AtomSpace as = new com.cogroid.atomspace.AtomSpace();
            com.cogroid.atomspace.ConceptNode cna = new com.cogroid.atomspace.ConceptNode(as, "dream");
            com.cogroid.atomspace.ConceptNode cnb = new com.cogroid.atomspace.ConceptNode(as, "american");
            com.cogroid.atomspace.OrderedLink ol = new com.cogroid.atomspace.OrderedLink(as, cna, cnb);

            String log = "";

            log = "isAtom: " + ol.isAtom();
            machine().log().info(log);

            log = "isLink: " + ol.isLink();
            machine().log().info(log);

            log = "isNode: " + ol.isNode();
            machine().log().info(log);

            log = "getArity: " + ol.getArity();
            machine().log().info(log);

            log = "size: " + ol.size();
            machine().log().info(log);

            log = "toShortString: " + ol.toShortString();
            machine().log().info(log);

            log = "toString: " + ol.toString();
            machine().log().info(log);
        } catch (Throwable e) {
            machine().log().severe(machine().tool().stacktrace(e));
        }
        return this;
    }
}
