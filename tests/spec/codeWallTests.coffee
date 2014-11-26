DEFAULT_LOAD_TIME_FOR_PROCESSINGJS = 100

prepareForProcessingJsTesting: -> true

describe "codewall", ->
  beforeEach (prepareForProcessingJsTesting) ->
    setTimeout( ()->
      prepareForProcessingJsTesting()
    , DEFAULT_LOAD_TIME_FOR_PROCESSINGJS)

  it "should draw an ellipse at (100,100) with radius 50", ->
    @pjs = Processing.getInstanceById(getProcessingSketchId())
    spyOn(@pjs, "ellipse")
    @pjs.draw()
    expect(@pjs.ellipse).toHaveBeenCalledWith(100, 100, 50, 50)
