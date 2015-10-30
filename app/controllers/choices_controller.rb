class ChoicesController < ApplicationController
  skip_before_filter :verify_authenticity_token
  before_action :set_choice, only: [:show, :edit, :update, :destroy]

  # GET /exams/:exam_id/questions/:question_id/choices
  def index
    @exam_id = params[:exam_id]
    @choices = Choice.all.where(:question_id => params[:question_id])
  end

  # GET /exams/:exam_id/questions/:question_id/choices/:id
  def show
  end

  # POST /exams/:exam_id/questions/:question_id/choices
  def create
    @choice = Choice.new(choice_params)
    #@choice.exam_id = params[:exam_id]
    @choice.question_id = params[:question_id]
    respond_to do |format|
      if @choice.save
        format.json { render :show, status: :created, location: exam_question_choice_url(params[:exam_id], @choice.question_id, @choice) }
      else
        format.json { render json: @choice.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /exams/:exam_id/questions/:question_id/choices/:id
  def update
    respond_to do |format|
      if @choice.update(choice_params)
        format.json { render :show, status: :ok, location: exam_question_choice_url(params[:exam_id], @choice.question_id, @choice) }
      else
        format.json { render json: @choice.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /exams/:exam_id/questions/:question_id/choices/:id
  def destroy
    @choice.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_choice
      @choice = Choice.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def choice_params
      params.require(:choice).permit(:question_id, :statement, :selected)
    end
end
