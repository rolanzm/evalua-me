class QuestionsController < ApplicationController
  skip_before_filter :verify_authenticity_token
  before_action :set_question, only: [:show, :edit, :update, :destroy]

  # GET /exams/:exam_id/questions
  def index
    @questions = Question.all.where(:exam_id => params[:exam_id])
  end

  # GET /exams/:exam_id/questions/:id
  def show
  end

  # POST /questions
  def create
    @question = Question.new(question_params)
    @question.exam_id = params[:exam_id]
    respond_to do |format|
      if @question.save
        format.json { render :show, status: :created, location: exam_question_url(@question.exam_id, @question) }
      else
        format.json { render json: @question.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /exams/:exam_id/questions/:id
  def update
    respond_to do |format|
      if @question.update(question_params)
        format.json { render :show, status: :ok, location: exam_question_url(@question.exam_id, @question) }
      else
        format.json { render json: @question.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /exams/:exam_id/questions/:id
  def destroy
    @question.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_question
      @question = Question.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def question_params
      params.require(:question).permit(:exam_id, :topic_id, :difficulty, :statement)
    end
end
