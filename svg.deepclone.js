
SVG.extend(SVG.Element, {

    // alias clone method
    deepClone: function() {
        var newClone = this.clone();
        newClone.node.setAttribute('transform', "translate(0,0)");
        return newClone;
    }
});

SVG.extend(SVG.G, {

    // clone object with its children
    deepClone: function() {

        // Create a new group one step up
        var clone = this.parent.group();

        this.each(function() {
            clone.add(this.deepClone());
        });

        return clone;
    }
});