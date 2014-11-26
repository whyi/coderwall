(function() {
  var DEFAULT_LOAD_TIME_FOR_PROCESSINGJS;

  DEFAULT_LOAD_TIME_FOR_PROCESSINGJS = 100;

  ({
    prepareForProcessingJsTesting: function() {
      return true;
    }
  });

  describe("codewall", function() {
    beforeEach(function(prepareForProcessingJsTesting) {
      return setTimeout(function() {
        return prepareForProcessingJsTesting();
      }, DEFAULT_LOAD_TIME_FOR_PROCESSINGJS);
    });
    return it("should draw an ellipse at (100,100) with radius 50", function() {
      this.pjs = Processing.getInstanceById(getProcessingSketchId());
      spyOn(this.pjs, "ellipse");
      this.pjs.draw();
      return expect(this.pjs.ellipse).toHaveBeenCalledWith(100, 100, 50, 50);
    });
  });

}).call(this);
