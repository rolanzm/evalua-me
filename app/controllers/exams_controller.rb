class ExamsController < ApplicationController
  skip_before_filter :verify_authenticity_token
  before_action :set_exam, only: [:show, :edit, :update, :destroy]

  # GET /exams
  def index
    @exams = Exam.all
  end

  # GET /exams/:id
  def show
  end

  # POST /exams
  def create
    @exam = Exam.new(exam_params)

    respond_to do |format|
      if @exam.save
        format.json { render :show, status: :created, location: @exam }
      else
        format.json { render json: @exam.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /exams/:id
  def update
    respond_to do |format|
      if @exam.update(exam_params)
        format.json { render :show, status: :ok, location: @exam }
      else
        format.json { render json: @exam.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /exams/:id
  def destroy
    @exam.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_exam
      @exam = Exam.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def exam_params
      params.require(:exam).permit(:name, :course_id)
    end
end
